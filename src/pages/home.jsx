import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import ArrowLeft from "public/objects/arrow_left.svg";
import ArrowRight from "public/objects/arrow_right.svg";
import Link from "next/link";
const HomePage = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // Cambiar a la imagen después de 5 segundos
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 6000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 92px)",
        }}
        id="container"
      >
        <img
          src="./objects/COLLAGE INTERACTIVO.gif"
          alt="GIF"
          style={{
            mixBlendMode: "multiply",
            width: "100%",
            height: "calc(100vh - 92px)",
            opacity: showGif ? 1 : 0, // Aplicar opacidad según el estado
            transition: "opacity 2s ease-in", // Agregar una transición de 1 segundo
            position: "absolute", // Posicionamiento absoluto para superponer elementos
          }}
        />
        <div
          style={{
            position: "relative",
            opacity: showGif ? 0 : 1,
            width: "1186px",
            height: "100%",
          }}
        >
          <img
            src="./objects/COLLAGE.png"
            alt="Imagen Después de 5 Segundos"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              opacity: showGif ? 0 : 1, // Invertir la opacidad
              transition: "opacity 2s ease-in", // Agregar una transición de 1 segundo
              position: "absolute", // Posicionamiento absoluto para superponer elementos
            }}
          />
          <Link
            href="/hizqa"
            style={{
              opacity: showGif ? 0 : 1,
              transition: "opacity 2s ease-in",
              width: "210px",
              height: "100px",
              top: "360px",
              left: "65px",
              position: "absolute",
            }}
          >
            <div
              className="menuHover"
              style={{ height: "100%", width: "100%", position: "relative" }}
            >
              <p
                style={{
                  position: "absolute",
                  left: "-20px",
                  // top: "20px",
                }}
              >
                HIZQA <br />
                SAASBISA
              </p>
              <ArrowLeft
                style={{ position: "absolute", left: "50%", top: "50%" }}
              />
            </div>
          </Link>
          <Link
            href="/quyca"
            style={{
              opacity: showGif ? 0 : 1,
              transition: "opacity 2s ease-in",
              width: "130px",
              height: "50px",
              top: "720px",
              left: "55px",
              position: "absolute",
            }}
          >
            <div
              className="menuHover"
              style={{ height: "100%", width: "100%", position: "relative" }}
            >
              <p
                style={{
                  position: "absolute",
                  left: "-20px",
                  // top: "20px",
                }}
              >
                QUYCA
              </p>
              <ArrowLeft
                style={{ position: "absolute", left: "50%", top: "50%" }}
              />
            </div>
          </Link>
          <Link
            href="/chicubun"
            style={{
              opacity: showGif ? 0 : 1,
              transition: "opacity 2s ease-in",
              width: "130px",
              height: "50px",
              top: "560px",
              right: "325px",
              position: "absolute",
            }}
          >
            <div
              className="menuHover"
              style={{ height: "100%", width: "100%", position: "relative" }}
            >
              <ArrowRight
                style={{ position: "absolute", right: "50%", bottom: "50%" }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "80%",
                }}
              >
                CHICUBUN
              </p>
            </div>
          </Link>
          <Link
            href="/ubasucac"
            style={{
              opacity: showGif ? 0 : 1,
              transition: "opacity 2s ease-in",
              width: "130px",
              height: "50px",
              top: "70px",
              right: "200px",
              position: "absolute",
            }}
          >
            <div
              className="menuHover"
              style={{ height: "100%", width: "100%", position: "relative" }}
            >
              <ArrowRight
                style={{ position: "absolute", right: "50%", bottom: "50%" }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "80%",
                }}
              >
                UBASUCAC <br /> AGUENÉ
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
