import { Button } from '~/components/ui/button';

const ANCHOR = 'contact';

export const ContactButton = ({
  label,
  homePath,
}: {
  label: string;
  homePath: string;
}) => {
  const jumpTo = () => {
    const element = document.getElementById(ANCHOR);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `${homePath}?anchor=${ANCHOR}`);
  };

  return (
    <Button variant="link" onClick={jumpTo} className="hover:no-underline">
      <div className="flex items-center gap-x-1 text-xs font-medium text-green-700 dark:text-green-500">
        <div className="size-2 animate-pulse rounded-full bg-green-700 dark:bg-green-500" />
        <p>{label}</p>
      </div>
    </Button>
  );
};
