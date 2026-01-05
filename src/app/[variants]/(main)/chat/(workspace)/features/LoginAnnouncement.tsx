'use client';

import { FluentEmoji, Icon } from '@lobehub/ui';
import { LucideArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';
import { memo, useEffect } from 'react';

import { notification } from '@/components/AntdStaticMethods';

// 自动关闭时间（秒）
const AUTO_CLOSE_DELAY = 10; // 30 seconds

// localStorage keys
const LOGIN_COUNTER_KEY = 'login-page-visit-counter';
const LAST_SHOWN_COUNTER_KEY = 'login-announcement-last-shown-counter';

/**
 * Validates if a string is a valid number string
 * If invalid, resets the localStorage key to '0' and returns '0'
 */
const validateAndResetCounter = (key: string, value: string | null): string => {
  if (!value) return '0';

  const parsed = Number.parseInt(value, 10);

  // If parsing failed (NaN) or negative, reset to 0
  if (Number.isNaN(parsed) || parsed < 0) {
    localStorage.setItem(key, '0');
    return '0';
  }

  return value;
};

interface LoginAnnouncementProps {
  announcementLink?: string;
  announcementText?: string;
}

const LoginAnnouncement = memo<LoginAnnouncementProps>(({ announcementText, announcementLink }) => {
  useEffect(() => {
    // 如果没有公告内容，不显示
    if (!announcementText) return;

    // 获取并验证当前登录计数器值
    const rawCurrentCounter = localStorage.getItem(LOGIN_COUNTER_KEY);
    const currentCounter = validateAndResetCounter(LOGIN_COUNTER_KEY, rawCurrentCounter);

    // 如果计数器为 '0'，说明用户从未访问过登录页（或被重置），不显示
    if (currentCounter === '0') return;

    // 获取并验证上次显示公告时的计数器值
    const rawLastShownCounter = localStorage.getItem(LAST_SHOWN_COUNTER_KEY);

    // 如果 localStorage 中没有这个 key，说明是系统更新后首次访问，需要显示公告
    const shouldShowAnnouncement = rawLastShownCounter === null
      ? true  // 没有 key，首次访问，显示公告
      : currentCounter !== validateAndResetCounter(LAST_SHOWN_COUNTER_KEY, rawLastShownCounter);  // 有 key，比较计数器值

    if (shouldShowAnnouncement) {
      // 更新上次显示公告时的计数器值
      localStorage.setItem(LAST_SHOWN_COUNTER_KEY, currentCounter);
      // 显示公告
      notification.info({
        description: (
          <div>
            <span dangerouslySetInnerHTML={{ __html: announcementText }} />
            {announcementLink && (
              <>
                {' '}
                <Link href={announcementLink} style={{ alignItems: 'center', display: 'inline-flex', gap: '4px' }} target="_blank">
                  了解更多
                  <Icon icon={LucideArrowUpRightFromSquare} size={14} />
                </Link>
              </>
            )}
          </div>
        ),
        duration: AUTO_CLOSE_DELAY,
        icon: <FluentEmoji emoji={'🔔'} size={24} />,
        message: '系统公告',
        showProgress: true,
      });

    }
  }, [announcementText, announcementLink]);

  return null;
});

export default LoginAnnouncement;
