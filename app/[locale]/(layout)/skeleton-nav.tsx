import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonNav() {
  return (
    <ul className="hidden items-center gap-10 justify-self-start md:flex">
      <li>
        <Skeleton className="h-6 w-40" />
      </li>
      <li>
        <Skeleton className="h-6 w-40" />
      </li>
      <li>
        <Skeleton className="h-6 w-40" />
      </li>
      <li>
        <Skeleton className="h-6 w-40" />
      </li>
    </ul>
  );
}
