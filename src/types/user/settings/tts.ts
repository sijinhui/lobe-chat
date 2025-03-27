export type STTServer = 'openai' | 'browser' | 'doubao';

export interface UserTTSConfig {
  doubao: {
    ttsModel: 'zh_female_wanwanxiaohe_moon_bigtts';
  };
  openAI: {
    sttModel: 'whisper-1';
    ttsModel: 'tts-1' | 'tts-1-hd';
  };
  sttAutoStop: boolean;
  sttServer: STTServer;
}
