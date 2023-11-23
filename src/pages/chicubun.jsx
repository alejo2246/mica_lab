import Modal from "@/components/Modal2";
import Navbar from "@/components/Navbar/Navbar";
import MapeoColectivo from "@/components/chicubun/MapeoColectivo";
import Image from "next/image";
import Layout from "@/components/Layout";
import React, { useRef, useEffect, useState } from "react";

const Chicubun = () => {
  const audioRef = useRef(null);
  const hasMounted = useRef(false);
  const [openMap, setOpenMap] = useState(false);

  const handleClose = () => {
    setOpenMap(false);
  };
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
      const image = document.createElement("img");
      image.className = "imageInte";
      image.classList.add("grayFilter");
      image.classList.add("imageMapeo");
      image.src = "./interaccion_BN/MAPEO COLECTIVO.png";
      imageContainer.appendChild(image);

      const btnMapa = document.querySelector(".imageMapeo");
      btnMapa.addEventListener("mouseenter", () => {
        btnMapa.classList.remove("grayFilter");
      });

      btnMapa.addEventListener("mouseleave", () => {
        btnMapa.classList.add("grayFilter");
        audioRef.current.pause();
      });
      btnMapa.addEventListener("click", () => {
        setOpenMap(true);
      });
      hasMounted.current = true;
    }
  }, null);

  return (
    <Layout>
    <div className="menu1bolt">
      <Navbar />
      <div className="menuprueba">
        <div className="chicubun-container">
          <h1 className="chicubun-title">CHICUBUN</h1>
          <h2 className="subtie">[Nuestras palabras]</h2>
          <h2 className="chicubun-subtitle">
            Para mejorar esta experiencia, usa tus audífonos y da click en las
            diferentes imágenes
          </h2>
        </div>
        <div className="imageContainer" id="image-container">
          <img
            src="./interaccion_BN/ACTIVIDAD COLLAGE LINEAS.png"
            alt="Your Image"
            className="image_button"
            style={{ mixBlendMode: "multiply", height: "100%", width: "100%" }}
          />
        </div>
        <audio ref={audioRef} src="" />
        <Modal isOpen={openMap} onClose={handleClose}>
          <MapeoColectivo />
        </Modal>
      </div>
    </div>
    </Layout>
  );
};

export default Chicubun;
