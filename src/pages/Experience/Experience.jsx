import TechTag from "../../components/TechTag";

export default function Experince() {
  const experiences = [
    {
      date: "2010 - 2024",
      company: "Transport Planner • Zuellig Pharma",
      description:
        " Executing orders in the SAP system, we assess total volume andweight. Determining the required trucks based on packagedimensions, we coordinate with third-party services forpickup. We stay in communication and provide support until successful delivery to the customer.",
      skills: [
        "SAP EWM",
        "Sharepoint",
        "SpreadSheet",
        "Zyllem",
        "Viber",
        "Microsoft Teams",
      ],
    },
    {
      date: "2022 - 2023",
      company: " Amazon Wholesale VA • Zephry Tech Co LLC",
      description:
        "For wholesale product research, our emphasis is on identifyingexisting suppliers offering products at the most competitiveprices compared to Amazon sellers. We intend to sell these products on Amazon, targeting a profit of $3 and a 5% Return on Investment (ROI), aligning with our wholesale purchasingstrategy. To enhance efficiency, we use Trello for task management, ensuring a minimum of 10 leads are generated per  week.",
      skills: [
        "Seller Amp",
        "Google Sheet",
        "Keepa",
        "Spreadsheet",
        "Amazon",
        "Gmail",
      ],
    },
    {
      date: "2021 - 2022",
      company: "Amazon VA • Pipkin LLC",
      description:
        "To quickly find leads, I use manual sourcing, reversesourcing, and storefront stalking. Seller Amp SAS helps byautomatically listing items in Google Sheets. My criteria: atleast $3 profit and 30% ROI per item with a minimum of 100monthly sales, or 20% ROI with 500 monthly sales. It&apos;s about striking the right balance for profitable and popular leads.",
      skills: [
        "Seller Amp",
        "Keepa",
        "Spreadsheet",
        "Amazon",
        "Helium 10",
        "Gmail",
      ],
    },
  ];
  return (
    <section
      id="Experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      <div>
        <ol>
          {experiences.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,.0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {item.date}
                </header>
                <div className="z-10 sm:col-span-6 ">
                  <h3 className="font-medium leading-snug text-slate-200 ">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href=""
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="inline-block">{item.company}</span>
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
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
