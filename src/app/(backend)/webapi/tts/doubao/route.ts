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
  // appid: string;
  cluster: string;
  // token: string;
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
      cluster: "volcano_tts",
    },
    audio: {
      encoding: "mp3",
      speed_ratio: 1,
      voice_type: payload.options.model,
    },
    request: {
      operation: "query",
      reqid: uuid(),
      text: payload.input,
    },
    user: {
      uid: "豆包语音",
    }
  }

  const api_key = process.env.DOUBAO_VOICE_TTS_API_KEY ?? ""

  const resp = await fetch("https://openspeech.bytedance.com/api/v1/tts", {
    body: JSON.stringify(doubaoPayload),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": api_key,
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

  return new Response(arrayBuffer, {
    headers: {
      "Content-Length": arrayBuffer.byteLength.toString(),
      "Content-Type": "audio/mpeg"
    }
  });
}
