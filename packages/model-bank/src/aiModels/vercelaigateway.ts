import { AIChatModelCard, AIEmbeddingModelCard } from '../types/aiModel';

// 根据 Vercel AI Gateway 提供的模型列表，按 SOTA、大模型、小模型排序
const vercelAIGatewayChatModels: AIChatModelCard[] = [
];

const vercelAIGatewayEmbeddingModels: AIEmbeddingModelCard[] = [
  {
    description:
      'Amazon Titan Text Embeddings V2 是一个轻量级、高效的多语言嵌入模型，支持 1024、512 和 256 维度。',
    displayName: 'Titan Text Embeddings V2',
    id: 'amazon/titan-embed-text-v2',
    maxDimension: 1024,
    pricing: {
      units: [{ name: 'textInput', rate: 0.02, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '最先进的嵌入模型，在英语、多语言和代码任务中具有出色的性能。',
    displayName: 'Gemini Embedding 001',
    id: 'google/gemini-embedding-001',
    maxDimension: 768,
    pricing: {
      units: [{ name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '针对代码和英语语言任务优化的英语聚焦文本嵌入模型。',
    displayName: 'Text Embedding 005',
    id: 'google/text-embedding-005',
    maxDimension: 768,
    pricing: {
      units: [{ name: 'textInput', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '针对跨语言任务优化的多语言文本嵌入模型，支持多种语言。',
    displayName: 'Text Multilingual Embedding 002',
    id: 'google/text-multilingual-embedding-002',
    maxDimension: 768,
    pricing: {
      units: [{ name: 'textInput', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '一个允许对文本、图像或混合内容进行分类或转换为嵌入的模型。',
    displayName: 'Embed v4.0',
    id: 'cohere/embed-v4.0',
    maxDimension: 1024,
    pricing: {
      units: [{ name: 'textInput', rate: 0.12, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '可以嵌入代码数据库和存储库以支持编码助手的代码嵌入模型。',
    displayName: 'Codestral Embed',
    id: 'mistral/codestral-embed',
    maxDimension: 1024,
    pricing: {
      units: [{ name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: '用于语义搜索、相似性、聚类和 RAG 工作流的通用文本嵌入模型。',
    displayName: 'Mistral Embed',
    id: 'mistral/mistral-embed',
    maxDimension: 1024,
    pricing: {
      units: [{ name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: 'OpenAI 最能干的嵌入模型，适用于英语和非英语任务。',
    displayName: 'text-embedding-3-large',
    id: 'openai/text-embedding-3-large',
    maxDimension: 3072,
    pricing: {
      units: [{ name: 'textInput', rate: 0.13, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: 'OpenAI 改进的、性能更高的 ada 嵌入模型版本。',
    displayName: 'text-embedding-3-small',
    id: 'openai/text-embedding-3-small',
    maxDimension: 1536,
    pricing: {
      units: [{ name: 'textInput', rate: 0.02, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
  {
    description: 'OpenAI 的传统文本嵌入模型。',
    displayName: 'text-embedding-ada-002',
    id: 'openai/text-embedding-ada-002',
    maxDimension: 1536,
    pricing: {
      units: [{ name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' }],
    },
    type: 'embedding',
  },
];

export const allModels = [...vercelAIGatewayChatModels, ...vercelAIGatewayEmbeddingModels];

export default allModels;
