import { IconAvatarProps, ModelIcon, ProviderIcon } from '@lobehub/icons';
import { Avatar, Icon, Tag, Tooltip } from '@lobehub/ui';
import { Typography } from 'antd';
import { createStyles, useResponsive } from 'antd-style';
import {
  Infinity,
  AtomIcon,
  LucideEye,
  LucideGlobe,
  LucideFlame,
  LucideImage,
  LucidePaperclip,
  ToyBrick,
} from 'lucide-react';
import numeral from 'numeral';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ModelAbilities } from '@/types/aiModel';
import { AiProviderSourceType } from '@/types/aiProvider';
import { ChatModelCard } from '@/types/llm';
import { formatTokenNumber } from '@/utils/format';

export const TAG_CLASSNAME = 'lobe-model-info-tags';

const useStyles = createStyles(({ css, token }) => ({
  tag: css`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px !important;
    height: 20px;
    border-radius: 4px;
  `,
  token: css`
    width: 36px !important;
    height: 20px;
    border-radius: 4px;

    font-family: ${token.fontFamilyCode};
    font-size: 11px;
    color: ${token.colorTextSecondary};

    background: ${token.colorFillTertiary};
  `,
}));

interface ModelInfoTagsProps extends ModelAbilities {
  contextWindowTokens?: number | null;
  directionReverse?: boolean;
  isCustom?: boolean;
  placement?: 'top' | 'right';
}

export const ModelInfoTags = memo<ModelInfoTagsProps>(
  ({ directionReverse, placement = 'right', ...model }) => {
    const { t } = useTranslation('components');
    const { styles } = useStyles();

    return (
      <Flexbox
        className={TAG_CLASSNAME}
        direction={directionReverse ? 'horizontal-reverse' : 'horizontal'}
        gap={4}
        width={'fit-content'}
      >
        {model.hot && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.hot')}
          >
            <Tag className={styles.tag} color={'error'} size={'small'}>
              <Icon icon={LucideFlame} />
            </Tag>
          </Tooltip>
        )}
        {model.files && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.file')}
          >
            <Tag className={styles.tag} color={'success'} size={'small'}>
              <Icon icon={LucidePaperclip} />
            </Tag>
          </Tooltip>
        )}
        {model.imageOutput && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.imageOutput')}
          >
            <Tag className={styles.tag} color={'success'} size={'small'}>
              <Icon icon={LucideImage} />
            </Tag>
          </Tooltip>
        )}
        {model.vision && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.vision')}
          >
            <Tag className={styles.tag} color={'success'} size={'small'}>
              <Icon icon={LucideEye} />
            </Tag>
          </Tooltip>
        )}
        {model.functionCall && (
          <Tooltip
            placement={placement}
            styles={{
              root: { maxWidth: 'unset', pointerEvents: 'none' },
            }}
            title={t('ModelSelect.featureTag.functionCall')}
          >
            <Tag className={styles.tag} color={'info'} size={'small'}>
              <Icon icon={ToyBrick} />
            </Tag>
          </Tooltip>
        )}
        {model.reasoning && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.reasoning')}
          >
            <Tag className={styles.tag} color={'purple'} size={'small'}>
              <Icon icon={AtomIcon} />
            </Tag>
          </Tooltip>
        )}
        {model.search && (
          <Tooltip
            placement={placement}
            styles={{ root: { pointerEvents: 'none' } }}
            title={t('ModelSelect.featureTag.search')}
          >
            <Tag className={styles.tag} color={'cyan'} size={'small'}>
              <Icon icon={LucideGlobe} />
            </Tag>
          </Tooltip>
        )}
        {typeof model.contextWindowTokens === 'number' && (
          <Tooltip
            placement={placement}
            styles={{
              root: { maxWidth: 'unset', pointerEvents: 'none' },
            }}
            title={t('ModelSelect.featureTag.tokens', {
              tokens:
                model.contextWindowTokens === 0
                  ? '∞'
                  : numeral(model.contextWindowTokens).format('0,0'),
            })}
          >
            <Tag className={styles.token} size={'small'}>
              {model.contextWindowTokens === 0 ? (
                <Infinity size={17} strokeWidth={1.6} />
              ) : (
                formatTokenNumber(model.contextWindowTokens as number)
              )}
            </Tag>
          </Tooltip>
        )}
      </Flexbox>
    );
  },
);

interface ModelItemRenderProps extends ChatModelCard {
  showInfoTag?: boolean;
}

// author: si
// 自定义样式：将括号内的内容用灰色样式包裹
const HighlightBrackets = ({ text }: { text: string }) => {
  // 正则表达式匹配英文括号及括号内的内容
  const regex = /\(([^)]+)\)/g;

  // 用于存储解析后的 JSX 片段
  const elements = [];
  let lastIndex = 0;

  // 使用正则表达式匹配字符串
  text.replaceAll(regex, (match, group, offset) => {
    // 将括号前的普通文本保存到数组中
    if (offset > lastIndex) {
      elements.push(text.slice(lastIndex, offset));
    }

    // 将括号和内容用灰色样式包裹，并存入数组
    elements.push(
      <span key={offset} style={{ color: 'gray' }}>
        {match}
      </span>,
    );

    // 更新 lastIndex
    lastIndex = offset + match.length;

    return match; // replace 的 callback 需要返回一个值
  });

  // 将剩余的普通文本添加到数组中
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
};

export const ModelItemRender = memo<ModelItemRenderProps>(({ showInfoTag = true, ...model }) => {
  const { mobile } = useResponsive();
  return (
    <Flexbox
      align={'center'}
      gap={32}
      horizontal
      justify={'space-between'}
      style={{ overflow: 'hidden', position: 'relative', width: mobile ? '80vw' : 'auto' }}
    >
      <Flexbox align={'center'} gap={8} horizontal style={{ overflow: 'hidden' }}>
        <ModelIcon model={model.id} size={20} />
        <Typography.Text style={mobile ? { overflowX: 'auto', whiteSpace: 'nowrap' } : {}}>
          <HighlightBrackets text={model.displayName || model.id} />
        </Typography.Text>
      </Flexbox>
      {showInfoTag && <ModelInfoTags {...model} />}
    </Flexbox>
  );
});

interface ProviderItemRenderProps {
  logo?: string;
  name: string;
  provider: string;
  source?: AiProviderSourceType;
}

export const ProviderItemRender = memo<ProviderItemRenderProps>(
  ({ provider, name, source, logo }) => {
    return (
      <Flexbox align={'center'} gap={4} horizontal>
        {source === 'custom' && !!logo ? (
          <Avatar avatar={logo} size={20} style={{ filter: 'grayscale(1)' }} title={name} />
        ) : (
          <ProviderIcon provider={provider} size={20} type={'mono'} />
        )}
        {name}
      </Flexbox>
    );
  },
);

interface LabelRendererProps {
  Icon: FC<IconAvatarProps>;
  label: string;
}

export const LabelRenderer = memo<LabelRendererProps>(({ Icon, label }) => (
  <Flexbox align={'center'} gap={8} horizontal>
    <Icon size={20} />
    <span>{label}</span>
  </Flexbox>
));
