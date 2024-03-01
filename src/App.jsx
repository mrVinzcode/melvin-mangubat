import Sidebar from "./pages/Global/Sidebar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Footer from "./pages/Footer/Footer";
import Resume from "./components/Resume";
import { useState } from "react";
import Loading from "./components/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
