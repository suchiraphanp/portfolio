export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky navbar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Suchi Prommuangkun</a>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Suchi Prommuangkun
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-medium text-blue-700">
              QA Automation · AI Engineer
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              MSc AI graduate. I build reliable, testable software with CI/CD, automation, and data/ML.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border hover:bg-gray-50 transition"
              >
                Contact
              </a>
            </div>
          </div>


          {/* Right: profile image */}
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 font-semibold">
               <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}  
                  alt="Suchi Prommuangkun"
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border border-blue-200 shadow"
                  loading="eager"
                  decoding="async"
                />
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          4+ years in QA automation and DevOps-aware delivery. Comfortable with Python/Java/JS,
          Cypress/Selenium/REST Assured, Jenkins/Docker, and LLM-assisted quality workflows.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <li className="p-2 rounded-lg bg-gray-50">Selenium · Cypress · REST Assured</li>
          <li className="p-2 rounded-lg bg-gray-50">Python · Java · JavaScript</li>
          <li className="p-2 rounded-lg bg-gray-50">CI/CD · Jenkins · Docker</li>
          <li className="p-2 rounded-lg bg-gray-50">LLMs · ML · Data Pipelines</li>
          <li className="p-2 rounded-lg bg-gray-50">MongoDB · SQL · Neo4j</li>
          <li className="p-2 rounded-lg bg-gray-50">Jira · Confluence · Git</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <article className="p-5 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-medium">AI + Property Graph Pipeline</h3>
            <p className="mt-2 text-sm text-gray-700">
              Automates medicine knowledge graph creation with LLM extraction and validation.
            </p>
            <p className="mt-2 text-xs text-gray-500">Python · Neo4j · LLMs · OBDA-inspired mapping</p>
            <a className="mt-3 inline-block underline text-blue-600 hover:text-blue-700" href="#" target="_blank" rel="noreferrer">
              View Repo
            </a>
          </article>

          <article className="p-5 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-medium">QA Automation Suite</h3>
            <p className="mt-2 text-sm text-gray-700">
              150+ integration tests; reduced cycle 30%; integrated in CI/CD.
            </p>
            <p className="mt-2 text-xs text-gray-500">Cypress · Selenium · Jenkins</p>
            <a className="mt-3 inline-block underline text-blue-600 hover:text-blue-700" href="#" target="_blank" rel="noreferrer">
              View Repo
            </a>
          </article>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="mt-4 space-y-4 text-gray-700">
          <li className="p-4 border rounded-lg">
            <strong>Senior Software QA Engineer — Anglepoint</strong> (2022–2024)
            <div>Cut manual testing from 1 day to 17 minutes via automation + CI.</div>
          </li>
          <li className="p-4 border rounded-lg">
            <strong>QA Developer — FisherITS</strong> (2020–2022)
            <div>150+ integration tests; delivered on AWS/Jenkins/Docker.</div>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-gray-700">
          <a className="underline" href="mailto:suchiraphan@outlook.com">suchiraphan@outlook.com</a>
          <span> · </span>
          <a className="underline" href="https://www.linkedin.com/in/suchiraphan" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Suchi Prommuangkun · Hosted on GitHub Pages
      </footer>
    </main>
  );
}
