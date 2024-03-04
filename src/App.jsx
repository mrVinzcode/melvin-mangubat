import { useEffect, useRef, useState } from "react";

import Sidebar from "./pages/Global/Sidebar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Footer from "./pages/Footer/Footer";
import Resume from "./components/Resume";
import Loading from "./components/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseHover = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", mouseHover);

    return () => {
      window.removeEventListener("mousemove", mouseHover);
    };
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <div
            className="inset-0 fixed h-full w-full pointer-events-none z-30 transition duration-300 ease-in-out"
            ref={cursorRef}
          ></div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 lg:px-6 lg:py-0 lg:flex lg:justify-between lg:gap-4">
            <Sidebar />

            <main className="basis-1/2">
              <About />
              <Projects />
              <Experience />
              <Resume />
              <Footer />
            </main>
          </div>
        </div>
      )}
    </>
  );
}
