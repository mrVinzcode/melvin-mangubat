import Sidebar from "./pages/Global/Sidebar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Footer from "./pages/Footer/Footer";
import Resume from "./pages/Resume/Resume";

export default function App() {
  return (
    <div className="background mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
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
  );
}
