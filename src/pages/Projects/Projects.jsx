import { FiArrowUpRight } from "react-icons/fi";
import TechTag from "./../../components/TechTag";

export default function ProjectList() {
  const projectData = [
    {
      projectName: "Korean Food",
      description:
        "Our Korean Food App, developed with Next.js, TypeScript, anstyled with Tailwind CSS, aims to be the ultimate destinationfor authentic Korean cuisine in the Philippines. We connect users to diverse flavors, ensuring a seamless ordering experience and fostering a vibrant community. Become a part of the go-to platform for a delightful Korean food experience.",
      skills: ["Next", "Tailwind", "Typescript", "Vercel", "Google Api"],
      img: "/img/tasteofseoul.png",
      alt: "Taste of Seoul",
    },
    {
      projectName: "Doctor Booking",
      description:
        "Our Doctor Booking App named BookWell aims to simplify healthcare access. We connect users with medical professionals for easy scheduling and personalized health management,fostering a healthier community through accessible healthcare services.",
      skills: [
        "React",
        "Tailwind",
        "MongoDB",
        "Vercel",
        "Cloudinary",
        "NodeJS",
      ],
      img: "/img/bookwell.png",
      alt: "",
    },
    {
      projectName: "Digital Agency",
      description:
        "This website serves as a platform for practicing React with Tailwind, focusing solely on frontend development. It represents a digital agency&apos;s software designed to assist individuals in efficiently managing their tasks, providing a hassle-free experience.",
      skills: ["React", "Tailwind", "Vercel", "Freepik"],
      img: "/img/digital-agency.png",
      alt: "Digital Agency",
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projectData.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                    <a
                      href="https://a-taste-of-seoul-henna.vercel.app/"
                      target="_blank"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {item.projectName}
                        <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal tracking-wide">
                    {item.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {item.skills.map((skill, skillIndex) => (
                      <TechTag key={skillIndex} tech={skill} />
                    ))}
                  </ul>
                </div>
                <img
                  loading="lazy"
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={item.img}
                  alt={item.alt}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
