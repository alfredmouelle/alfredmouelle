'use client';

import useSWR from 'swr';

import { incrementViewsAction } from '@/actions/views.action';

import { Icon } from './icons';
import { SpinningLoader } from './spinning-loader';

export const ViewCount = ({ slug }: { slug: string }) => {
  const { data: viewCount, isLoading } = useSWR(
    `/view-count/${slug}`,
    async () => {
      return incrementViewsAction(slug);
    }
  );

  if (isLoading) return <SpinningLoader className="text-muted-foreground" />;

  if (!viewCount) return null;

  return (
    <p className="rounded-full flex flex-row items-center gap-x-1 text-muted-foreground">
      {viewCount.views} <Icon name="eye" />
    </p>
  );
};