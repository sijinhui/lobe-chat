#!/bin/bash

CONTAINER_NAME="lobe-chat-lobe-chat"
SERVICE_NAME="lobe-chat"
TARGET_SCALE_UP=2  # 扩容的目标实例数
FINAL_SCALE=1       # 最终保留的实例数

# 1. 记录扩容前的旧容器ID
OLD_CONTAINERS=$(docker ps --filter "name=${CONTAINER_NAME}" --format "{{.ID}}")

# 2. 扩容到目标实例数（例如2）
echo "Scaling up ${SERVICE_NAME} to ${TARGET_SCALE_UP} instances..."
docker-compose up -d --scale ${SERVICE_NAME}=${TARGET_SCALE_UP} --no-recreate

# 3. 获取新启动的容器ID（排除旧容器）
NEW_CONTAINERS=$(docker ps --filter "name=${CONTAINER_NAME}" --format "{{.ID}}" | grep -vw "${OLD_CONTAINERS// /\\|}")
if [ -z "$NEW_CONTAINERS" ]; then
  echo "No new containers started. Exiting."
  exit 1
fi

# 4. 等待所有新容器健康检查通过
echo "Waiting for new containers to become healthy..."
for container in $NEW_CONTAINERS; do
  while true; do
    health_status=$(docker inspect --format '{{.State.Health.Status}}' "$container" 2>/dev/null || echo "starting")
    if [ "$health_status" == "healthy" ]; then
      echo "Container $container is healthy."
      break
    else
      echo "Container $container status: $health_status. Retrying in 5s..."
      sleep 5
    fi
  done
done

# 5. 删除旧容器
if [ -n "$OLD_CONTAINERS" ]; then
  echo "Removing old containers: $OLD_CONTAINERS"
  docker stop $OLD_CONTAINERS >/dev/null
  docker rm $OLD_CONTAINERS >/dev/null
else
  echo "No old containers to remove."
fi

# 6. 调整实例数为最终目标（例如1），确保不重新创建容器
echo "Scaling down to ${FINAL_SCALE} instance(s)..."
docker-compose up -d --scale ${SERVICE_NAME}=${FINAL_SCALE} --no-recreate

echo "Operation completed successfully. Current containers:"
docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.ID}}\t{{.Names}}\t{{.Status}}"
