export default function About() {
  return (
    <div
      className="mt-24 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate tracking-wide leading-7">
          Hi there! I am{" "}
          <a
            className="text-slate-200 hover:text-teal-300 font-bold tracking-wide"
            href="/"
          >
            Melvin Mangubat
          </a>
          , a cheerful freelance web developer from the Philippines.
        </p>
        <p className="mb-4 text-slate tracking-wide leading-7">
          My journey didn&apos;t always involve web development. I spent 12
          happy years improving my personality and skills in the corporate world
          and as a virtual assistant. However, it was the field of web
          development that truly made me happy. Fueled by excitement, I enrolled
          in an online bootcamp, learning all the necessary{" "}
          <span className="text-slate-200 hover:text-teal-300">
            knowledge and skills with pure joy.
          </span>{" "}
          I graduated with a BSIT degree, but I didn&apos;t pursue that path and
          took a different direction. I believe there is an opportunity for
          everyone to find what truly brings happiness, right?
        </p>
        <p className="mb-4 text-slate tracking-wide leading-7">
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
