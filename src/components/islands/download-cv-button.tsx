import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';

import type { Locale } from '~/locales';

export const DownloadCvButton = ({
  label,
  locale,
}: {
  label: string;
  locale: Locale;
}) => {
  const download = () => {
    const link = document.createElement('a');
    link.href = `/assets/cv/CV_MOUELLE_${locale.toUpperCase()}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={download} className="group">
      <Icon
        name="download"
        className="size-4 transition-transform group-hover:translate-y-0.5"
      />
      {label}
    </Button>
  );
};
