import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

const minimaxChatModels: AIChatModelCard[] = [
];

const minimaxImageModels: AIImageModelCard[] = [
  {
    description: '全新图像生成模型，画面表现细腻，支持文生图、图生图',
    displayName: 'Image 01',
    enabled: true,
    id: 'image-01',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
  {
    description: '图像生成模型，画面表现细腻，支持文生图并进行画风设置',
    displayName: 'Image 01 Live',
    enabled: true,
    id: 'image-01-live',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
];

export const allModels = [...minimaxChatModels, ...minimaxImageModels];

export default allModels;
