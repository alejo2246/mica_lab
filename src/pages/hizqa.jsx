import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";

const hizqa = () => {
  const audioRef = React.useRef(null);
  const hasMounted = React.useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      const imageContainer = document.getElementById("image-container");

      for (let i = 1; i <= 16; i++) {
        const image = document.createElement("img");
        image.className = "imageInte";
        image.classList.add("grayFilter");
        image.classList.add(`image${i}`);
        image.src = `./interaccion_BN/imagen${i}.png`;
        imageContainer.appendChild(image);

        image.addEventListener("mouseenter", () => {
          image.classList.remove("grayFilter");
        });

        image.addEventListener("mouseleave", () => {
          image.classList.add("grayFilter");
          audioRef.current.pause();
        });

        image.addEventListener("click", () => {
          image.classList.remove("grayFilter");
          audioRef.current.pause();
          audioRef.current.src = `./interaccion_BN/audio${i}.mp3`;
          audioRef.current.volume = 0.1;
          audioRef.current.play();
        });
      }
      hasMounted.current = true;
    }
  }, null);
  return (
    <div>
      <Navbar />
      <div className="chicubun-container">
        <h1 className="chicubun-title">HIZQA SAASBISA</h1>
        <h2 className="chicubun-subtitle">
          Para mejorar esta experiencia, usa tus audífonos y da click en las
          diferentes imágenes
        </h2>
      </div>
      <div className="imageContainer" id="image-container">
        <img
          src="./interaccion_BN/MAPEO COLECTIVO.PNG"
          alt="Your Image"
          className="imageInte grayFilter imageMapeo"
        />
        <img
          src="./interaccion_BN/ACTIVIDAD COLLAGE LINEAS.PNG"
          alt="Your Image"
          className=""
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <audio ref={audioRef} src="" />
    </div>
  );
};

export default hizqa;