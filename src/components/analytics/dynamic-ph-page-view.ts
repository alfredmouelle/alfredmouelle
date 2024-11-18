'use client';

import dynamic from 'next/dynamic';

export const DynamicPostHogPageView = dynamic(() => import('./ph-page-view'), {
  ssr: false,
});
