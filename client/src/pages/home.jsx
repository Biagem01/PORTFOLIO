import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx"
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import ScrollProgress from "@/components/scroll-progress.jsx";
import LoadingScreen from "@/components/loading-screen.jsx";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900">
      <LoadingScreen />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
