import { useEffect, useRef, useState } from "react";
import profile from './assets/profile.jpg';
import gp1 from './assets/gp1.png';
import gp2 from './assets/gp2.png';
import gp3 from './assets/gp3.png';
import gp4 from './assets/gp4.png';
import gp5 from './assets/ART1.jpg';
import gp6 from './assets/ART3.jpg';
import gp7 from './assets/Icon (1).png';
import gp8 from './assets/Icon (2).png';
import gp9 from './assets/Icon (3).png';

import './App.css';

const StarryNight = () => {
  const canvasRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

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
        <button onClick={() => setActiveSection("home")} className="nav-link">Home</button>
        <button onClick={() => setActiveSection("about")} className="nav-link">About Me</button>
        <button onClick={() => setActiveSection("projects")} className="nav-link">Projects</button>
        <button onClick={() => setActiveSection("contact")} className="nav-link">Contact Me</button>
      </nav>

      <canvas ref={canvasRef} className="starry-night-canvas" />

      {activeSection === "home" && (
        <div className="home-section">
          <h1 className="title">Graphic Designer</h1>
          <div className="image-gallery">
            <div className="polaroid rotate-6">
              <img src={gp6} alt="Design Work" className="image-item" />
            </div>
            <div className="polaroid rotate-3">
              <img src={gp5} alt="Design Work 2" className="image-item" />
            </div>
          </div>
        </div>
      )}

      {activeSection === "about" && (
       <div className="about-container">
       <div className="about-content">
         {/* About Content */}
         <div className="about-text1">
           <h2>About Me</h2>
           <p>
             Hello! I'm <span className="highlight">Glezel E. Magsalay</span>, a passionate graphic designer with a love for creativity and visual storytelling.
             I specialize in creating eye-catching designs that bring ideas to life. Whether it's branding, digital art, or print media,
             I strive to deliver high-quality work that resonates with the audience.
           </p>
         
           <h2>Skills & Expertise</h2>
           <p>
           typography,
layout design,
branding,
logo design,
digital art,

           </p>
           <img src={gp7} className="icon" alt="icon1" />
            <img src={gp8} className="icon" alt="icon2" />
         </div>  <img src={profile} alt="Profile" className="profile-pic" />
         <div className="about-text3">
           <h2>Career Goals</h2>
           <p>
           To become a highly skilled and versatile graphic designer, 
           mastering both traditional and digital mediums to create innovative and
            engaging visual experiences.
           </p>
         </div>

         <div className="about-text5">
           <h2>Hobbies</h2>
           <p>
           	Watching anime,
Listening to music,
Playing games,
Reading manhwua,
Watching movies.

           </p>
         </div>

         {/* Profile Image */}
        
       </div>
     </div>
      )}

      {activeSection === "projects" && (
        <div className="design-section">
          <h2>Graphic Designs</h2>
          <div className="design-gallery">
            <img src={gp1} className="design-item" alt="Graphic Design 1" />
            <img src={gp2} className="design-item" alt="Graphic Design 2" />
            <img src={gp3} className="design-item" alt="Graphic Design 3" />
            <img src={gp4} className="design-item" alt="Graphic Design 4" />
            
          
          </div>
        </div>
      )}

      {activeSection === "contact" && (
        <div className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via Facebook at{" "}
          <a href="https://web.facebook.com/hanzaki.imizuki" target="_blank" rel="noopener noreferrer">
            Glezel E. Magsalay
          </a>.
        </p>
      </div>
      
      )}
    </div>
  );
};

export default StarryNight;
