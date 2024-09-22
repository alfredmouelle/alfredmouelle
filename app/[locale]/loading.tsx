import { SpinningLoader } from '@/components/spinning-loader';

export default function Loading() {
  return (
    <div className="mt-24 flex w-screen items-center justify-center md:mt-0 md:h-screen">
      <SpinningLoader className="h-16 w-16" />
    </div>
  );
}
