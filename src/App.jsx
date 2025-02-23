import { useEffect, useRef } from "react";
import gp1 from "./assets/ART1.jpg"; // Importing the image
import gp2 from "./assets/gp2.png"; // Importing the image
import "./App.css";

const StarryNight = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: 0,
      speed: Math.random() * 0.02 + 0.01,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    const fallingStars = [];

    const drawBackground = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.1,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.5
      );
      gradient.addColorStop(0, "darkviolet");
      gradient.addColorStop(0.5, "darkblue");
      gradient.addColorStop(1, "black");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = () => {
      drawBackground();

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      fallingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;

        if (star.x > canvas.width || star.y > canvas.height) {
          fallingStars.splice(index, 1);
        }
      });
    };

    const animate = () => {
      stars.forEach((star) => {
        star.opacity += star.speed * star.direction;
        if (star.opacity >= 1) {
          star.opacity = 1;
          star.direction = -1;
        } else if (star.opacity <= 0) {
          star.opacity = 0;
          star.direction = 1;
        }
      });

      if (Math.random() < 0.01) {
        fallingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 20 + 10,
          speed: Math.random() * 5 + 2,
        });
      }

      drawStars();
      requestAnimationFrame(animate);
    };

    drawStars();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="starry-night-container">
      <nav className="navi">
        <a href="#about" className="nav-link">About Me</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>

      <canvas ref={canvasRef} className="starry-night-canvas" />

      <div className="content">
        <h1 className="title">Graphic Designer</h1>

        <div className="image-gallery">
          <div className="polaroid rotate-6">
            <img src={gp2} alt="Design Work" className="image-item" />
          </div>
          <div className="polaroid rotate-3">
            <img src={gp1} alt="Design Work 2" className="image-item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarryNight;