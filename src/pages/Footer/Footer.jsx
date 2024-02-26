const StyledLink = ({ href, children }) => (
  <a
    className="text-slate-200 font-medium hover:text-teal-400 focus-visible:text-teal-300"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="max-w-md mt-20 mb-16 text-sm text-slate-500 tracking-wide sm:pb-0">
      Motivated by the portfolio of{" "}
      <StyledLink href="https://brittanychiang.com/">
        Brittany Chiang
      </StyledLink>
      , I fashioned a comparable design using{" "}
      <StyledLink href="https://vitejs.dev/guide/">React with Vite</StyledLink>.
      The outcome is a refined online representation, presently live on Vercel.
    </footer>
  );
}
