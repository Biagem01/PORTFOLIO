import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Retina scaling leggero
    const scale = window.devicePixelRatio > 1.5 ? 0.7 : 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles ridotte
    const particleCount = window.devicePixelRatio > 1.5 ? 12 : 20;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
    }));

    let lastTime = 0;
    let frameSkip = 0;

    const animate = (currentTime) => {
      // Throttle a ~30fps
      if (currentTime - lastTime < 33) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "saddlebrown";
        ctx.fill();

        // Draw limited connections (solo ogni 3 frame per risparmiare)
        if (frameSkip % 3 === 0) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = p.x - particles[j].x;
            const dy = p.y - particles[j].y;
            const distance = dx * dx + dy * dy;

            if (distance < 5000) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = "rgba(139,69,19,0.05)";
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          }
        }
      });

      frameSkip++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-25 dark:opacity-15"
    />
  );
}
