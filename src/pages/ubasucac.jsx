import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Circle from "public/ubasucac/Union.svg";
import ArrowLeft from "public/ubasucac/Layerleft.svg";
import ArrowRight from "public/ubasucac/Layerright.svg";
import Download from "public/ubasucac/download.svg";
import CloseButton from "public/ubasucac/close.svg";
import Modal from "@/components/Modal";
import Image from "next/image";
import Layout from "@/components/Layout";
const Ubasucac = () => {
  const downloadImage = () => {
    const imageSrc = `/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`;
    const downloadLink = document.createElement("a");
    downloadLink.href = imageSrc;
    downloadLink.setAttribute(
      "download",
      `imagen_${selectedImageInGroup}_${selectedImage}.png`
    );
    downloadLink.click();
  };
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedImageInGroup, setSelectedImageInGroup] = useState(1);
  const [isFirstContainerVisible, setIsFirstContainerVisible] = useState(true);
  const [isModalOpen, setIsSecondContainerVisible] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const handleMouseEnter = (index) => {
    document.getElementById(`imagen${index}`).style.fill = "red";
    document.getElementById(`fecha${index}`).style.color = "red";
    document.getElementById(`fecha${index}`).style.fontSize = "40px";

    const newIndicatorOffset = (index - 1) * 5.5;
    setIndicatorOffset(newIndicatorOffset);
  };
  const handleMouseLeave = (index) => {
    document.getElementById(`imagen${index}`).style.fill = "white";
    document.getElementById(`fecha${index}`).style.color = "black";
    document.getElementById(`fecha${index}`).style.fontSize = "1em";

    setIndicatorOffset(0);
  };
  const circlesPosition = [
    { left: "46.4%", top: "45%" },
    { right: "44%", top: "33%" },
    { left: "39.5%", top: "36%" },
    { right: "41.5%", bottom: "41.5%" },
    { left: "44%", top: "21.5%" },
    { left: "44%", bottom: "26%" },
  ];

  const fechas = [
    "1538 - 1650",
    "1650 - 1875",
    "1875 - 1925",
    "1950 - 1967",
    "1975 - 1984",
    "1989 - 2023",
  ];

  const changeImageInGroup = (newIndex) => {
    const maxImagesInGroup = getMaxImagesInGroup(selectedImage);
    if (newIndex >= 1 && newIndex <= maxImagesInGroup) {
      setSelectedImageInGroup(newIndex);
    } 
  };

  const getMaxImagesInGroup = (selectedDate) => {
    const maxImagesPerDate = {
      1: 3,
      2: 7,
      3: 1,
      4: 4,
      5: 4,
      6: 17,
    };
    return maxImagesPerDate[selectedDate] || 0;
  };
  const handleImageClick = (index) => {
    setSelectedImage(index);
    setSelectedImageInGroup(1);
    setIsFirstContainerVisible(false);
    setIsSecondContainerVisible(true);
  };

  const handleSecondContainerClose = () => {
    setIsFirstContainerVisible(true);
    setIsSecondContainerVisible(false);
  };

  const [modalAbierto, setModalAbierto] = useState(false);

  const manejarClicEnImagen = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <Layout>
    <>
      <div className="menu1bolt">
        <div>
          <Navbar />
          <div className="chicubun-container">
            <h1 className="chicubun-title">UBASUCAC AGUENÉ</h1>
            <h2 className="subtie">[Memoria]</h2>
            <h2 className="chicubun-subtitle">
              de click sobre la línea de tiempo o <br />
              sobre para visualizar la info cartográfica
            </h2>
          </div>
          <div
            className="primercontenedor"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0%",
              position: "relative",
              marginBottom: "10%",
            }}
          >
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div style={{ marginLeft: "10px", display: "flex" }}>
                <div>
                  <img src="/ubasucac/Lineadetiempo.svg" alt="Imagen 1" />
                  <img
                    id="indicadorTiempo"
                    src="/ubasucac/Indicadordetiempo.svg"
                    className="smooth-change"
                    alt="Indicador de Tiempo"
                    style={{
                      position: "absolute",
                      marginLeft: "-1%",
                      marginTop: `${indicatorOffset}%`,
                    }}
                  />
                </div>
                <div className="fechassub">
                  {fechas.map((fecha, i) => (
                    <p
                      id={`fecha${i + 1}`}
                      onClick={() => handleImageClick(i + 1)}
                      onMouseEnter={() => handleMouseEnter(i + 1)}
                      onMouseLeave={() => handleMouseLeave(i + 1)}
                      key={`fecha_${i + 1}`}
                    >
                      {fecha}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <img
                  className="espiral"
                  src="/ubasucac/espiral.svg"
                  alt="Imagen de fondo"
                />
                {circlesPosition.map((el, i) => (
                  <Circle
                    fill="white"
                    className="circleLineTime"
                    style={{
                      position: "absolute",
                      left: el.left ?? "none",
                      top: el.top ?? "none",
                      right: el.right ?? "none",
                      bottom: el.bottom ?? "none",
                    }}
                    id={`imagen${i + 1}`}
                    onClick={() => handleImageClick(i + 1)}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={() => handleMouseLeave(i + 1)}
                    key={`circleLineTime${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen}>
          <div
            className="segundocontenedor"
            style={{
              position: "relative",
              width: "95%",
              maxWidth: "1232px",
              paddingTop: "60%",
            }}
          >
            <img
              src="/ubasucac/Union3.svg"
              style={{
                position: "absolute",
                top: "0.3%",
                left: "-0.8%",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            />
            <img
              src="/ubasucac/Vector.svg"
              style={{
                position: "absolute",
                top: "-0.2%",
                left: 0,
                width: "98%",
                height: "100%",
                zIndex: 2,
              }}
            />
            <div className="menu3respon">
              <div
                className="menusecond2"
                style={{
                  overflow: "hidden",
                  maxWidth: "1100px",
                  maxHeight: "500px",
                  margin: "0 0",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={`/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`}
                  className="imageclas"
                  alt={`Imagen ${selectedImageInGroup} de ${selectedImage}`}
                  onClick={manejarClicEnImagen}
                />
                <div className="image-indicator-container">
                  {[...Array(getMaxImagesInGroup(selectedImage))].map((_, index) => (
                    <div
                      key={`indicator-${index}`}
                      className={`image-indicator-dot ${index === selectedImageInGroup - 1 ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
              {modalAbierto && (
                <div
                  className="modal-overlay"
                  onClick={cerrarModal}
                  style={{ overflowY: "scroll" }}
                >
                  <div
                    className="modal2"
                    style={{ width: "100%", padding: "0px", paddingTop: "50%" }}
                  >
                    <Image
                      src={`/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`}
                      alt={`Imagen ${selectedImageInGroup} de ${selectedImage}`}
                      // onLoad={(e) => {
                      //   setImageDimensions({
                      //     width: e.target.width,
                      //     height: e.target.height,
                      //   });
                      // }}
                      style={{
                        width: "100%",
                      }}
                      onClick={manejarClicEnImagen}
                      width={1000}
                      height={2000}
                    />
                  </div>
                </div>
              )}
            </div>
            {!modalAbierto && (
              <CloseButton
                className="closethat"
                style={{ top: "15%", right: "3%", zIndex: 3 }}
                onClick={handleSecondContainerClose}
              />
            )}
            {modalAbierto && isModalOpen && (
              <CloseButton
                className="closethat"
                style={{ top: "15%", right: "3%", zIndex: 3 }}
                onClick={() => setModalAbierto(false)}
              />
            )}
            <ArrowLeft
              className="closethat"
              style={{ top: "50%", left: "4%", zIndex: 3 }}
              onClick={() => changeImageInGroup(selectedImageInGroup - 1)}
            />
            <ArrowRight
              className="closethat"
              style={{ top: "50%", right: "7%", zIndex: 3 }}
              onClick={() => changeImageInGroup(selectedImageInGroup + 1)}
            />
            <img
              src="/ubasucac/Group 1.svg"
              style={{
                position: "absolute",
                zIndex: 2,
                bottom: "10%",
                left: "3%",
              }}
            />
            <div
              onClick={downloadImage}
              className="buttonDownload"
              style={{
                position: "absolute",
                zIndex: 2,
                bottom: "13%",
              }}
            >
              <Download className="downloadIcon" />
              <p className="textcontainer">Descarga la imagen acá</p>
            </div>
          </div>
        </Modal>
      </div>
    </>
        </Layout>
  );
};

export default Ubasucac;
