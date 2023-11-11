import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Circle from "public/ubasucac/Union.svg";
import ArrowLeft from "public/ubasucac/Layerleft.svg";
import ArrowRight from "public/ubasucac/Layerright.svg";
import Download from "public/ubasucac/download.svg";
import CloseButton from "public/ubasucac/close.svg";
import Modal from "@/components/Modal";

const Ubasucac = () => {
  const downloadImage = () => {
    const imageSrc = `/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`;
    const downloadLink = document.createElement("a");
    downloadLink.href = imageSrc;
    downloadLink.setAttribute("download", `imagen_${selectedImageInGroup}_${selectedImage}.png`);
    downloadLink.click();
  };
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedImageInGroup, setSelectedImageInGroup] = useState(1);
  const [isFirstContainerVisible, setIsFirstContainerVisible] = useState(true);
  const [isModalOpen, setIsSecondContainerVisible] =useState(false);

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
    } else if (newIndex < 1) {

      const previousDate = selectedImage - 1;
      if (previousDate >= 1) {
        setSelectedImage(previousDate);
        setSelectedImageInGroup(getMaxImagesInGroup(previousDate));
      }
    } else {

      const nextDate = selectedImage + 1;
      if (nextDate <= fechas.length) {
        setSelectedImage(nextDate);
        setSelectedImageInGroup(1);
      }
    }
  };
  
  
  const getMaxImagesInGroup = (selectedDate) => {
    const maxImagesPerDate = {
      1: 3,
      2: 7, 
      3: 1,
      4: 4,
      5: 4,
      6: 12,

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
    <>
    <div className="menu1bolt">
      <div >
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
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "10px", display: "flex" }}>
              <div>
                <img src="/ubasucac/Lineadetiempo.svg" alt="Imagen 1" />
                <img
                  id="indicadorTiempo"
                  src="/ubasucac/indicadordetiempo.svg"
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
                src="/ubasucac/espiral.svg"
                style={{
                  width: "100%",
                  maxWidth: "724px",
                  height: "auto",
                  marginLeft: "10%",
                }}
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
            src="/ubasucac/union3.svg"
            style={{
              position: "absolute",
              top: '0.3%',
              left: "-0.8%",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
          <img
            src="/ubasucac/vector.svg"
            style={{
              position: "absolute",
              top: "-0.2%",
              left: 0,
              width: "98%",
              height: "100%",
              zIndex: 2,
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "28%",
              left: "4%",
              width: "98%",
              height: "100%",
              maxHeight: "500px",
              zIndex: 3,
            }}
          >
          <div className="menusecond2" style={{ overflow: "hidden", maxWidth: "1100px",maxHeight:'500px', margin: "0 0",  boxSizing: "border-box" }}>
            <img
              // src={`/ubasucac/imagen_${selectedImage}_${selectedImageInGroup}.png`}
              src={`/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`}
              style={{ width: "100%", height: "auto", display: "block" }}
              alt={`Imagen ${selectedImageInGroup} de ${selectedImage}`}
              onClick={manejarClicEnImagen}
            />
          </div>
          {modalAbierto && (
            <div className="modal-overlay" onClick={cerrarModal}>
              <div className="modal2" >
                <img
                  src={`/ubasucac/${selectedImage}/${selectedImageInGroup}.jpg`}
                  style={{ width: "100%", height: "auto",maxHeight:'700px', display: "block" }}
                  alt={`Imagen ${selectedImageInGroup} de ${selectedImage}`}
                />
              </div>
            </div>
          )}

          </div>
          <CloseButton
            className="closethat"
            style={{ top: "17%", right: "3%" }}
            onClick={handleSecondContainerClose}
          />
          <ArrowLeft
            className="closethat"
            style={{ top: "50%", left: "4%" }}
            onClick={() => changeImageInGroup(selectedImageInGroup - 1)}
          />
          <ArrowRight
            className="closethat"
            style={{ top: "50%", right: "7%" }}
            onClick={() => changeImageInGroup(selectedImageInGroup + 1)}
          />

          <img
            src="/ubasucac/Group 1.svg"
            style={{
              position: "absolute",
              zIndex: 2,
              bottom: "15%",
              left: "3%",
            }}
          />

          <div onClick={downloadImage} className="buttonDownload"          
            style={{
              position: "absolute",
              zIndex: 2,
            }}>
            <Download className="downloadIcon" />
            <p className="textcontainer">Descarga la imagen acá</p>
          </div>
        </div>
      </Modal>
      </div>
    </>
  );
};

export default Ubasucac;
