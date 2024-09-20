import { Job } from "@/jobs-helper";
import { cn, formatDate } from "@/lib/utils";
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
    <Card
      className={cn(
        "min-h-48 transition delay-0 duration-200 hover:scale-[1.02] hover:border-primary hover:bg-accent",
        {
          "border-yellow-500 hover:border-yellow-600": job.featured,
        },
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn("flex items-center gap-x-2 text-primary", {
            "text-yellow-500": job.featured,
          })}
        >
          {job.company}{" "}
          {job.siteUrl ? (
            <Icons.link
              className={cn("h-4 w-4 text-primary", {
                "text-yellow-500": job.featured,
              })}
            />
          ) : null}
          <span className="text-xs text-muted-foreground">
            {job.readTime} mins de lecture
          </span>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {job.description}
        </CardDescription>
      </CardHeader>

      <CardContent>{job.published}</CardContent>

      <CardFooter>
        <JobDate startDate={job.startDate} endDate={job.endDate} />
      </CardFooter>
    </Card>
  );
};

export const JobDate = function ({
  startDate,
  endDate,
}: Pick<Job, "endDate" | "startDate">) {
  if (!endDate)
    return (
      <span className="text-xs text-muted-foreground">
        Depuis le <span>{formatDate(startDate)}</span>
      </span>
    );

  return (
    <span className="text-xs text-muted-foreground">
      Du <span>{formatDate(startDate)}</span> au
      <span> {formatDate(endDate)}</span>
    </span>
  );
};
