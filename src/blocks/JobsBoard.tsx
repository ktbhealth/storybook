import { useState } from "react";
import {
  JobBatchProgress,
  JobEmptyState,
  JobErrorAlert,
  JobQueue,
  JobStatusTabs,
  type JobQueueGroup,
  type JobStatusFilter,
  type JobStatusValue,
} from "@ktbhealth/ui/components/job-status";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import { ListChecks, RefreshCw } from "lucide-react";

const GROUPS: JobQueueGroup[] = [
  {
    status: "processing",
    jobs: [
      {
        title: "Audio transcription — consult-2024-1187.mp3",
        description: "Transcription pipeline · patient Maria S.",
        status: "processing",
        progress: 64,
        meta: "worker-03 · started 2 min ago",
      },
      {
        title: "Visit summary draft — Dr. Ana Souza",
        description: "AI summary generation",
        status: "processing",
        progress: 38,
        meta: "worker-01 · started 1 min ago",
      },
    ],
  },
  {
    status: "queued",
    jobs: [
      {
        title: "PDF export — SOAP notes (12 visits)",
        description: "PDF generation · patient João P.",
        status: "queued",
        meta: "Position 1 in queue",
      },
      {
        title: "FHIR R4 bundle export — March",
        description: "Bulk FHIR export · clinic-wide",
        status: "queued",
        meta: "Position 2 in queue",
      },
      {
        title: "Bot recall sync — hypertension cohort",
        description: "EHR sync · 240 patients",
        status: "queued",
        meta: "Position 3 in queue",
      },
    ],
  },
  {
    status: "failed",
    jobs: [
      {
        title: "Insurance eligibility check — João P.",
        description: "Clearinghouse sync",
        status: "failed",
        meta: "Failed 13:58 · attempt 3/3",
        actions: (
          <Button variant="outline" size="sm">
            Retry
          </Button>
        ),
      },
    ],
  },
  {
    status: "done",
    defaultOpen: false,
    jobs: [
      {
        title: "Wearable sync — yesterday",
        description: "HealthKit import · patient Maria S.",
        status: "done",
        progress: 100,
        meta: "Finished 14:32",
        actions: (
          <Button variant="ghost" size="sm">
            View
          </Button>
        ),
      },
      {
        title: "Appointment reminder batch",
        description: "Notification dispatch · 18 reminders",
        status: "done",
        progress: 100,
        meta: "Finished 13:58",
      },
    ],
  },
];

const ALL_STATUSES: JobStatusValue[] = GROUPS.flatMap((g) => g.jobs.map((j) => j.status));

const COUNTS: Record<JobStatusFilter, number> = {
  all: ALL_STATUSES.length,
  queued: ALL_STATUSES.filter((s) => s === "queued").length,
  processing: ALL_STATUSES.filter((s) => s === "processing").length,
  done: ALL_STATUSES.filter((s) => s === "done").length,
  failed: ALL_STATUSES.filter((s) => s === "failed").length,
};

/** Admin console for clinic background jobs: workers, filters, grouped queue. */
export function JobsBoard() {
  const [filter, setFilter] = useState<JobStatusFilter>("all");

  const visibleGroups = GROUPS.filter(
    (g) => g.jobs.length > 0 && (filter === "all" || g.status === filter),
  );

  return (
    <div className="grid w-full max-w-2xl gap-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ListChecks className="size-4" />
              <span>
                2 workers active · {COUNTS.processing} processing · {COUNTS.queued} queued
              </span>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="size-3.5" />
              Refresh
            </Button>
          </div>
          <CardTitle className="text-lg">Background jobs</CardTitle>
          <CardDescription>
            Transcription, summaries, exports and syncs running for this clinic.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <JobStatusTabs value={filter} onValueChange={setFilter} counts={COUNTS} />

          <JobBatchProgress jobs={ALL_STATUSES} label="Batch progress — today" />

          <JobErrorAlert
            jobTitle="Insurance eligibility check — João P."
            error="Clearinghouse sync failed: payer endpoint returned 504 Gateway Timeout."
            attempts="attempt 3/3 · worker-02 · failed 13:58"
            actions={
              <Button variant="outline" size="sm">
                Retry
              </Button>
            }
          />

          {visibleGroups.length > 0 ? (
            <JobQueue groups={visibleGroups} />
          ) : (
            <JobEmptyState
              title={`No ${filter === "all" ? "" : filter} jobs`}
              description="Jobs matching this filter will appear here."
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Scheduled exports</CardTitle>
          <CardDescription>Nightly FHIR and PDF batches.</CardDescription>
        </CardHeader>
        <CardContent>
          <JobEmptyState
            title="Nothing scheduled"
            description="Scheduled export batches will queue here overnight."
            action={
              <Button size="sm" variant="outline">
                Schedule export
              </Button>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
