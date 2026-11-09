import { useState } from "react";
import {
  JobBatchProgress,
  JobEmptyState,
  JobErrorAlert,
  JobItem,
  JobItemSkeleton,
  JobList,
  JobQueue,
  JobStatus,
  JobStatusTabs,
  JobTimeline,
  type JobQueueGroup,
  type JobStatusFilter,
  type JobStatusValue,
} from "@ktbhealth/ui/components/job-status";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

const STATUSES: JobStatusValue[] = ["queued", "processing", "done", "failed"];

const QUEUE_GROUPS: JobQueueGroup[] = [
  {
    status: "processing",
    jobs: [
      {
        title: "Consultation audio — intake.mp3",
        description: "Transcription pipeline · patient Maria S.",
        status: "processing",
        progress: 64,
        meta: "worker-03 · started 2 min ago",
      },
      {
        title: "Visit summary draft",
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
        title: "SOAP note export",
        description: "PDF generation",
        status: "queued",
        meta: "Position 1 in queue",
      },
      {
        title: "FHIR bundle export — March",
        description: "Bulk FHIR R4 export",
        status: "queued",
        meta: "Position 2 in queue",
      },
    ],
  },
  {
    status: "done",
    defaultOpen: false,
    jobs: [
      {
        title: "Wearable sync — yesterday",
        description: "HealthKit import",
        status: "done",
        progress: 100,
        meta: "Finished 14:32",
      },
    ],
  },
];

const FILTER_COUNTS: Record<JobStatusFilter, number> = {
  all: 6,
  queued: 2,
  processing: 2,
  done: 1,
  failed: 1,
};

export function JobStatusDemo() {
  const [filter, setFilter] = useState<JobStatusFilter>("all");
  const [filterValue, setFilterValue] = useState<JobStatusValue>("processing");

  return (
    <DemoStage>
      <div className="grid max-w-2xl gap-8">
        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Status badges</h3>
          <div className="flex flex-wrap items-center gap-3">
            {STATUSES.map((status) => (
              <JobStatus key={status} status={status} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>Custom label / icon:</span>
            <JobStatus status="processing" label="Transcribing audio" />
            <JobStatus status="done" label="Export ready" />
            <JobStatus status="failed" label="Quota exceeded" />
          </div>
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Filter tabs</h3>
          <JobStatusTabs value={filter} onValueChange={setFilter} counts={FILTER_COUNTS} />
          <p className="text-xs text-muted-foreground">
            Selected: <span className="font-medium text-foreground">{filter}</span>
          </p>
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Job rows</h3>
          <JobList>
            <JobItem
              title="Consultation audio — intake.mp3"
              description="Transcription pipeline"
              status="processing"
              progress={64}
              meta="Started 2 min ago · worker-03"
            />
            <JobItem
              title="Visit summary draft"
              description="AI summary generation"
              status="queued"
              meta="Position 2 in queue"
            />
            <JobItem
              title="SOAP note export"
              description="PDF generation"
              status="done"
              progress={100}
              meta="Finished 14:32"
              actions={
                <Button variant="ghost" size="sm">
                  View
                </Button>
              }
            />
            <JobItem
              title="Insurance eligibility check"
              description="Clearinghouse sync"
              status="failed"
              meta="Failed 13:58 · attempt 3/3"
              actions={
                <Button variant="outline" size="sm">
                  Retry
                </Button>
              }
            />
            <JobItem
              title="Wearable sync — yesterday"
              description="HealthKit import"
              status="processing"
              progress={null}
              meta="Indeterminate progress"
            />
          </JobList>
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Loading skeleton</h3>
          <JobList>
            <JobItemSkeleton />
            <JobItemSkeleton />
          </JobList>
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Grouped queue (collapsible sections)
          </h3>
          <JobQueue groups={QUEUE_GROUPS} />
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Job timeline</h3>
          <JobTimeline status={filterValue} className="max-w-md" />
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((status) => (
              <Button
                key={status}
                size="sm"
                variant={filterValue === status ? "secondary" : "outline"}
                onClick={() => setFilterValue(status)}
              >
                {status}
              </Button>
            ))}
          </div>
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Batch progress</h3>
          <JobBatchProgress
            jobs={[
              "done",
              "done",
              "done",
              "processing",
              "processing",
              "queued",
              "queued",
              "failed",
            ]}
            className="max-w-md"
          />
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Error alert with retry</h3>
          <JobErrorAlert
            jobTitle="FHIR bundle export — March"
            error="Upstream FHIR server returned 503 after 3 retries."
            attempts="attempt 3/3 · worker-02 · failed 14:05"
            actions={
              <Button variant="outline" size="sm">
                Retry
              </Button>
            }
          />
        </section>

        <section className="grid gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">Empty state</h3>
          <JobEmptyState
            className="max-w-md"
            action={
              <Button size="sm" variant="outline">
                Queue a job
              </Button>
            }
          />
        </section>
      </div>
    </DemoStage>
  );
}
