import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-content-container">
        <div className="about-container">
          <div className="text-and-image-container">
            <div className="about-title">
              <h1>
                Sobre
                <br /> La iniciativa
              </h1>
            </div>

            <div className="about-columns">
              <div className="about-text">
                <p>
                  MICA LAB es una iniciativa transmedia articulada al proyecto
                  de investigación <br />
                  <span style={{ color: "red" }}>
                    EL CAMINAR DE LAS PLANTAS - CARTOGRÁFIAS DE MEMORIA.
                  </span>
                  <br />
                  <br />
                  Ganador de la Beca de investigación en Arte, Ciencia y
                  Tecnología, otorgada por el Instituto Distrital de las Artes
                  2023 (IDARTES).
                </p>
              </div>
              <div
                className="about-text"
                style={{ marginLeft: "15%", maxWidth: "472px" }}
              >
                <p>
                  Cuyo objetivo es la creación de un archivo de
                  memoria-cartográfica de los territorios de El Salitre y la
                  Hacienda Las Mercedes, ubicados en la localidad de Suba.
                  <br />
                  <br />
                  Una experiencia que conecta la relatoría propia de los cambios
                  espaciales de los territorios de Suba, como testigo del
                  asentamiento y permanencia de los herederos del antiguo
                  resguardo Muysca de Suba.
                </p>
              </div>
            </div>
            <div className="about-image-container">
              <img
                src="/sobreproyectimg.png"
                alt="About Us Image"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
