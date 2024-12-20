import { getCurrentLocale, getScopedI18n } from '@locales/server';
import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';

import { Job } from '@/jobs-helper';
import { cn } from '@/lib/utils';

import { Icon } from './icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export const JobCard = async ({ job }: { job: Job }) => {
  const t = await getScopedI18n('job');

  return (
    <Card
      className={cn(
        'min-h-48 shadow-lg transition delay-0 duration-300 ease-in hover:scale-[1.01] hover:border-primary hover:bg-accent',
        {
          'border-primary bg-accent': job.featured,
        }
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn('flex items-center gap-x-2 text-primary', {
            'text-primary': job.featured,
          })}
        >
          {job.company}{' '}
          {job.siteUrl ? (
            <Icon name="link" className="size-4 text-primary" />
          ) : null}
          <span className="text-xs text-muted-foreground">
            {job.readTime} {t('readTime')}
          </span>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {job.description}
        </CardDescription>
      </CardHeader>

      <CardContent>{job.published}</CardContent>

      <CardFooter>
        <JobDate startDate={job.startDate} endDate={job.endDate} />
      </CardFooter>
    </Card>
  );
};

export const JobDate = async function ({
  startDate,
  endDate,
}: Pick<Job, 'endDate' | 'startDate'>) {
  const locale = getCurrentLocale();
  const f = (date: Date) => {
    const d = format(date, 'MMM yyy', { locale: locale === 'fr' ? fr : enUS });
    return (d.charAt(0).toUpperCase() + d.slice(1)).replace('.', '');
  };

  const t = await getScopedI18n('job.period');

  if (!endDate)
    return (
      <span className="text-xs text-muted-foreground">
        {t('elapsed')} <span>{f(startDate)}</span>
      </span>
    );

  return (
    <span className="text-xs text-muted-foreground">
      {t('from')} <span>{f(startDate)}</span> {t('to')}
      <span> {f(endDate)}</span>
    </span>
  );
};
