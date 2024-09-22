'use client';

import { useCurrentLocale, useScopedI18n } from '@locales/client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const DownloadCvButton = () => {
  const currentLocale = useCurrentLocale();
  const t = useScopedI18n('section_hero');

  const download = () => {
    const downloadLink = getDownloadLink(currentLocale);
    downloadLink.click();
  };

  return (
    <Button onClick={download}>
      {t('downloadCvBtn')} <Icons.download className="ml-2 h-4 w-4" />
    </Button>
  );
};

const getDownloadLink = function (locale: ReturnType<typeof useCurrentLocale>) {
  const downloadLink = document.createElement('a');

  downloadLink.href = `/assets/cv/CV_MOUELLE_${locale.toUpperCase()}.pdf`;
  downloadLink.target = '_blank';
  document.body.appendChild(downloadLink);

  return downloadLink;
};
