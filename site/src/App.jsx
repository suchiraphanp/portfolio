const achievements = [
  { label: "Impact", value: "Reduced regression time from 1 day to 17 minutes" },
  { label: "Scale", value: "Supported quality for 2,000+ users" },
  { label: "Automation", value: "Built 150+ integration/E2E tests integrated into CI/CD" },
];

const skills = [
  "Cypress · Selenium · REST Assured",
  "API Testing · Postman · Contract Testing",
  "JavaScript/TypeScript · Python · Java",
  "CI/CD · Jenkins · GitHub Actions",
  "Docker · AWS (EC2) · Linux (basics)",
  "Jira · Confluence · Git",
  "LLMs · Prompting (applied) · NLP (basics)",
  "MongoDB · SQL · Neo4j",
];

const projects = [
  // {
  //   title: "Cypress E2E + API Testing Showcase",
  //   desc:
  //     "E2E flows + negative cases with API validation to catch breaking changes early and reduce regressions.",
  //   stack: "Cypress · JavaScript/TypeScript · Postman · CI",
  //   impact: [
  //     "Covers login + critical workflows with negative/edge cases",
  //     "Uses stable selectors and mitigations to reduce flaky tests",
  //     "Readable README + quick start for reviewers",
  //   ],
  //   repo: "https://github.com/suchiraphanp/REPLACE_ME",
  //   demo: "", // optional
  // },
  // {
  //   title: "CI Test Pipeline + Reporting",
  //   desc:
  //     "Automated test runs on every PR with reports to speed feedback and improve release confidence.",
  //   stack: "GitHub Actions/Jenkins · Docker · Allure/HTML reports",
  //   impact: [
  //     "Fail-fast gating on PRs (prevents broken releases)",
  //     "Artifacts/reports for quick triage by devs and QA",
  //   ],
  //   repo: "https://github.com/suchiraphanp/REPLACE_ME",
  //   demo: "", // optional
  // },
  // {
  //   title: "AI Test Case Generator (Practical)",
  //   desc:
  //     "Small tool that converts user stories into structured test cases + edge cases to accelerate test design.",
  //   stack: "Python/JS · LLM API · Prompting · JSON output",
  //   impact: [
  //     "Speeds up test ideation and reduces missed edge cases",
  //     "Produces consistent templates (Given/When/Then + expected results)",
  //   ],
  //   repo: "https://github.com/suchiraphanp/REPLACE_ME",
  //   demo: "", // optional
  // },
  {
    title: "AI + Property Graph Pipeline",
    desc:
      "Automates knowledge graph creation with LLM-based extraction + validation, stored in Neo4j.",
    stack: "Python · Neo4j · LLMs · Data validation",
    impact: [
      "Transforms unstructured text into a queryable graph structure",
      "Adds validation checks to improve output reliability",
    ],
    repo: "https://github.com/suchiraphanp/mi-graph",
    demo: "", // optional
  },
];

const experience = [
  {
    company: "Anglepoint",
    title: "Senior Software QA Engineer",
    dates: "2022 - 2024",
    bullets: [
      "Led automation framework initiatives; cut manual regression from 1 day to ~17 minutes.",
      "Integrated Cypress/Jasmine tests into CI/CD for earlier defect detection and faster releases.",
      "Collaborated with cross-functional teams to improve QA practices and reduce production issues.",
    ],
  },
  {
    company: "FisherITS",
    title: "Software QA Developer",
    dates: "2020 - 2022",
    bullets: [
      "Built 150+ integration tests; reduced delivery time by ~20% through automation and CI integration.",
      "API testing with REST Assured/Swagger; combined manual + automation for strong coverage.",
      "Supported deployments on AWS with Docker and Jenkins; improved release reliability.",
    ],
  },
];

