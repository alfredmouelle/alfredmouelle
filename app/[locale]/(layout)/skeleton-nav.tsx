import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonNav() {
  return (
    <ul className="hidden items-center gap-10 justify-self-start md:flex">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-6 w-40" />
        </li>
      ))}
    </ul>
  );
}
