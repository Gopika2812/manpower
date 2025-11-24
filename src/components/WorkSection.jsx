import { useState } from "react";
import "../App.css";

export default function WorkSection() {
  const images = Array.from({ length: 30 }, (_, i) => `/works/work${i + 1}.jpg`);

  const [isMoving, setIsMoving] = useState(true);

  const handleClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <section className="work-section">
      <h2 className="work-title">Our Works</h2>

      <div
        className={`scroll-container ${isMoving ? "moving" : "stopped"}`}
        onClick={handleClick}
      >
        <div className="scroll-images">
          {images.map((src, i) => (
            <img key={i} src={src} className="scroll-img" alt="work" />
          ))}
          {/* Duplicate images for smooth infinite loop */}
          {images.map((src, i) => (
            <img key={`dup-${i}`} src={src} className="scroll-img" alt="work" />
          ))}
        </div>
      </div>

      {/* <p className="click-info">
        {isMoving ? "Click to stop" : "Click to resume"}
      </p> */}
    </section>
  );
}
