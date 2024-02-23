export default function About() {
  return (
    <div
      className="mt-20 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate- leading-relaxed">
          Hello there! I am{" "}
          <a className="text-slate-200 font-bold leading-relaxed" href="/">
            Melvin Mangubat
          </a>
          , a dedicated freelance web developer hailing from the Philippines.
        </p>
        <p className="mb-4 text-slate- leading-relaxed">
          My journey wasn&apos;t always focused on web development though. I
          spent two fruitful years honing my skills as a Virtual Assistant. Yet,
          it was the world of web development that truly captured my heart.
          Determined to follow my passion, I embarked on an online bootcamp
          journey, equipping myself with the essential knowledge and skills.
        </p>
        <p>
          As an ardent web developer, I&apos;m always in pursuit of growth,
          eagerly embracing new technologies to deliver top-notch solutions. The
          ever-evolving landscape of this field excites me, and I look forward
          to the endless possibilities that lie ahead.
        </p>
      </div>
    </div>
  );
}
