import { getStaticParams } from "@locales/server";

export function generateStaticParams() {
  return getStaticParams();
}

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return children;
}
