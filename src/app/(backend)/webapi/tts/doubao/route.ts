import {uuid} from "@/utils/uuid";

export const runtime = 'edge'


// 或者自定义更多参数
interface DoubaoSpeechPayload {
  app: AppConfig;
  audio: AudioConfig;
  request: RequestConfig;
  user: UserConfig;
}

interface AppConfig {
  appid: string;
  cluster: string;
  token: string;
}

interface AudioConfig {
  encoding: string;
  pitch_ratio?: number;
  speed_ratio: number;
  voice_type: string;
  volume_ratio?: number;
}

interface RequestConfig {
  frontend_type?: string;
  operation: string;
  reqid: string;
  text: string;
  text_type?: string;
  with_frontend?: number;
}

interface UserConfig {
  uid: string;
}

export const POST = async (req: Request) => {
  const payload = (await req.json());

  const doubaoPayload: DoubaoSpeechPayload = {
    app: {
      appid: process.env.DOUBAO_VOICE_TTS_APPID ?? "",
      cluster: "volcano_tts",
      token: "access_token",
    },
    audio: {
      encoding: "wav",
      pitch_ratio: 1,
      speed_ratio: 1,
      voice_type: payload.options.model,
      // TODO: 应该用这个的，之后再看吧
      // voice_type: payload.options.voice,
      volume_ratio: 1,
    },
    request: {
      frontend_type: "unitTson",
      operation: "query",
      reqid: uuid(),
      text: payload.input,
      text_type: "plain",
      with_frontend: 1,
    },
    user: {
      uid: "1",
    }
  }
  const access_token = process.env.DOUBAO_VOICE_TTS_ACCESS_TOKEN ?? ""

  const resp = await fetch("https://openspeech.bytedance.com/api/v1/tts", {
    body: JSON.stringify(doubaoPayload),
    headers: {
      "Authorization": "Bearer;" + access_token,
      "Content-Type": "application/json"
    },
    method: "POST",
  })

  const result = await resp.json();
  const base64Data = result.data.replace(/^data:audio\/\w+;base64,/, '');
  const binaryString = atob(base64Data);
  const arrayBuffer = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    arrayBuffer[i] = binaryString.charCodeAt(i);
  }

  // 返回浏览器可直接播放的音频响应
  return new Response(arrayBuffer, {
    headers: {
      // 根据实际音频类型调整
      "Content-Length": arrayBuffer.byteLength.toString(),
      "Content-Type": "audio/wav"
    }
  });
}
