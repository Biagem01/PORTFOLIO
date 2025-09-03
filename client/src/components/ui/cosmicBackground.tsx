export default function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large floating cosmic blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-cosmic opacity-20 blur-3xl"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 gradient-sunset opacity-25 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 gradient-ocean opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 gradient-ethereal opacity-20 blur-3xl"></div>

      {/* Sparkle particles */}
      <div className="absolute top-32 left-1/4 w-6 h-6 gradient-cosmic animate-small rounded-full sparkle shadow-cosmic"></div>
      <div className="absolute bottom-32 right-1/4 w-8 h-8 gradient-sunset rounded-full float-beautiful shadow-ethereal" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 gradient-ocean rounded-full breathe" style={{ animationDelay: "4s" }}></div>
      <div className="absolute top-2/3 left-1/5 w-5 h-5 gradient-royal rounded-full sparkle" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/3 right-1/5 w-7 h-7 gradient-ethereal rounded-full float-beautiful" style={{ animationDelay: "3s" }}></div>

      {/* Aurora background */}
      {/* RIMOSSO aurora-bg su inset-0 - troppo pesante per performance */}

      {/* Subtle cosmic grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.3) 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
      </div>
    </div>
  );
}
