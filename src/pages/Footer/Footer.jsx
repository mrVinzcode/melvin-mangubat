const Link = ({ href, children }) => (
  <a
    className="text-white font-extrabold leading-5 tracking-widest hover:text-teal-400 focus-visible:text-teal-300"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="max-w-md mt-20 mb-16 text-sm text-opacity tracking-wide sm:pb-0">
      Motivated by the portfolio of{" "}
      <Link href="https://brittanychiang.com/">Brittany Chiang</Link>, I
      fashioned a comparable design using{" "}
      <Link href="https://vitejs.dev/guide/">React</Link> with{" "}
      <Link href="https://tailwindcss.com/">Tailwind</Link>. The outcome is a
      refined online representation, presently live on Vercel.
    </footer>
  );
}
