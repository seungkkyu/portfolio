import type { ComponentType, SVGProps } from "react";
import Header from "@/components/Header";
import { Section, Tags } from "@/components/Section";
import WorkCard from "@/components/WorkCard";
import {
  ArrowUpRightIcon,
  ChartIcon,
  ChipIcon,
  DevicesIcon,
  GaugeIcon,
  GitHubIcon,
  LayersIcon,
  MailIcon,
  MicIcon,
} from "@/components/icons";
import {
  about,
  capabilities,
  careers,
  foundation,
  otherWorks,
  profile,
  stacks,
  works,
} from "@/data/profile";

const CAPABILITY_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  LayersIcon,
  MicIcon,
  ChartIcon,
  DevicesIcon,
  GaugeIcon,
];

const bullet =
  "relative pl-3.5 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-subtle";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        본문으로 건너뛰기
      </a>
      <Header />

      <main id="main">
        {/* HERO */}
        <section id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
          <p className="text-sm font-medium text-accent">{profile.position}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.keywords.map((k) => (
              <li
                key={k}
                className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
              >
                {k}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-text px-5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
            >
              작업 보기
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold transition-colors hover:bg-surface"
            >
              <MailIcon width={16} height={16} />
              연락하기
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="About" title="임베디드에서 출발한 프론트엔드 개발자">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ol className="space-y-4">
              {careers.map((c) => (
                <li key={c.company} className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs text-subtle">{c.period}</p>
                  <p className="mt-1 font-semibold">{c.company}</p>
                  <p className="text-sm text-muted">{c.team}</p>
                  <p className="mt-2 text-sm text-muted">{c.summary}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* CAPABILITIES */}
        <Section id="capabilities" eyebrow="Capabilities" title="잘하는 일">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = CAPABILITY_ICONS[i];
              return (
                <li key={c.title} className="rounded-xl border border-line bg-surface p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon width={18} height={18} />
                  </span>
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </li>
              );
            })}
          </ul>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {stacks.map((s) => (
              <div key={s.label}>
                <dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-subtle">
                  {s.label}
                </dt>
                <dd>
                  <Tags items={s.items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* WORK */}
        <Section id="work" eyebrow="Selected Work" title="어떤 문제를 맡고, 어떻게 풀었는지">
          <div className="space-y-6 sm:space-y-8">
            {works.map((w, i) => (
              <WorkCard key={w.slug} work={w} index={i} />
            ))}
          </div>

          <h3 className="mt-16 text-lg font-bold">Other Works</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {otherWorks.map((o) => (
              <li key={o.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
                <p className="text-xs text-subtle">{o.period}</p>
                <h4 className="mt-1 font-semibold">{o.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{o.description}</p>
                <div className="mt-4">
                  <Tags items={o.stack} />
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* FOUNDATION */}
        <Section id="foundation" eyebrow="Foundation" title={foundation.lead}>
          <p className="flex items-center gap-2 text-sm text-muted">
            <ChipIcon width={16} height={16} className="text-accent" />
            {foundation.company}, {foundation.period}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {foundation.groups.map((g) => (
              <div key={g.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {g.items.map((item) => (
                    <li key={item} className={bullet}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Tags items={g.stack} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="Contact" title={profile.closing}>
          <ul className="flex flex-col gap-3 sm:flex-row">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 w-full items-center gap-2.5 rounded-lg border border-line bg-surface px-4 text-sm font-medium hover:border-accent sm:w-auto"
              >
                <MailIcon width={18} height={18} className="text-accent" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center gap-2.5 rounded-lg border border-line bg-surface px-4 text-sm font-medium hover:border-accent sm:w-auto"
              >
                <GitHubIcon width={18} height={18} />
                GitHub
                <ArrowUpRightIcon width={14} height={14} className="text-subtle" />
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line py-8">
        <p className="mx-auto max-w-5xl px-4 text-xs text-subtle sm:px-6">© 2026 {profile.name}</p>
      </footer>
    </>
  );
}
