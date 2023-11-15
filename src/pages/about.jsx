import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="menu1bolt">
      <Navbar />
      <div className="about-content-container">
        <div className="about-container">
          <div className="text-and-image-container">
            <div className="about-title">
              <h3>
                Sobre
                <br /> El proyecto
              </h3>
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
                  Ganador de la Beca de investigación en arte, tecnología y
                  ancestralidad, otorgada por el Instituto Distrital de las
                  Artes 2023 (IDARTES).
                  <br />
                  <br />
                  Cuyo objetivo es la creación de un archivo de memoria
                  cartográfico, situado en los territorios de el barrio El
                  Salitre y La Hacienda las Mercedes en Suba. Esta iniciativa
                  esta vinculada a los relatos de memoria del sabedor y medico
                  ancestral de la comunidad Muysca de Suba, José Ignacio Rozo.
                  <br />
                  <br />
                  Se busca fortalecer el acceso a material archivístico
                  cartográfico para la comunidad. Suscitando a su consulta y uso
                  en diferentes escenarios de activación.
                </p>
              </div>
              <div className="about-text2">
                <p>
                  Esta experiencia conecta el tejido construido a través de los
                  relatos colectivos, de los cambios espaciales del territorio
                  de Suba. Como testimonio del asentamiento y permanencia de los
                  herederos del antiguo resguardo Muysca de Suba.
                  <br />
                  <br />
                  Agradecemos la colaboración de los archivos (Archivo General
                  de la Nación, Planoteca de la secretaria de Planeación,
                  Archivo Central de Predios, Archivo de Bogotá, Mapas de
                  Colombia IGAC, Mapas de Bogotá (Proyecto web de cartografía
                  histórica de la Universidad Nacional de Colombia) y Archivo
                  digital del Banco de la Republica).
                  <br />
                  <br />A su vez, al Instituto Distrital de las Artes (IDARTES),
                  a la línea de Arte, Ciencia y Tecnología, por su
                  acompañamiento y otorgar este estimulo. Por otro lado, a los
                  cabildantes de los territorios de el barrio EL Salitre y Tuna
                  Baja, por la participación en este proceso.
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
