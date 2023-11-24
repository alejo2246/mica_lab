import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
const Hizqa = () => {
  const audioRef = React.useRef(null);
  const hasMounted = React.useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      const imageContainer = document.getElementById("image-container");

      for (let i = 1; i <= 22; i++) {
        if (i === 14) continue;
        const image = document.createElement("img");
        image.className = "imageInte";
        image.classList.add("grayFilter");
        image.classList.add(`imageH${i}`);
        image.src = `./INTERACCION HIZQA/${i}.png`;
        imageContainer.appendChild(image);

        image.addEventListener("mouseenter", () => {
          image.classList.remove("grayFilter");
        });

        image.addEventListener("mouseleave", () => {
          image.classList.add("grayFilter");
          audioRef.current.pause();
        });

        image.addEventListener("click", async () => {
          image.classList.remove("grayFilter");
          audioRef.current.pause();
          const audioSrc = `./INTERACCION HIZQA/audio${i}.mp3`;

          // Attempt to fetch the audio file
          const response = await fetch(audioSrc);

          if (!response.ok) {
            return; // Stop execution if the file is not found
          }

          // Set the src
          audioRef.current.src = audioSrc;
          audioRef.current.volume = 0.1;

          // Play the audio
          audioRef.current.play();
        });
      }
      hasMounted.current = true;
    }
  }, null);
  return (
    <Layout>
      <div className="menu1bolt">
        <Navbar />
        <div className="menuprueba">
          <div className="chicubun-container">
            <h1 className="chicubun-title">HIZQA SAASBISA</h1>
            <h2 className="subtie">[Medicina ancestral]</h2>
            <h2 className="chicubun-subtitle">
              Para mejorar esta experiencia, usa tus audífonos y da click en las
              diferentes imágenes
            </h2>
          </div>
          <div className="imageContainerHizqa" id="image-container">
            <img
              src="./INTERACCION HIZQA/lineas.jpeg"
              alt="Your Image"
              className=""
              style={{
                mixBlendMode: "multiply",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <audio ref={audioRef} src="" />
        </div>
      </div>
    </Layout>
  );
};

export default Hizqa;
