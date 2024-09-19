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
    <Card className="min-h-56 transition delay-0 duration-200 hover:scale-[1.02] hover:border-primary hover:bg-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2 text-primary">
          {job.company}{" "}
          {job.siteUrl ? <Icons.link className="h-4 w-4 text-primary" /> : null}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {job.description}
        </CardDescription>
      </CardHeader>

      <CardContent>{job.published}</CardContent>

      <CardFooter>
        {jobDate({ startDate: job.startDate, endDate: job.endDate })}
      </CardFooter>
    </Card>
  );
};

const jobDate = function ({
  startDate,
  endDate,
}: Pick<Job, "endDate" | "startDate">) {
  if (!endDate)
    return (
      <span className="text-sm text-muted-foreground">
        Depuis <span>{formatDate(startDate)}</span>
      </span>
    );

  return (
    <span className="text-sm text-muted-foreground">
      Du <span>{formatDate(startDate)}</span> au
      <span> {formatDate(endDate)}</span>
    </span>
  );
};
