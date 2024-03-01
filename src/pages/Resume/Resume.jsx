import { FaArrowRightLong } from "react-icons/fa6";

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
            <FaArrowRightLong className="group-hover:translate-x-2 transition-all ml-2" />
          </span>
        </a>
      </h1>
    </div>
  );
}
