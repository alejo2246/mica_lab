import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect, useContext } from "react";
import ArrowLeft from "public/objects/arrow_left.svg";
import ArrowRight from "public/objects/arrow_right.svg";
import Link from "next/link";
import GifContext from "@/context/GifContext";
import Layout from "@/components/Layout";
const HomePage = () => {
  const [showGif, setShowGif] = useState(true);
  const { gifUrl } = useContext(GifContext);
  useEffect(() => {
    // Cambiar a la imagen después de 5 segundos
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 6000);
    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
    <div className="menu1bolt">
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
            src={gifUrl}
            alt="GIF"
            style={{
              mixBlendMode: "multiply",
              width: "100%",
              height: "calc(100vh - 92px)",
              opacity: showGif ? 1 : 0,
              transition: "opacity 2s ease-in",
              position: "absolute",
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
                margin: "0 auto",
                display: "block",
              }}
            />
            <Link
              className="hetlink4"
              href="/hizqa"
              style={{
                opacity: showGif ? 0 : 1,
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
              className="hetlink"
              href="/quyca"
              style={{
                opacity: showGif ? 0 : 1,
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
              className="hetlink2"
              href="/chicubun"
              style={{
                opacity: showGif ? 0 : 1,
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
              className="hetlink3"
              href="/ubasucac"
              style={{
                opacity: showGif ? 0 : 1,
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
    </div>
    </Layout>
  );
};

export default HomePage;
