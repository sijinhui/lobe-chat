export type TTSServer = 'openai' | 'edge' | 'microsoft' | 'doubao';

export interface LobeAgentTTSConfig {
  showAllLocaleVoice?: boolean;
  sttLocale: 'auto' | string;
  ttsService: TTSServer;
  voice: {
    doubao?: string;
    edge?: string;
    microsoft?: string;
    openai: string;
  };
}
