import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";

function App() {
  const backgroundImageUrl = "/images/background.jpg";

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/15 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profile.png"
              alt="Photo de Profil"
              className="h-28 w-28 rounded-full border-2 border-white/60 object-cover shadow-lg"
            />

            <h1 className="mt-5 text-3xl font-semibold tracking-tight">Noam Roger</h1>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-200/90">
              Développeur Backend
            </p>

            <div className="mt-8 grid w-full gap-3">
              <a
                href="https://noamroger.fr"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/35 bg-white/20 px-4 py-3 text-sm font-medium transition hover:bg-white/30"
              >
                Mon portfolio
              </a>
              <a
                href="mailto:contact@noamroger.fr"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/35 bg-white/20 px-4 py-3 text-sm font-medium transition hover:bg-white/30"
              >
                Me contacter
              </a>
              <a
                href="https://status.noam.ovh"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/35 bg-white/20 px-4 py-3 text-sm font-medium transition hover:bg-white/30"
              >
                Status de mes services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/noam120606"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/35 bg-white/15 p-2.5 transition hover:bg-white/30"
                aria-label="GitHub"
              >
                <BiLogoGithub size={22} />
              </a>
              <a
                href="https://x.com/noam120606"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/35 bg-white/15 p-2.5 transition hover:bg-white/30"
                aria-label="X"
              >
                <BiLogoTwitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/noam120606"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/35 bg-white/15 p-2.5 transition hover:bg-white/30"
                aria-label="Instagram"
              >
                <BiLogoInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/noamroger"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/35 bg-white/15 p-2.5 transition hover:bg-white/30"
                aria-label="LinkedIn"
              >
                <BiLogoLinkedinSquare size={22} />
              </a>
            </div>

            <p className="mt-8 text-xs text-slate-200/90">© {new Date().getFullYear()} - Tous droits réservés.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
