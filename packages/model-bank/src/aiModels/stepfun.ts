import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

// https://platform.stepfun.com/docs/pricing/details

const stepfunChatModels: AIChatModelCard[] = [
];

const stepfunImageModels: AIImageModelCard[] = [
  // https://platform.stepfun.com/docs/llm/image
  {
    description:
      '阶跃星辰新一代生图模型,该模型专注于图像生成任务,能够根据用户提供的文本描述,生成高质量的图像。新模型生成图片质感更真实，中英文文字生成能力更强。',
    displayName: 'Step 2X Large',
    enabled: true,
    id: 'step-2x-large',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['256x256', '512x512', '768x768', '1024x1024', '1280x800', '800x1280'],
      },
      steps: { default: 50, max: 100, min: 1 },
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description:
      '该模型拥有强大的图像生成能力，支持文本描述作为输入方式。具备原生的中文支持，能够更好的理解和处理中文文本描述，并且能够更准确地捕捉文本描述中的语义信息，并将其转化为图像特征，从而实现更精准的图像生成。模型能够根据输入生成高分辨率、高质量的图像，并具备一定的风格迁移能力。',
    displayName: 'Step 1X Medium',
    enabled: true,
    id: 'step-1x-medium',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['256x256', '512x512', '768x768', '1024x1024', '1280x800', '800x1280'],
      },
      steps: { default: 50, max: 100, min: 1 },
    },
    releasedAt: '2025-07-15',
    type: 'image',
  },
  {
    description:
      '该模型专注于图像编辑任务，能够根据用户提供的图片和文本描述，对图片进行修改和增强。支持多种输入格式，包括文本描述和示例图像。模型能够理解用户的意图，并生成符合要求的图像编辑结果。',
    displayName: 'Step 1X Edit',
    enabled: true,
    id: 'step-1x-edit',
    parameters: {
      imageUrl: { default: null },
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x512', '768x768', '1024x1024'],
      },
      steps: { default: 28, max: 100, min: 1 },
    },
    releasedAt: '2025-03-04',
    type: 'image',
  },
];

export const allModels = [...stepfunChatModels, ...stepfunImageModels];

export default allModels;
