'use client';

import { useEffect } from 'react';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { useMounted } from '@/hooks/use-mounted';

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
        capture_pageview: false,
        debug: process.env.NODE_ENV === 'development',
      });
    }

    // return () => {
    //   posthog.reset();
    // };
  }, [mounted]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
