import { AIChatModelCard } from '../types/aiModel';

// https://studio.nebius.com/

const nebiusChatModels: AIChatModelCard[] = [
];

// 下述模型待验证

// export const nebiusImageModels: AIImageModelCard[] = [
//   {
//     contextWindowTokens: 0,
//     displayName: 'FLUX.1-dev',
//     id: 'black-forest-labs/flux-dev',
//     pricing: {
//       units: [
//         { name: 'imageGeneration', rate: 0.007, strategy: 'fixed', unit: 'image' },
//       ],
//     },
//     type: 'image',
//   },
//   {
//     contextWindowTokens: 0,
//     displayName: 'FLUX.1-schnell',
//     id: 'black-forest-labs/flux-schnell',
//     pricing: {
//       units: [
//         { name: 'imageGeneration', rate: 0.0013, strategy: 'fixed', unit: 'image' },
//       ],
//     },
//     type: 'image',
//   },
// ];

// export const nebiusEmbeddingModels: AIEmbeddingModelCard[] = [
//   {
//     contextWindowTokens: 32_768,
//     displayName: 'BGE-ICL',
//     id: 'BAAI/bge-en-icl',
//     maxDimension: 3072,
//     pricing: {
//       units: [
//         { name: 'textInput', rate: 0.01, strategy: 'fixed', unit: 'millionTokens' },
//       ],
//     },
//     type: 'embedding',
//   },
//   {
//     contextWindowTokens: 8192,
//     displayName: 'bge-multilingual-gemma2',
//     id: 'BAAI/bge-multilingual-gemma2',
//     maxDimension: 3072,
//     pricing: {
//       units: [
//         { name: 'textInput', rate: 0.01, strategy: 'fixed', unit: 'millionTokens' },
//       ],
//     },
//     type: 'embedding',
//   },
//   {
//     contextWindowTokens: 32_768,
//     displayName: 'e5-mistral-7b-instruct',
//     id: 'intfloat/e5-mistral-7b-instruct',
//     maxDimension: 1536,
//     pricing: {
//       units: [
//         { name: 'textInput', rate: 0.01, strategy: 'fixed', unit: 'millionTokens' },
//       ],
//     },
//     type: 'embedding',
//   },
//   {
//     contextWindowTokens: 40_960,
//     displayName: 'Qwen3-Embedding-8B',
//     id: 'Qwen/Qwen3-Embedding-8B',
//     maxDimension: 3072,
//     pricing: {
//       units: [
//         { name: 'textInput', rate: 0.01, strategy: 'fixed', unit: 'millionTokens' },
//       ],
//     },
//     type: 'embedding',
//   },
// ];

export const allModels = [...nebiusChatModels];

export default allModels;
