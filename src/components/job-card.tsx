import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';

import type { JobEntry } from '~/lib/jobs';
import type { Locale } from '~/locales';
import { cn } from '~/lib/utils';

import { Icon } from './icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

interface JobCardProps {
  job: JobEntry['data'];
  locale: Locale;
  labels: { readTime: string; elapsed: string; from: string; to: string };
}

export const JobCard = ({ job, locale, labels }: JobCardProps) => {
  return (
    <Card
      className={cn(
        'min-h-48 shadow-lg transition delay-0 duration-300 ease-in hover:scale-[1.01] hover:border-primary hover:bg-accent',
        { 'border-primary bg-accent': job.featured }
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
            {job.readTime} {labels.readTime}
          </span>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {job.description}
        </CardDescription>
      </CardHeader>

      {job.stacks.length > 0 ? (
        <CardContent className="flex flex-wrap gap-1.5">
          {job.stacks.slice(0, 5).map((stack) => (
            <span
              key={stack}
              className="rounded-md border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {stack}
            </span>
          ))}
        </CardContent>
      ) : null}

      <CardFooter>
        <JobDate
          startDate={job.startDate}
          endDate={job.endDate}
          locale={locale}
          labels={labels}
        />
      </CardFooter>
    </Card>
  );
};

interface JobDateProps {
  startDate: Date;
  endDate?: Date | null;
  locale: Locale;
  labels: { elapsed: string; from: string; to: string };
}

export const JobDate = ({ startDate, endDate, locale, labels }: JobDateProps) => {
  const f = (date: Date) => {
    const d = format(date, 'MMM yyy', { locale: locale === 'fr' ? fr : enUS });
    return (d.charAt(0).toUpperCase() + d.slice(1)).replace('.', '');
  };

  if (!endDate)
    return (
      <span className="text-xs text-muted-foreground">
        {labels.elapsed} <span>{f(startDate)}</span>
      </span>
    );

  return (
    <span className="text-xs text-muted-foreground">
      {labels.from} <span>{f(startDate)}</span> {labels.to}
      <span> {f(endDate)}</span>
    </span>
  );
};
