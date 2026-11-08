import type { ComponentType, SVGProps } from "react";
import type { Work } from "@/data/profile";
import { ChunkUploadDiagram, VoiceLoopDiagram } from "./Diagrams";
import { CheckCircleIcon, TargetIcon, WrenchIcon } from "./icons";
import { Tags } from "./Section";

function Block({
  icon: Icon,
  title,
  items,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4 text-accent" width={16} height={16} />
        {title}
      </h4>
      <ul className="mt-2.5 space-y-2 text-[15px] leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item} className="relative pl-3.5 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-subtle">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <article
      id={work.slug}
      className="rounded-2xl border border-line bg-surface p-5 sm:p-8"
      aria-labelledby={`${work.slug}-title`}
    >
      <div className="flex flex-col gap-1 text-xs text-subtle sm:flex-row sm:items-center sm:gap-3">
        <span className="font-mono text-accent">{String(index + 1).padStart(2, "0")}</span>
        <span>{work.period}</span>
        <span className="hidden sm:inline" aria-hidden="true">
          |
        </span>
        <span>
          {work.company}, {work.role}
        </span>
      </div>

      <h3 id={`${work.slug}-title`} className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
        {work.title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{work.summary}</p>
      <div className="mt-4">
        <Tags items={work.stack} />
      </div>

      <div className="mt-8 grid gap-7 lg:grid-cols-3 lg:gap-8">
        <Block icon={TargetIcon} title="맡은 문제" items={work.problems} />
        <Block icon={WrenchIcon} title="푼 방식" items={work.approaches} />
        <Block icon={CheckCircleIcon} title="결과" items={work.results} />
      </div>

      {work.diagram && (
        <div className="mt-8">
          {work.diagram === "voice-loop" ? <VoiceLoopDiagram /> : <ChunkUploadDiagram />}
        </div>
      )}
    </article>
  );
}
