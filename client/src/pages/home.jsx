import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import CosmicBackground from "../components/ui/cosmicBackground";
import ScrollProgress from "@/components/scroll-progress.jsx";
import CustomCursor from "@/components/custom-cursor.jsx";
import AnimatedBackground from "@/components/animated-background.jsx";
import Achievements from "@/components/achievements.jsx";
import EasterEgg from "@/components/easter-egg.jsx";
import LoadingScreen from "@/components/loading-screen.jsx";


export default function Home() {
  const particles = Array.from({ length: 50 }).map(() => {
    const size = Math.floor(Math.random() * 3) + 2; // 2-4rem
    const colors = ["blue", "purple", "cyan", "pink", "green", "indigo"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = Math.floor(Math.random() * 100) + "%";
    const left = Math.floor(Math.random() * 100) + "%";
    const delay = Math.floor(Math.random() * 10) + "s";

    return { size, color, top, left, delay };

    
  });



  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950" style={{cursor: 'none'}}>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <EasterEgg />
      {/* 🌌 Ultra Enhanced Cosmic Background - Super Spectacular */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Massive cosmic blobs layer 1 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-cosmic opacity-20 liquid-blob blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 gradient-sunset opacity-25 float-beautiful blur-3xl" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 gradient-ocean opacity-30 breathe blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 gradient-ethereal opacity-20 sparkle blur-3xl" style={{ animationDelay: "3s" }}></div>
        
        {/* Additional mega blobs layer 2 */}
        <div className="absolute top-10 right-10 w-80 h-80 gradient-royal opacity-15 breathe blur-2xl" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 gradient-cosmic opacity-18 liquid-blob blur-3xl" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 gradient-sunset opacity-22 float-beautiful blur-3xl" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-88 h-88 gradient-ocean opacity-25 sparkle blur-2xl" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Medium floating blobs layer 3 */}
        <div className="absolute top-16 left-1/3 w-48 h-48 gradient-ethereal opacity-30 breathe blur-xl" style={{ animationDelay: "3.5s" }}></div>
        <div className="absolute bottom-16 right-1/3 w-56 h-56 gradient-royal opacity-28 float-beautiful blur-xl" style={{ animationDelay: "0.8s" }}></div>
        <div className="absolute top-2/3 left-1/6 w-40 h-40 gradient-cosmic opacity-35 liquid-blob blur-xl" style={{ animationDelay: "2.2s" }}></div>
        <div className="absolute bottom-2/3 right-1/6 w-52 h-52 gradient-sunset opacity-32 sparkle blur-xl" style={{ animationDelay: "4.2s" }}></div>
        
        {/* Smaller accent blobs layer 4 */}
        <div className="absolute top-1/5 right-1/5 w-32 h-32 gradient-ocean opacity-40 breathe blur-lg" style={{ animationDelay: "1.8s" }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-36 h-36 gradient-ethereal opacity-38 float-beautiful blur-lg" style={{ animationDelay: "3.8s" }}></div>
        <div className="absolute top-4/5 left-2/5 w-28 h-28 gradient-royal opacity-42 liquid-blob blur-lg" style={{ animationDelay: "0.3s" }}></div>
        <div className="absolute bottom-4/5 right-2/5 w-44 h-44 gradient-cosmic opacity-36 sparkle blur-lg" style={{ animationDelay: "2.8s" }}></div>

        {/* Enhanced sparkle particles constellation */}
        <div className="absolute top-32 left-1/4 w-6 h-6 gradient-cosmic rounded-full sparkle shadow-cosmic"></div>
        <div className="absolute bottom-32 right-1/4 w-8 h-8 gradient-sunset rounded-full float-beautiful shadow-ethereal" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 gradient-ocean rounded-full breathe" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-2/3 left-1/5 w-5 h-5 gradient-royal rounded-full sparkle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-7 h-7 gradient-ethereal rounded-full float-beautiful" style={{ animationDelay: "3s" }}></div>
        
        {/* Additional magical particles */}
        <div className="absolute top-20 right-20 w-3 h-3 gradient-cosmic rounded-full sparkle" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 gradient-sunset rounded-full breathe shadow-cosmic" style={{ animationDelay: "3.5s" }}></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 gradient-ocean rounded-full float-beautiful" style={{ animationDelay: "1.8s" }}></div>
        <div className="absolute bottom-1/2 right-20 w-6 h-6 gradient-ethereal rounded-full sparkle shadow-ethereal" style={{ animationDelay: "2.3s" }}></div>
        <div className="absolute top-40 left-2/3 w-3 h-3 gradient-royal rounded-full breathe" style={{ animationDelay: "4.1s" }}></div>
        <div className="absolute bottom-40 right-2/3 w-5 h-5 gradient-cosmic rounded-full float-beautiful shadow-cosmic" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute top-3/4 left-1/3 w-4 h-4 gradient-sunset rounded-full sparkle" style={{ animationDelay: "2.7s" }}></div>
        <div className="absolute bottom-3/4 right-1/3 w-6 h-6 gradient-ocean rounded-full breathe shadow-ethereal" style={{ animationDelay: "1.2s" }}></div>

        {/* Multi-layer aurora backgrounds */}
        <div className="absolute inset-0 aurora-bg opacity-60"></div>
        <div className="absolute inset-0 aurora-bg opacity-30 animate-pulse-slow" style={{ animationDelay: "5s" }}></div>

        {/* Enhanced cosmic grid with moving pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="w-full h-full animate-pulse-slow" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.4) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}></div>
        </div>
        
        {/* Floating constellation dots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-blue-300 rounded-full sparkle"></div>
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-purple-300 rounded-full float-beautiful" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-cyan-300 rounded-full breathe" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/6 right-1/6 w-1 h-1 bg-pink-300 rounded-full sparkle" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/12 w-1 h-1 bg-indigo-300 rounded-full float-beautiful" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/2 right-1/12 w-1 h-1 bg-violet-300 rounded-full breathe" style={{ animationDelay: "5s" }}></div>
        </div>
      </div>

      {/* 🌟 Content (Navbar, sections, Footer) */}
      <div className="relative z-10 text-slate-800 dark:text-slate-100">
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
