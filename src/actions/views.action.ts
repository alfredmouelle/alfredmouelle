'use server';

import { cookies } from 'next/headers';

import { redis } from '@/lib/redis';

export const incrementViewsAction = async (
  slug: string
): Promise<{ views: number }> => {
  const cookieList = await cookies();

  const KEY = `job-view:${slug}`;
  const currentPostCookieDate = cookieList.get(KEY)?.value;

  if (currentPostCookieDate) {
    return {
      views: Number(await redis.get(KEY)),
    };
  }

  const newViewCount = await redis.incr(KEY);
  cookieList.set(KEY, new Date().toISOString(), {
    path: '/',
    maxAge: 60 * 60 * 12, // 12 hours
    httpOnly: true,
  });

  return { views: Number(newViewCount) };
};
