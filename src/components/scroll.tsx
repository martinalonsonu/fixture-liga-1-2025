import { useState, useRef, useEffect } from "react";
import { domainAssets } from "../utils/constants";

const teamAliases = [
  "aas", "adt", "al", "alu", "ayacucho", "bin", "boys", "chankas",
  "cienciano", "comu", "cus", "garci", "grau", "jp2", "melgar", "sc",
  "shu", "u", "utc"
];

const images = teamAliases.map(alias => `${domainAssets}teams/${alias}.png`);
const TOTAL_IMAGES = images.length;

const InfiniteScroll = () => {
  const [index, setIndex] = useState(3);
  const [imageWidth, setImageWidth] = useState(419);
  const [imagesPerView, setImagesPerView] = useState(3);
  const trackRef = useRef(null);
  const transitionRef = useRef(true);
  const startX = useRef(0);
  const scrollThreshold = 50;

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setImagesPerView(1);
        setImageWidth(window.innerWidth * 0.9);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setImagesPerView(3);
        setImageWidth(window.innerWidth / 3.2);
      } else {
        setImagesPerView(3);
        setImageWidth(419);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const imagesLoop = [
    ...images.slice(-imagesPerView),
    ...images,
    ...images.slice(0, imagesPerView)
  ];

  useEffect(() => {
    if (index <= 0) {
      setTimeout(() => {
        transitionRef.current = false;
        setIndex(TOTAL_IMAGES);
      }, 50);
    } else if (index >= TOTAL_IMAGES + imagesPerView) {
      setTimeout(() => {
        transitionRef.current = false;
        setIndex(imagesPerView);
      }, 50);
    } else {
      transitionRef.current = true;
    }
  }, [index, imagesPerView]);

  const prevImage = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const nextImage = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - startX.current;
    if (deltaX > scrollThreshold) {
      prevImage();
    } else if (deltaX < -scrollThreshold) {
      nextImage();
    }
  };

  return (
    <div className="carousel">
      <button className="nav left" onClick={prevImage}>&lt;</button>
      <div 
        className="image-container" 
        style={{ overflow: "hidden", width: `${imageWidth * imagesPerView}px` }}
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="image-track"
          ref={trackRef}
          style={{
            display: "flex",
            transform: `translateX(-${index * imageWidth}px)`,
            transition: transitionRef.current ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {imagesLoop.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`Team ${teamAliases[i % teamAliases.length]}`} 
              className={i === index + Math.floor(imagesPerView / 2) ? "active" : ""}
              style={{ width: `${imageWidth}px`, flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <button className="nav right" onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default InfiniteScroll;