export default function App() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky navbar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            Suchi Prommuangkun
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-600">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="md:hidden text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50 transition"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Suchi Prommuangkun
            </h1>

            <p className="mt-3 text-xl md:text-2xl font-medium text-blue-700">
              QA Automation Engineer (SDET) · Cypress · API Testing · CI/CD
            </p>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              I improve software reliability by finding tricky bugs, building pragmatic automation,
              and integrating tests into CI/CD.
            </p>

            {/* Achievements */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.label} className="p-4 rounded-xl bg-gray-50 border">
                  <div className="text-xs text-gray-500">{a.label}</div>
                  <div className="mt-1 font-semibold">{a.value}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow"
              >
                See Projects
              </a>

              {/* CV PDF inside /public */}
              <a
                href={`${import.meta.env.BASE_URL}Suchi_Prommuangkun_CV.pdf`}
                className="px-6 py-2.5 rounded-full border hover:bg-gray-50 transition"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

              <a
                href="https://github.com/suchiraphanp"
                className="px-6 py-2.5 rounded-full border hover:bg-gray-50 transition"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/suchiraphan"
                className="px-6 py-2.5 rounded-full border hover:bg-gray-50 transition"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              London · Open to relocation across the UK · Open to hybrid/remote
            </p>
          </div>

          {/* Right: profile image */}
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-blue-200 shadow">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Suchi Prommuangkun"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          QA & Automation Engineer with 4+ years’ experience in Agile teams. I enjoy debugging
          complex issues, improving QA processes, and building reliable automation integrated into
          CI/CD. Recently completed an MSc in Artificial Intelligence (Distinction), and I use LLMs
          in practical ways (test design acceleration, documentation, triage support).
        </p>

        {/* How I work */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-5 border rounded-xl">
            <h3 className="font-medium">How I work</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
              <li>Risk-based testing: focus on high-impact areas first.</li>
              <li>Debug-first mindset: isolate, reproduce, minimize, confirm root cause.</li>
              <li>Test pyramid awareness: balance UI, API, integration, and unit tests.</li>
              <li>Flaky test mitigation: selectors, waits, retries only when justified.</li>
              <li>CI/CD gating + reporting: fast feedback loops for dev teams.</li>
            </ul>
          </div>

          <div className="p-5 border rounded-xl">
            <h3 className="font-medium">What I’m targeting</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
              <li>QA Automation Engineer / SDET (web + API) in the UK.</li>
              <li>Teams that value quality engineering and reliable releases.</li>
              <li>Optional “AI as a tool” workflows to boost efficiency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          {skills.map((s) => (
            <li key={s} className="p-3 rounded-lg bg-gray-50 border">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          These are small case studies showing how I approach quality, automation, and
          practical AI tooling.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="p-5 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
              <p className="mt-2 text-xs text-gray-500">{p.stack}</p>

              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {p.impact.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-4 text-sm">
                <a
                  className="underline text-blue-600 hover:text-blue-700"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
                {p.demo ? (
                  <a
                    className="underline text-blue-600 hover:text-blue-700"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {experience.map((e) => (
            <div key={e.company} className="p-5 border rounded-xl">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div className="text-lg font-semibold">
                  {e.title} — <span className="text-gray-900">{e.company}</span>
                </div>
                <div className="text-sm text-gray-500">{e.dates}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-gray-700">
          <a className="underline" href="mailto:suchiraphan@outlook.com">
            suchiraphan@outlook.com
          </a>
          <span> · </span>
          <a
            className="underline"
            href="https://www.linkedin.com/in/suchiraphan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span> · </span>
          <a
            className="underline"
            href="https://github.com/suchiraphanp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="mt-6 p-5 border rounded-xl bg-gray-50">
          <h3 className="font-medium">Quick note</h3>
          <p className="mt-2 text-gray-700">
            If you’re hiring for QA Automation / SDET roles, I’d love to chat. I’m especially
            interested in teams that value clean releases, reliable CI pipelines, and pragmatic
            automation.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500 border-t">
        © {year} Suchi Prommuangkun · Hosted on GitHub Pages
      </footer>
    </main>
  );
}
