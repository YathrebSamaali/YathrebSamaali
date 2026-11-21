import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Search, X } from 'lucide-react';
import readmeRaw from '../README.md?raw';
import heroWorkspaceImg from './assets/images/hero_developer_workspace_1795280038255.jpg';
import {
  FLAGSHIP_PROJECT,
  INTERESTS,
  PROFILE,
  PUBLIC_PROJECTS,
  SKILL_DOMAINS,
  SKILL_GROUPS,
  type ProjectCategory,
  type SkillDomain,
} from './data/profile';

const PROJECT_FILTERS: ProjectCategory[] = [
  'All',
  'AI, RAG & Vision',
  'Full-Stack & DevOps',
];

export function App() {
  const [selectedSkillDomain, setSelectedSkillDomain] = useState<SkillDomain>('All');
  const [skillQuery, setSkillQuery] = useState('');
  const [selectedProjectCategory, setSelectedProjectCategory] =
    useState<ProjectCategory>('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedReadme, setCopiedReadme] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);
  const [readmeExpanded, setReadmeExpanded] = useState(false);

  const filteredSkillGroups = useMemo(() => {
    const query = skillQuery.trim().toLowerCase();
    return SKILL_GROUPS.filter(
      (group) => selectedSkillDomain === 'All' || group.domain === selectedSkillDomain
    )
      .map((group) => {
        if (!query) return group;
        const matchingItems = group.items.filter(
          (item) =>
            item.toLowerCase().includes(query) ||
            group.domain.toLowerCase().includes(query)
        );
        return { ...group, items: matchingItems };
      })
      .filter((group) => group.items.length > 0);
  }, [selectedSkillDomain, skillQuery]);

  const filteredPublicProjects = useMemo(() => {
    if (selectedProjectCategory === 'All') return PUBLIC_PROJECTS;
    return PUBLIC_PROJECTS.filter(
      (project) => project.category === selectedProjectCategory
    );
  }, [selectedProjectCategory]);

  const totalSkillCount = useMemo(
    () => SKILL_GROUPS.reduce((sum, group) => sum + group.items.length, 0),
    []
  );

  const readmeLines = useMemo(() => readmeRaw.trimEnd().split('\n'), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleCopyReadme = async () => {
    try {
      await navigator.clipboard.writeText(readmeRaw);
      setCopiedReadme(true);
      window.setTimeout(() => setCopiedReadme(false), 2000);
    } catch {
      setCopiedReadme(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAFAFA] text-[#111827]">
      {/* Strict 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-[#FAFAFA]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="shrink-0 whitespace-nowrap text-lg font-bold tracking-tight text-zinc-900"
          >
            {PROFILE.name}
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex"
          >
            <a
              href="#about"
              className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              About
            </a>
            <a
              href="#skills"
              className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#interests"
              className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              Interests
            </a>
            <a
              href="#readme-source"
              className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              README Source
            </a>
          </nav>

          <div className="shrink-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Email Me
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Split */}
        <section
          id="about"
          className="mx-auto max-w-[1200px] px-6 pt-12 pb-14 md:pt-16 md:pb-20"
        >
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
                  <span>GitHub Profile</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{PROFILE.handle}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PROFILE.location}</span>
                </p>

                <h1 className="mt-5 max-w-xl text-balance text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {PROFILE.name}
                </h1>

                <p className="mt-3 font-serif text-xl italic text-zinc-800 sm:text-2xl">
                  {PROFILE.role}
                </p>

                <p className="mt-4 text-sm font-medium text-zinc-700">
                  {PROFILE.education}
                </p>

                <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-zinc-600">
                  {PROFILE.bio}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contact via Email
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                        <span>Copied Email</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-600">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-950 hover:underline hover:underline-offset-4"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <span aria-hidden="true" className="text-zinc-300">
                    ·
                  </span>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-950 hover:underline hover:underline-offset-4"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <span aria-hidden="true" className="text-zinc-300">
                    ·
                  </span>
                  <a
                    href={PROFILE.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-950 hover:underline hover:underline-offset-4"
                  >
                    <span>Portfolio</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                {heroImageError ? (
                  <div className="flex h-full min-h-[300px] flex-col items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 p-8 text-center">
                    <span className="font-mono text-sm font-medium text-zinc-500">
                      {PROFILE.handle}
                    </span>
                    <p className="mt-2 font-serif text-2xl text-zinc-800">
                      {PROFILE.role}
                    </p>
                  </div>
                ) : (
                  <img
                    src={heroWorkspaceImg}
                    alt="Minimalist developer workspace representing full-stack and AI engineering"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImageError(true)}
                    className="h-full w-full object-cover lg:h-full"
                  />
                )}
              </div>
            </div>
          </div>

          {/* 4-column summary strip */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-y border-zinc-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-mono text-2xl font-semibold tabular-nums text-zinc-950">
                {PROFILE.publicRepoCount}
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Public GitHub repositories
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold tabular-nums text-zinc-950">
                {totalSkillCount}
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Verified skills across 6 domains
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-zinc-950">
                M.Sc. Intelligent Web Apps
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                ISI Kef · Full-Stack &amp; AI focus
              </p>
            </div>
            <div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-1 text-base font-semibold text-[#2563EB] hover:underline hover:underline-offset-4"
              >
                <span className="truncate">{PROFILE.email}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-1 text-sm text-zinc-600">
                Open to Full-Stack &amp; AI roles
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section
          id="projects"
          className="border-t border-zinc-200/80 bg-white py-14 md:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-500">
                  Selected Engineering Work · Flagship &amp; Public Repositories
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  Featured Projects
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="flex flex-wrap items-center gap-1 rounded-xl bg-zinc-100 p-1"
              >
                {PROJECT_FILTERS.map((cat) => {
                  const isActive = selectedProjectCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedProjectCategory(cat)}
                      className={`shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                        isActive
                          ? 'bg-white text-zinc-950 shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flagship Project: Mawjoude */}
            {(selectedProjectCategory === 'All' ||
              selectedProjectCategory === 'AI, RAG & Vision') && (
              <div className="mt-8 rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 md:p-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                  <div className="max-w-3xl">
                    <p className="text-xs font-medium text-[#2563EB]">
                      Flagship Project · {FLAGSHIP_PROJECT.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                      {FLAGSHIP_PROJECT.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-zinc-600">
                      {FLAGSHIP_PROJECT.description}
                    </p>

                    {FLAGSHIP_PROJECT.highlights && (
                      <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                        {FLAGSHIP_PROJECT.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <p className="mt-6 text-xs text-zinc-500">
                      {FLAGSHIP_PROJECT.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
                    {FLAGSHIP_PROJECT.portfolioUrl && (
                      <a
                        href={FLAGSHIP_PROJECT.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-zinc-800"
                      >
                        <span>View on Portfolio</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                    {FLAGSHIP_PROJECT.availabilityNote && (
                      <p className="text-xs text-zinc-500">
                        {FLAGSHIP_PROJECT.availabilityNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Public Repositories Grid */}
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredPublicProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-[#FAFAFA] p-6"
                >
                  <div>
                    <p className="text-xs font-medium text-zinc-500">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-zinc-950">
                      {project.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-zinc-200/80 pt-4">
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {project.technologies.join(' · ')}
                    </p>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline hover:underline-offset-4"
                      >
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm text-zinc-600">
              <span>
                Showing {filteredPublicProjects.length} featured public repositories
              </span>
              <a
                href={PROFILE.githubReposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-zinc-900 hover:text-[#2563EB] hover:underline hover:underline-offset-4"
              >
                <span>Browse all {PROFILE.publicRepoCount} repositories</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section
          id="skills"
          className="border-t border-zinc-200/80 bg-[#FAFAFA] py-14 md:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-500">
                  Verified Repository Stack · 6 Categories
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  Technical Skills
                </h2>
              </div>

              <div className="relative w-full max-w-xs">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={skillQuery}
                  onChange={(e) => setSkillQuery(e.target.value)}
                  placeholder="Filter skills..."
                  aria-label="Filter technical skills by name or domain"
                  className="w-full rounded-lg border border-zinc-200 bg-white py-2 pr-9 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#2563EB] focus:outline-none"
                />
                {skillQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSkillQuery('')}
                    aria-label="Clear skill search"
                    className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-zinc-400 hover:text-zinc-700"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Domain Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter skills by domain"
              className="mt-6 flex flex-wrap items-center gap-1 rounded-xl bg-zinc-200/60 p-1"
            >
              {SKILL_DOMAINS.map((domain) => {
                const isActive = selectedSkillDomain === domain;
                return (
                  <button
                    key={domain}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedSkillDomain(domain)}
                    className={`shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                      isActive
                        ? 'bg-white text-zinc-950 shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {domain}
                  </button>
                );
              })}
            </div>

            {filteredSkillGroups.length === 0 ? (
              <div className="mt-8 rounded-xl border border-zinc-200 bg-white px-6 py-12 text-center">
                <p className="text-base font-medium text-zinc-900">
                  No skills match &ldquo;{skillQuery}&rdquo;
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Clear your search query or switch back to all domains.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSkillDomain('All');
                    setSkillQuery('');
                  }}
                  className="mt-4 inline-flex items-center rounded-lg border border-zinc-200 bg-[#FAFAFA] px-4 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredSkillGroups.map((group) => (
                  <div
                    key={group.domain}
                    className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-950">
                          {group.domain}
                        </h3>
                        <span className="font-mono text-xs tabular-nums text-zinc-400">
                          {group.items.length}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-500">
                        {group.summary}
                      </p>

                      <div className="mt-5 border-t border-zinc-100 pt-4 text-sm leading-relaxed text-zinc-800">
                        {group.items.join(' · ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Professional Interests */}
        <section
          id="interests"
          className="border-t border-zinc-200/80 bg-white py-14 md:py-16"
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-500">
                  Engineering Direction
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  Professional Interests
                </h2>
              </div>
              <p className="max-w-md text-sm text-zinc-600">
                Core areas of focus across software architecture, machine learning,
                and intelligent retrieval systems.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {INTERESTS.map((interest) => (
                <div
                  key={interest.index}
                  className="rounded-xl border border-zinc-200 bg-[#FAFAFA] p-6"
                >
                  <span className="font-mono text-xs font-medium tabular-nums text-zinc-400">
                    {interest.index}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-zinc-900">
                    {interest.title}
                  </h3>
                  <p className="mt-2 font-serif text-lg leading-snug text-zinc-700">
                    {interest.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned README.md Source */}
        <section
          id="readme-source"
          className="border-t border-zinc-200/80 bg-[#FAFAFA] py-14 md:py-16"
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-500">
                  GitHub Profile Artifact · <span className="font-mono">README.md</span>
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-950">
                  Redesigned Profile README Source
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setReadmeExpanded((prev) => !prev)}
                  className="shrink-0 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-800 transition-colors duration-150 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  {readmeExpanded
                    ? 'Collapse Source'
                    : `Show All ${readmeLines.length} Lines`}
                </button>
                <button
                  type="button"
                  onClick={handleCopyReadme}
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  {copiedReadme ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied Markdown</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-500">
                <span className="font-mono font-medium text-zinc-700">
                  README.md
                </span>
                <span className="font-mono tabular-nums">
                  {readmeLines.length} lines
                </span>
              </div>
              <div
                className={`overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-800 ${
                  readmeExpanded ? 'max-h-none' : 'max-h-80 overflow-y-hidden'
                }`}
              >
                <table className="w-full border-collapse">
                  <tbody>
                    {readmeLines.map((line, index) => (
                      <tr key={index} className="align-top">
                        <td className="w-10 select-none pr-4 text-right tabular-nums text-zinc-400">
                          {index + 1}
                        </td>
                        <td className="whitespace-pre">{line || ' '}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-zinc-900">{PROFILE.name}</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.role}</span>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-zinc-700 hover:text-zinc-950 hover:underline hover:underline-offset-4"
            >
              {PROFILE.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-950 hover:underline hover:underline-offset-4"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-950 hover:underline hover:underline-offset-4"
            >
              GitHub
            </a>
          </div>
          <a
            href="#top"
            className="shrink-0 whitespace-nowrap text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:underline hover:underline-offset-4"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
