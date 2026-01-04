import { Suspense } from 'react';

import StructuredData from '@/components/StructuredData';
import { serverFeatureFlags } from '@/config/featureFlags';
import { BRANDING_NAME } from '@/const/branding';
import { isDesktop } from '@/const/version';
import { appEnv } from '@/envs/app';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import PageTitle from '../features/PageTitle';
import Changelog from './features/ChangelogModal';
import LoginAnnouncement from './features/LoginAnnouncement';
import TelemetryNotification from './features/TelemetryNotification';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('metadata', locale);
  return metadataModule.generate({
    description: t('chat.description', { appName: BRANDING_NAME }),
    title: t('chat.title', { appName: BRANDING_NAME }),
    url: '/chat',
  });
};

const Page = async (props: DynamicLayoutProps) => {
  const { hideDocs, showChangelog } = serverFeatureFlags();
  const { isMobile, locale } = await RouteVariants.getVariantsFromProps(props);
  const { t } = await translation('metadata', locale);
  const ld = ldModule.generate({
    description: t('chat.description', { appName: BRANDING_NAME }),
    title: t('chat.title', { appName: BRANDING_NAME }),
    url: '/chat',
  });

  // 获取登录公告配置
  const announcementText = appEnv.LOGIN_ANNOUNCEMENT_TEXT;
  const announcementLink = appEnv.LOGIN_ANNOUNCEMENT_LINK;
  console.log('debug：公告1：', announcementText)
  return (
    <>
      <StructuredData ld={ld} />
      <PageTitle />
      <LoginAnnouncement
        announcementLink={announcementLink}
        announcementText={announcementText}
      />
      <TelemetryNotification mobile={isMobile} />
      {!isDesktop && showChangelog && !hideDocs && !isMobile && (
        <Suspense>
          <Changelog />
        </Suspense>
      )}
    </>
  );
};

Page.displayName = 'Chat';

export default Page;
