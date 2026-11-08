import { ArrowRightIcon } from "./icons";

function Step({ label, sub, highlight }: { label: string; sub?: string; highlight?: boolean }) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col justify-center rounded-lg border px-3 py-2.5 text-center ${
        highlight ? "border-accent bg-accent-soft" : "border-line bg-surface"
      }`}
    >
      <span className="text-sm font-semibold">{label}</span>
      {sub && <span className="mt-0.5 text-xs text-subtle">{sub}</span>}
    </div>
  );
}

function Arrow() {
  return (
    <ArrowRightIcon
      className="mx-auto h-4 w-4 shrink-0 rotate-90 text-subtle sm:rotate-0"
      width={16}
      height={16}
    />
  );
}

function Flow({ steps }: { steps: { label: string; sub?: string; highlight?: boolean }[] }) {
  return (
    <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center">
      {steps.map((s, i) => (
        <div key={s.label} className="contents">
          {i > 0 && <Arrow />}
          <Step {...s} />
        </div>
      ))}
    </div>
  );
}

export function VoiceLoopDiagram() {
  return (
    <figure className="rounded-xl border border-line bg-bg p-4 sm:p-5">
      <figcaption className="mb-3 text-xs font-semibold text-subtle">음성 대화 흐름</figcaption>
      <Flow
        steps={[
          { label: "음성 입력" },
          { label: "STT", sub: "Whisper" },
          { label: "LLM 응답" },
          { label: "TTS 출력" },
          { label: "캐릭터 반응", sub: "Unity WebGL", highlight: true },
        ]}
      />
      <p className="mt-3 text-xs text-subtle">캐릭터 반응이 끝나면 다음 음성 입력으로 이어집니다.</p>
    </figure>
  );
}

export function ChunkUploadDiagram() {
  return (
    <figure className="grid gap-4 rounded-xl border border-line bg-bg p-4 sm:p-5">
      <figcaption className="text-xs font-semibold text-subtle">음성 전송 방식 변경</figcaption>
      <div>
        <p className="mb-2 text-xs font-medium text-muted">변경 전</p>
        <Flow
          steps={[
            { label: "녹음" },
            { label: "녹음 종료" },
            { label: "전체 파일 전송" },
            { label: "STT 시작" },
          ]}
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-accent">변경 후</p>
        <Flow
          steps={[
            { label: "녹음 중 청크 전송", sub: "WebSocket", highlight: true },
            { label: "녹음 종료" },
            { label: "바로 STT 처리", highlight: true },
          ]}
        />
      </div>
    </figure>
  );
}
