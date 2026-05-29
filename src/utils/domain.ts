export const getDomain = (): string => {
  const vercelUrl =
    import.meta.env.VERCEL_PROJECT_PRODUCTION_URL ??
    import.meta.env.PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) return `https://${vercelUrl}`;
  return import.meta.env.SITE ?? 'http://localhost:4321';
};
