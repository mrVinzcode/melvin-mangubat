export default function Resume() {
  return (
    <div className="mt-2 mb-24">
      <h1 className="items-baseline font-medium leading-tight text-slate-200">
        <a
          className="inline-flex group text-xl"
          href="/img/MELVIN-MANGUBAT.pdf"
          target="_blank"
          download
        >
          <span className="flex items-center border-b border-transparent group-hover:border-teal-300 pb-px">
            View Résumé
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="group-hover:translate-x-2 transition-all ml-2 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </span>
        </a>
      </h1>
    </div>
  );
}
