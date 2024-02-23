export default function Footer() {
  return (
    <footer className="max-w-md mt-20 mb-16 text-sm text-slate-500 tracking-wide sm:pb-0">
      Motivated by the portfolio of{" "}
      <a
        className="text-slate-200 font-medium hover:text-teal-400 focus-visible:text-teal-300 "
        href="https://brittanychiang.com/"
        target="_blank"
      >
        Brittany Chiang
      </a>
      , I fashioned a comparable design using{" "}
      <a
        className="text-slate-200 font-medium hover:text-teal-400 focus-visible:text-teal-300"
        href="https://vitejs.dev/guide/"
      >
        React with Vite{" "}
      </a>
      and personalized CSS. The outcome is a refined online representation,
      presently live on Vercel.
    </footer>
  );
}
