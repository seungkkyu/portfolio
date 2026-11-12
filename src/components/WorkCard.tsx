import Image from "next/image";
import type { Shot, Work } from "@/data/profile";
import { ChunkUploadDiagram, VoiceLoopDiagram } from "./Diagrams";
import { Tags } from "./Section";

export const bullet =
  "relative pl-3.5 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-subtle";

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-line pt-4">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item} className={bullet}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 원본 해상도가 가로 1000px 안팎이라 본문 폭(최대 약 900px) 이상으로 키우지 않는다.
// 여러 장이면 각 이미지의 flex-grow를 가로세로 비율로 줘서 높이를 맞춘다.
function Shots({ shots }: { shots: Shot[] }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-accent-soft p-3 sm:flex-row sm:p-5">
      {shots.map(({ src, alt }) => (
        <div key={src.src} className="min-w-0" style={{ flex: `${src.width / src.height} 1 0%` }}>
          <Image
            src={src}
            alt={alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 900px, 100vw"
            className="h-auto w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article id={work.slug} aria-labelledby={`${work.slug}-title`}>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-subtle">
        <span className="tabular-nums">{work.period}</span>
        <span>
          {work.company}, {work.role}
        </span>
      </p>
      <h3
        id={`${work.slug}-title`}
        className="mt-2 text-2xl font-bold tracking-[-0.025em] sm:text-[1.75rem]"
      >
        {work.title}
      </h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{work.summary}</p>
      <div className="mt-5">
        <Tags items={work.stack} />
      </div>

      <div className="mt-8">
        <Shots shots={work.shots} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <Block title="맡은 문제" items={work.problems} />
        <Block title="푼 방식" items={work.approaches} />
        <Block title="결과" items={work.results} />
      </div>

      {work.diagram && (
        <div className="mt-8">
          {work.diagram === "voice-loop" ? <VoiceLoopDiagram /> : <ChunkUploadDiagram />}
        </div>
      )}
    </article>
  );
}
