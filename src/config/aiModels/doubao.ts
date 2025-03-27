import { AIChatModelCard, AITTSModelCard } from '@/types/aiModel';

export const doubaoTTSModels: AITTSModelCard[] = [
  {
    description: '台湾妹子',
    displayName: 'zh_female_wanwanxiaohe_moon_bigtts',
    id: 'zh_female_wanwanxiaohe_moon_bigtts',
    pricing: {
      input: 15,
    },
    type: 'tts',
  },
]

const doubaoChatModels: AIChatModelCard[] = [
    {
        contextWindowTokens: 4096,
        description:
        '拥有极致的响应速度，更好的性价比，为客户不同场景提供更灵活的选择。支持 4k 上下文窗口的推理和精调。',
        displayName: 'Doubao Lite 4k',
        enabled: true,
        id: 'Doubao-lite-4k',
        type: 'chat',
    },
    {
        contextWindowTokens: 32_768,
        description:
            '拥有极致的响应速度，更好的性价比，为客户不同场景提供更灵活的选择。支持 32k 上下文窗口的推理和精调。',
        displayName: 'Doubao Lite 32k',
        enabled: true,
        id: 'Doubao-lite-32k',
        type: 'chat',
    },
    {
        contextWindowTokens: 128_000,
        description:
            '拥有极致的响应速度，更好的性价比，为客户不同场景提供更灵活的选择。支持 128k 上下文窗口的推理和精调。',
        displayName: 'Doubao Lite 128k',
        enabled: true,
        id: 'Doubao-lite-128k',
        type: 'chat',
    },
    {
        contextWindowTokens: 4096,
        description:
            '效果最好的主力模型，适合处理复杂任务，在参考问答、总结摘要、创作、文本分类、角色扮演等场景都有很好的效果。支持 4k 上下文窗口的推理和精调。',
        displayName: 'Doubao Pro 4k',
        enabled: true,
        id: 'Doubao-pro-4k',
        type: 'chat',
    },
    {
        config: {
          deploymentName: 'Doubao-pro-test',
        },
        contextWindowTokens: 32_768,
        description:
            '效果最好的主力模型，适合处理复杂任务，在参考问答、总结摘要、创作、文本分类、角色扮演等场景都有很好的效果。支持 32k 上下文窗口的推理和精调。',
        displayName: 'Doubao Pro 32k',
        enabled: true,
        id: 'Doubao-pro-32k',
        type: 'chat',
    },
    {
        contextWindowTokens: 128_000,
        description:
            '效果最好的主力模型，适合处理复杂任务，在参考问答、总结摘要、创作、文本分类、角色扮演等场景都有很好的效果。支持 128k 上下文窗口的推理和精调。',
        displayName: 'Doubao Pro 128k',
        enabled: true,
        id: 'Doubao-pro-128k',
        type: 'chat',
    },
];

export const allModels = [
  ...doubaoChatModels,
  ...doubaoTTSModels,
];

export default allModels;
