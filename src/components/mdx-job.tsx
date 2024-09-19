import { Job } from "@/jobs-helper";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "./ui/button";

export const jobsMdxComponents = { Button: Button };

export const MdxJob = ({ job: { content, ...job } }: { job: Job }) => {
  return (
    <div className="dark:prose-dark prose w-full max-w-none">
      <MDXRemote
        source={content}
        components={jobsMdxComponents}
        options={{ parseFrontmatter: true, scope: job }}
      />
    </div>
  );
};
