import { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren<{}>) => {
  return <h1 className="mb-10 text-3xl font-bold">{children}</h1>;
};
