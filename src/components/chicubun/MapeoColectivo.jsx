import React, { useState, useEffect } from "react";

const MapeoColectivo = () => {
  const [anchoOriginal, setAnchoOriginal] = useState(1);
  const [altoOriginal, setAltoOriginal] = useState(1);
  const audioRef = React.useRef(null);
  const hasMounted = React.useRef(false);
  const imagenes = [
    {
      top: "50%",
      left: "4%",
      width: 152,
    },
    {
      top: "22%",
      left: "54%",
      width: 213,
    },
    {
      top: "22%",
      left: "5%",
      width: 128,
    },
    {
      top: "34%",
      left: "30%",
      width: 187,
    },
    {
      top: "44%",
      left: "43%",
      width: 93,
    },
    {
      top: "25%",
      left: "40%",
      width: 152,
    },
    {
      top: "22%",
      left: "78%",
      width: 180,
    },
    {
      top: "50.5%",
      left: "29%",
      width: 98,
    },
    {
      top: "18%",
      left: "57%",
      width: 95,
    },
    {
      top: "50%",
      left: "76.5%",
      width: 95,
    },
    {
      top: "47%",
      left: "63%",
      width: 180,
    },
    {
      top: "5%",
      left: "13%",
      width: 133,
    },
    {
      top: "58%",
      left: "39%",
      width: 93,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const contenedorPadre = document.getElementById(
        "containerMapeoColectivo"
      );
      console.log(contenedorPadre.clientWidth);
      const nuevoAncho = contenedorPadre.clientWidth / 1292;
      const nuevoAlto = contenedorPadre.clientHeight / 874;

      setAnchoOriginal(nuevoAncho);
      setAltoOriginal(nuevoAlto);
    };
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize inicialmente para establecer el tamaño original
    handleResize();

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, [anchoOriginal, altoOriginal]);
  useEffect(() => {
    if (!hasMounted.current) {
      for (let i = 1; i <= 9; i++) {
        const image = document.getElementById(`image${i}`);

        image.addEventListener("click", () => {
          audioRef.current.pause();
          audioRef.current.src = `./MAPA COLECTIVO/audio${i}.mp3`;
          audioRef.current.volume = 0.1;
          audioRef.current.play();
        });
      }
      hasMounted.current = true;
    }
  }, []);
  return (
    <>
      <img
        src="./MAPA COLECTIVO/MAPA COLECTIVO FONDO.jpg"
        alt="Your Image"
        className=""
        style={{
          position: "absolute",
          height: `${874 * altoOriginal}px`,
          width: `${1292 * anchoOriginal}px`,
          zIndex: "0",
        }}
      />
      <h2
        style={{
          zIndex: "99",
          position: "absolute",
          textAlign: "center",
          left: "25%",
          fontFamily: "Eczar",
        }}
      >
        Para mejorar esta experiencia, usa tus audífonos y da click en las{" "}
        <br />
        diferentes imágenes
      </h2>
      {imagenes.map((el, i) => {
        return (
          <img
            src={`./MAPA COLECTIVO/imagen${i + 1}.png`}
            alt={`Imagen del mapeo ${i + 1}`}
            className="imageInte showFirst"
            key={`image${i + 1}`}
            id={`image${i + 1}`}
            style={{
              top: el.top,
              left: el.left,
              height: "auto",
              width: `${el.width * anchoOriginal}px`,
            }}
          />
        );
      })}
      <audio ref={audioRef} src="" />
    </>
  );
};

export default MapeoColectivo;
