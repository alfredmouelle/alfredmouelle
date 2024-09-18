import { Job } from "@/jobs-helper";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "./ui/button";

export const jobsMdxComponents = { Button: Button };

export const MdxJob = ({ content }: Pick<Job, "content">) => {
  return <MDXRemote source={content!} components={jobsMdxComponents} />;
};
