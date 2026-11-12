import Image from "next/image";
import Header from "@/components/Header";
import { Section, Tags } from "@/components/Section";
import WorkCard, { bullet } from "@/components/WorkCard";
import { ArrowUpRightIcon, GitHubIcon, MailIcon } from "@/components/icons";
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

const container = "mx-auto max-w-6xl px-4 sm:px-6";

export default function Home() {
  const current = careers[0];

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
        {/* HERO: 포트폴리오 PDF 표지와 같은 구성 */}
        <section
          id="top"
          aria-labelledby="hero-name"
          className="bg-ink text-ink-text [--focus:var(--ink-accent)]"
        >
          <div className={`${container} pb-16 pt-14 sm:pb-24 sm:pt-24`}>
            <p className="text-[15px] text-ink-muted">
              {profile.nameKo}, {profile.position}
            </p>
            <h1
              id="hero-name"
              lang="en"
              className="mt-4 text-[clamp(3.25rem,11.5vw,10.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]"
            >
              SeungKyu
              <br />
              Park
            </h1>

            <div className="mt-12 grid gap-12 border-t border-ink-line pt-10 lg:mt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <div>
                <p className="max-w-xl text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">
                  {profile.headline}
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">{profile.intro}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#work"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink-text px-5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                  >
                    작업 보기
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-ink-line px-5 text-sm font-semibold transition-colors hover:border-ink-muted"
                  >
                    <MailIcon width={16} height={16} />
                    메일 보내기
                  </a>
                </div>
              </div>

              <dl className="grid content-start gap-6">
                {profile.focus.map((f) => (
                  <div key={f.title}>
                    <dt lang="en" className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                      {f.title}
                    </dt>
                    <dd className="mt-1 text-sm text-ink-muted">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-14 text-sm text-ink-muted">
              현재 <span className="text-ink-text">{current.company}</span> {current.team}에서
              일하고 있습니다.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" label="소개" lead="임베디드에서 출발한 프론트엔드 개발자">
          <div className="grid gap-12 xl:grid-cols-[1.2fr_1fr] xl:gap-16">
            <div className="max-w-2xl space-y-4 leading-[1.8] text-muted">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold">경력</h3>
              <ol className="mt-5 border-l border-line">
                {careers.map((c, i) => (
                  <li key={c.company} className="relative pb-8 pl-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full ${
                        i === 0
                          ? "bg-accent ring-4 ring-accent-soft"
                          : "border-2 border-subtle bg-bg"
                      }`}
                    />
                    <p className="text-sm tabular-nums text-subtle">{c.period}</p>
                    <p className="mt-1 flex items-center gap-2.5 font-semibold">
                      {c.logo && (
                        <Image src={c.logo} alt="" className="h-5 w-auto" aria-hidden="true" />
                      )}
                      {c.company}
                    </p>
                    <p className="text-sm text-muted">{c.team}</p>
                    <p className="mt-1.5 text-sm text-muted">{c.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        {/* CAPABILITIES */}
        <Section
          id="capabilities"
          label="역량"
          lead="제품 요구를 구조화하고, 유지보수 가능한 UI로 연결합니다."
        >
          <ul className="divide-y divide-line border-y border-line">
            {capabilities.map((c) => (
              <li key={c.title} className="grid gap-2 py-6 sm:grid-cols-[230px_1fr] sm:gap-8">
                <h3 lang="en" className="font-semibold tracking-[-0.015em]">
                  {c.title}
                </h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{c.description}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 text-sm font-semibold">기술 스택</h3>
          <dl className="mt-5 grid gap-6 sm:grid-cols-2">
            {stacks.map((s) => (
              <div key={s.label}>
                <dt lang="en" className="mb-2 text-sm text-subtle">
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
        <Section id="work" label="작업" lead="어떤 문제를 맡고, 어떻게 풀었는지">
          <div className="space-y-16 sm:space-y-20">
            {works.map((w) => (
              <WorkCard key={w.slug} work={w} />
            ))}
          </div>

          <div className="mt-20 border-t border-line pt-12">
            <h3 className="text-xl font-bold tracking-[-0.02em]">그 밖의 작업</h3>
            <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
              {otherWorks.map((o) => (
                <li key={o.title} className="flex flex-col">
                  <div className="rounded-xl bg-accent-soft p-2.5">
                    <Image
                      src={o.shot.src}
                      alt={o.shot.alt}
                      placeholder="blur"
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="aspect-[5/3] w-full rounded-md object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-sm tabular-nums text-subtle">{o.period}</p>
                  <h4 className="mt-1 font-semibold">{o.title}</h4>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
                    {o.description}
                  </p>
                  <div className="mt-4">
                    <Tags items={o.stack} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* FOUNDATION */}
        <Section id="foundation" label="기반 경험" lead={foundation.lead}>
          <p className="flex flex-wrap gap-x-4 text-sm text-subtle">
            <span>{foundation.company}</span>
            <span className="tabular-nums">{foundation.period}</span>
          </p>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            {foundation.groups.map((g) => (
              <div key={g.title} className="border-t border-line pt-5">
                <h3 className="font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-muted">
                  {g.items.map((item) => (
                    <li key={item} className={bullet}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Tags items={g.stack} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-label"
          className="bg-ink text-ink-text [--focus:var(--ink-accent)]"
        >
          <div
            className={`${container} grid gap-6 py-20 sm:py-28 lg:grid-cols-[180px_1fr] lg:gap-12`}
          >
            <h2
              id="contact-label"
              className="text-[15px] font-semibold before:mb-3 before:block before:h-0.5 before:w-6 before:bg-ink-accent"
            >
              연락처
            </h2>
            <div>
              <p className="max-w-3xl text-2xl font-bold leading-snug tracking-[-0.025em] sm:text-[2.25rem]">
                {profile.closing}
              </p>
              <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-11 items-center gap-2.5 text-lg font-semibold underline decoration-ink-line underline-offset-[6px] transition-colors hover:decoration-ink-accent"
                  >
                    <MailIcon width={20} height={20} className="text-ink-accent" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2.5 text-lg font-semibold underline decoration-ink-line underline-offset-[6px] transition-colors hover:decoration-ink-accent"
                  >
                    <GitHubIcon width={20} height={20} />
                    GitHub
                    <ArrowUpRightIcon width={16} height={16} className="text-ink-muted" />
                    <span className="sr-only">(새 창)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <footer className="border-t border-ink-line py-8">
            <p className={`${container} text-xs text-ink-muted`}>© 2026 {profile.name}</p>
          </footer>
        </section>
      </main>
    </>
  );
}
