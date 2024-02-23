export default function About() {
  return (
    <div
      className="mt-20 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate- leading-relaxed">
          Hi there! I am{" "}
          <a className="text-slate-200 font-bold leading-relaxed" href="/">
            Melvin Mangubat
          </a>
          , a cheerful freelance web developer from the Philippines.
        </p>
        <p className="mb-4 text-slate- leading-relaxed">
          My journey didn&apos;t always revolve around web development. I spent
          two joyful years refining my skills as a Virtual Assistant. However,
          it was the world of web development that truly sparked my happiness.
          Fueled by excitement, I jumped into an online bootcamp, soaking in all
          the essential knowledge and skills with pure joy.
        </p>
        <p>
          Now, as a thrilled web developer, I&apos;m all about the happy vibes.
          I love embracing new technologies with excitement, creating solutions
          that not only work seamlessly but also bring a smile to your face. The
          ever-evolving nature of this field keeps me in high spirits, and
          I&apos;m eagerly anticipating the joyous possibilities ahead. Let the
          happiness and excitement continue!
        </p>
      </div>
    </div>
  );
}
