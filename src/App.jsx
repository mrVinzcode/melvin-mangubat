import { useRef, useState, useEffect } from "react";
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

    return () => {
      window.addEventListener("mousemove", mouseHover);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <div
            className="fixed top-0 left-0 h-full w-full pointer-events-auto z-50 transition duration-200 ease-in-out"
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
