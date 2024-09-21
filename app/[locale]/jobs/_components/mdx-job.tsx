import { Button } from "@/components/ui/button";
import { Job } from "@/jobs-helper";
import { MDXRemote } from "next-mdx-remote/rsc";

export const jobsMdxComponents = { Button: Button };

export const MdxJob = ({ job: { content, ...job } }: { job: Job }) => {
  return (
    <div className="prose w-full max-w-none dark:prose-dark">
      <MDXRemote
        source={content}
        components={jobsMdxComponents}
        options={{ parseFrontmatter: true, scope: job }}
      />
    </div>
  );
};
