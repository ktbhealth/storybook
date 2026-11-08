import {
  Commit,
  CommitActions,
  CommitAuthor,
  CommitAuthorAvatar,
  CommitContent,
  CommitCopyButton,
  CommitFile,
  CommitFileAdditions,
  CommitFileChanges,
  CommitFileDeletions,
  CommitFileInfo,
  CommitFilePath,
  CommitFileStatus,
  CommitFiles,
  CommitHash,
  CommitHeader,
  CommitInfo,
  CommitMessage,
  CommitMetadata,
  CommitSeparator,
  CommitTimestamp,
} from "@ktbhealth/ui/components/ai-elements/commit";
import { DemoStage } from "../shell";

export function AiCommitDemo() {
  return (
    <DemoStage>
      <Commit defaultOpen className="max-w-xl">
        <CommitHeader>
          <CommitInfo>
            <CommitAuthor>
              <CommitAuthorAvatar initials="AS" />
              <span className="text-sm font-medium">ana-souza</span>
            </CommitAuthor>
            <CommitSeparator>/</CommitSeparator>
            <CommitMessage>feat: add vitals trend chart</CommitMessage>
          </CommitInfo>
          <CommitMetadata>
            <CommitHash>9f2c1ab</CommitHash>
            <CommitTimestamp date={new Date("2026-11-10T14:00:00Z")} />
          </CommitMetadata>
          <CommitActions>
            <CommitCopyButton hash="9f2c1ab4d2e" />
          </CommitActions>
        </CommitHeader>
        <CommitContent>
          <CommitFiles>
            <CommitFile>
              <CommitFileInfo>
                <CommitFilePath>src/components/VitalsChart.tsx</CommitFilePath>
                <CommitFileStatus status="modified" />
              </CommitFileInfo>
              <CommitFileChanges>
                <CommitFileAdditions count={42} />
                <CommitFileDeletions count={8} />
              </CommitFileChanges>
            </CommitFile>
            <CommitFile>
              <CommitFileInfo>
                <CommitFilePath>src/lib/vitals.ts</CommitFilePath>
                <CommitFileStatus status="added" />
              </CommitFileInfo>
              <CommitFileChanges>
                <CommitFileAdditions count={96} />
                <CommitFileDeletions count={0} />
              </CommitFileChanges>
            </CommitFile>
          </CommitFiles>
        </CommitContent>
      </Commit>
    </DemoStage>
  );
}
