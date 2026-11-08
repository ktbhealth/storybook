import {
  AudioPlayer,
  AudioPlayerControlBar,
  AudioPlayerDurationDisplay,
  AudioPlayerElement,
  AudioPlayerMuteButton,
  AudioPlayerPlayButton,
  AudioPlayerSeekBackwardButton,
  AudioPlayerSeekForwardButton,
  AudioPlayerTimeDisplay,
  AudioPlayerTimeRange,
  AudioPlayerVolumeRange,
} from "@ktbhealth/ui/components/ai-elements/audio-player";
import { DemoStage } from "../shell";

export function AiAudioPlayerDemo() {
  return (
    <DemoStage>
      <AudioPlayer className="max-w-md">
        <AudioPlayerElement src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        <AudioPlayerControlBar>
          <AudioPlayerPlayButton />
          <AudioPlayerSeekBackwardButton />
          <AudioPlayerTimeDisplay />
          <AudioPlayerTimeRange />
          <AudioPlayerDurationDisplay />
          <AudioPlayerSeekForwardButton />
          <AudioPlayerMuteButton />
          <AudioPlayerVolumeRange />
        </AudioPlayerControlBar>
      </AudioPlayer>
    </DemoStage>
  );
}
