import { Job } from "@/jobs-helper";
import { formatDate } from "@/lib/utils";
import { Icons } from "./icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="min-h-56 transition-colors delay-0 duration-200 hover:border-primary hover:bg-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          {job.company}{" "}
          {job.siteUrl ? <Icons.link className="h-4 w-4 text-primary" /> : null}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {job.description}
        </CardDescription>
      </CardHeader>

      <CardContent>{job.published}</CardContent>

      <CardFooter>{formatDate(job.startDate)}</CardFooter>
    </Card>
  );
};
