'use client';

import { useCurrentLocale, useScopedI18n } from '@locales/client';
import posthog from 'posthog-js';

import { GradientBorder } from '@/components/animations/gradient-border';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const DownloadCvButton = () => {
  const currentLocale = useCurrentLocale();
  const t = useScopedI18n('section_hero');

  const download = () => {
    posthog.capture('CV Downloaded', { locale: currentLocale });
    const downloadLink = getDownloadLink(currentLocale);
    downloadLink.click();
  };

  return (
    <GradientBorder>
      <Button
        onClick={download}
        className="gradient is-blue text-gray-700 transition-colors duration-200 ease-in hover:text-white dark:text-slate-300"
      >
        {t('downloadCvBtn')} <Icon name="download" className="ml-2" />
      </Button>
    </GradientBorder>
  );
};

const getDownloadLink = function (locale: ReturnType<typeof useCurrentLocale>) {
  const downloadLink = document.createElement('a');

  downloadLink.href = `/assets/cv/CV_MOUELLE_${locale.toUpperCase()}.pdf`;
  downloadLink.target = '_blank';
  document.body.appendChild(downloadLink);

  return downloadLink;
};
