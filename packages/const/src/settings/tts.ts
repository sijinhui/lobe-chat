import { UserTTSConfig } from '@lobechat/types';

export const DEFAULT_TTS_CONFIG: UserTTSConfig = {
  doubao: {
    ttsModel: 'zh_female_wanwanxiaohe_moon_bigtts',
  },
  openAI: {
    sttModel: 'whisper-1',
    ttsModel: 'tts-1',
  },
  sttAutoStop: true,
  sttServer: 'openai',
};
