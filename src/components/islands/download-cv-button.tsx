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
    <div
      data-gradient-border
      className="flex items-center justify-center rounded-full"
    >
      <Button
        onClick={download}
        className="gradient is-blue text-gray-700 transition-colors duration-200 ease-in hover:text-white dark:text-slate-300"
      >
        {label}
        <Icon name="download" />
      </Button>
    </div>
  );
};
