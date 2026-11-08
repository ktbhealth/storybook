import { SchemaDisplay } from "@ktbhealth/ui/components/ai-elements/schema-display";
import { DemoStage } from "../shell";

export function AiSchemaDisplayDemo() {
  return (
    <DemoStage>
      <SchemaDisplay
        method="POST"
        path="/api/v1/visits"
        description="Create a new visit appointment for a patient."
        parameters={[
          {
            name: "patientId",
            type: "string",
            required: true,
            location: "path",
            description: "Patient UUID",
          },
          {
            name: "dryRun",
            type: "boolean",
            location: "query",
            description: "Validate without persisting",
          },
        ]}
        requestBody={[
          {
            name: "payload",
            type: "object",
            required: true,
            description: "Visit details",
            properties: [
              {
                name: "scheduledAt",
                type: "string",
                required: true,
                description: "ISO 8601 datetime",
              },
              {
                name: "type",
                type: "enum",
                required: true,
                description: "video | in-person | phone",
              },
              { name: "notes", type: "string", description: "Free-text notes" },
            ],
          },
        ]}
        responseBody={[
          { name: "id", type: "string", required: true, description: "Created visit id" },
          { name: "status", type: "string", description: "scheduled | cancelled" },
        ]}
        className="max-w-2xl"
      />
    </DemoStage>
  );
}
