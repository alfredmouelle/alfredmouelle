import type { JobEntry } from '~/lib/jobs';
import type { Locale } from '~/locales';
import { cn } from '~/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const MAX_STACKS = 4;

interface JobCardProps {
  job: JobEntry['data'];
  locale: Locale;
  labels: { readTime: string; elapsed: string; from: string; to: string };
}

export const JobCard = ({ job, locale, labels }: JobCardProps) => {
  const stacks = job.stacks.slice(0, MAX_STACKS);

  return (
    <Card
      className={cn(
        'group flex h-full min-h-48 flex-col transition duration-300 ease-out hover:-translate-y-1 hover:shadow-float',
        job.featured ? 'border-primary/40' : 'hover:border-primary/40'
      )}
    >
      <CardHeader className="grow">
        <div className="flex items-center justify-between gap-x-2">
          <CardTitle className="text-base">{job.company}</CardTitle>
          <span className="shrink-0 text-xs text-muted-foreground">
            {job.readTime} {labels.readTime}
          </span>
        </div>
        <p className="text-sm font-medium text-primary">{job.position}</p>
        <CardDescription className="mt-1 line-clamp-3 leading-relaxed">
          {job.description}
        </CardDescription>
      </CardHeader>

      {stacks.length > 0 ? (
        <CardContent className="flex flex-wrap items-center gap-1.5">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="shrink-0 rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
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

const monthYearFormatters: Partial<Record<Locale, Intl.DateTimeFormat>> = {};

const getFormatter = (locale: Locale): Intl.DateTimeFormat => {
  if (!monthYearFormatters[locale]) {
    monthYearFormatters[locale] = new Intl.DateTimeFormat(locale, {
      month: 'short',
      year: 'numeric',
    });
  }
  return monthYearFormatters[locale]!;
};

export const JobDate = ({
  startDate,
  endDate,
  locale,
  labels,
}: JobDateProps) => {
  const f = (date: Date) => {
    const d = getFormatter(locale).format(date);
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
