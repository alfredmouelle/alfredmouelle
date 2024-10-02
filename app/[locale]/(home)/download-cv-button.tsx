'use client';

import { useCurrentLocale, useScopedI18n } from '@locales/client';

import { GradientBorder } from '@/components/animations/gradient-border';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const DownloadCvButton = () => {
  const currentLocale = useCurrentLocale();
  const t = useScopedI18n('section_hero');

  const download = () => {
    const downloadLink = getDownloadLink(currentLocale);
    downloadLink.click();
  };

  return (
    <GradientBorder>
      <Button
        onClick={download}
        className="gradient is-blue dark:text-slate-300 text-gray-700 hover:text-white transition-colors duration-200 ease-in"
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
