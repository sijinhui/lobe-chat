'use client';

import { VoiceList } from '@lobehub/tts';
import { Form, ItemGroup } from '@lobehub/ui';
import { Select, Switch } from 'antd';
import { debounce } from 'lodash-es';
import { Mic } from 'lucide-react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';
import { useGlobalStore } from '@/store/global';
import { globalGeneralSelectors } from '@/store/global/selectors';

import { useStore } from '../store';
import { useAgentSyncSettings } from '../useSyncAgemtSettings';
import SelectWithTTSPreview from './SelectWithTTSPreview';
import { ttsOptions } from './options';

const TTS_SETTING_KEY = 'tts';
const { openaiVoiceOptions, localeOptions } = VoiceList;

const doubaoVoiceOptions = [
  {
    "label": "湾湾女声",
    "value": "zh_female_wanwanxiaohe_moon_bigtts",
  },
  {
    "label": "北京小爷（多情感）",
    "value": "zh_male_beijingxiaoye_emo_v2_mars_bigtts",
  },
  {
    "label": "柔美女友（多情感）",
    "value": "zh_female_roumeinvyou_emo_v2_mars_bigtts",
  },
  {
    "label": "阳光青年（多情感）",
    "value": "zh_male_yangguangqingnian_emo_v2_mars_bigtts",
  },
  {
    "label": "魅力女友（多情感）",
    "value": "zh_female_meilinvyou_emo_v2_mars_bigtts",
  },
  {
    "label": "爽快思思（多情感）",
    "value": "zh_female_shuangkuaisisi_emo_v2_mars_bigtts",
  },
  {
    "label": "京腔侃爷/Harmony",
    "value": "zh_male_jingqiangkanye_moon_bigtts",
  }
]


const AgentTTS = memo(() => {
  const { t } = useTranslation('setting');
  const [form] = Form.useForm();
  const voiceList = useGlobalStore((s) => {
    const locale = globalGeneralSelectors.currentLanguage(s);
    return (all?: boolean) => new VoiceList(all ? undefined : locale);
  });
  const [showAllLocaleVoice, ttsService, updateConfig] = useStore((s) => [
    s.config.tts?.showAllLocaleVoice,
    s.config.tts?.ttsService,
    s.setAgentConfig,
  ]);

  useAgentSyncSettings(form);

  const { edgeVoiceOptions, microsoftVoiceOptions } = useMemo(
    () => voiceList(showAllLocaleVoice),
    [showAllLocaleVoice],
  );

  const tts: ItemGroup = {
    children: [
      {
        children: <Select options={ttsOptions} />,
        desc: t('settingTTS.ttsService.desc'),
        label: t('settingTTS.ttsService.title'),
        name: [TTS_SETTING_KEY, 'ttsService'],
      },
      {
        children: <Switch />,
        desc: t('settingTTS.showAllLocaleVoice.desc'),
        hidden: ttsService === 'openai' || ttsService === 'doubao',
        label: t('settingTTS.showAllLocaleVoice.title'),
        minWidth: undefined,
        name: [TTS_SETTING_KEY, 'showAllLocaleVoice'],
        valuePropName: 'checked',
      },
      {
        children: <SelectWithTTSPreview options={doubaoVoiceOptions} server={'doubao'} />,
        desc: t('settingTTS.voice.desc'),
        hidden: ttsService !== 'doubao',
        label: t('settingTTS.voice.title'),
        name: [TTS_SETTING_KEY, 'voice', 'doubao'],
      },
      {
        children: <SelectWithTTSPreview options={openaiVoiceOptions} server={'openai'} />,
        desc: t('settingTTS.voice.desc'),
        hidden: ttsService !== 'openai',
        label: t('settingTTS.voice.title'),
        name: [TTS_SETTING_KEY, 'voice', 'openai'],
      },
      {
        children: <SelectWithTTSPreview options={edgeVoiceOptions} server={'edge'} />,
        desc: t('settingTTS.voice.desc'),
        divider: false,
        hidden: ttsService !== 'edge',
        label: t('settingTTS.voice.title'),
        name: [TTS_SETTING_KEY, 'voice', 'edge'],
      },
      {
        children: <SelectWithTTSPreview options={microsoftVoiceOptions} server={'microsoft'} />,
        desc: t('settingTTS.voice.desc'),
        divider: false,
        hidden: ttsService !== 'microsoft',
        label: t('settingTTS.voice.title'),
        name: [TTS_SETTING_KEY, 'voice', 'microsoft'],
      },
      {
        children: (
          <Select
            options={[
              { label: t('settingTheme.lang.autoMode'), value: 'auto' },
              ...(localeOptions || []),
            ]}
          />
        ),
        desc: t('settingTTS.sttLocale.desc'),
        label: t('settingTTS.sttLocale.title'),
        name: [TTS_SETTING_KEY, 'sttLocale'],
      },
    ],
    icon: Mic,
    title: t('settingTTS.title'),
  };

  return (
    <Form
      form={form}
      initialValues={{
        [TTS_SETTING_KEY]: {
          voice: {
            doubao: doubaoVoiceOptions?.[0].value,
            edge: edgeVoiceOptions?.[0].value,
            microsoft: microsoftVoiceOptions?.[0].value,
            openai: openaiVoiceOptions?.[0].value,
          },
        },
      }}
      items={[tts]}
      itemsType={'group'}
      onValuesChange={debounce(updateConfig, 100)}
      variant={'pure'}
      {...FORM_STYLE}
    />
  );
});

export default AgentTTS;
