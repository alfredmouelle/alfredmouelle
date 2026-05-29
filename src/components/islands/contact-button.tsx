import { Icon } from '~/components/icons';
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
    <Button variant="outline" onClick={jumpTo} className="group">
      <Icon
        name="mail"
        className="size-4 transition-transform group-hover:-translate-y-0.5"
      />
      {label}
    </Button>
  );
};
