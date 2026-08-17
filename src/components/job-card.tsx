import type { JobEntry } from '~/lib/jobs';
import { cn } from '~/lib/utils';
import type { Locale } from '~/locales';

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

  const isCurrent = !job.endDate || new Date(job.endDate) > new Date();

  return (
    <Card
      className={cn(
        'group flex h-full min-h-48 flex-col rounded border border-border/70 bg-card shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-float',
        isCurrent ? 'border-primary/40' : 'hover:border-primary/40'
      )}
    >
      <CardHeader className="grow p-5 pb-3">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-1.5">
            <CardTitle className="font-display text-base font-bold text-foreground transition-colors group-hover:text-primary">
              {job.company}
            </CardTitle>
          </div>
          {isCurrent ? (
            <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
              {locale === 'fr' ? 'POSTE ACTUEL' : 'CURRENT'}
            </span>
          ) : (
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {job.readTime} {labels.readTime}
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-xs font-medium text-primary">
          {job.position}
        </p>
        <CardDescription className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {job.description}
        </CardDescription>
      </CardHeader>

      {stacks.length > 0 ? (
        <CardContent className="flex flex-wrap items-center gap-1.5 px-5 py-2">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="shrink-0 rounded border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {stack}
            </span>
          ))}
        </CardContent>
      ) : null}

      <CardFooter className="p-5 pt-2 font-mono text-xs text-muted-foreground">
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
      <span>
        {labels.elapsed}{' '}
        <span className="font-semibold text-foreground">{f(startDate)}</span>
      </span>
    );

  return (
    <span>
      {labels.from}{' '}
      <span className="font-semibold text-foreground">{f(startDate)}</span>{' '}
      {labels.to}{' '}
      <span className="font-semibold text-foreground">{f(endDate)}</span>
    </span>
  );
};
