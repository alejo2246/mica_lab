import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar/Navbar';

const Quyca = () => {
  const [images] = useState([
    { id: 1, src: '/quyca/1.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4' },
    { id: 3, src: '/quyca/3.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4'},
    { id: 4, src: '/quyca/4.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4' },
    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4'},
    { id: 6, src: '/quyca/6.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4'},
    { id: 7, src: '/quyca/7.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4' },
    { id: 8, src: '/quyca/8.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4' },
    { id: 9, src: '/quyca/9.png', audio: '/quyca/audio/9.mp3', video: '/quyca/video/9.mp4' },
    { id: 10, src: '/quyca/10.png', audio: '/quyca/audio/10.mp3', video: '/quyca/video/10.mp4' },
    { id: 11, src: '/quyca/11.png', audio: '/quyca/audio/10.mp3', video: '/quyca/video/11.mp4' },
    { id: 12, src: '/quyca/12.png', audio: '/quyca/audio/12.mp3', video: '/quyca/video/12.mp4' },
    { id: 13, src: '/quyca/13.png', audio: '/quyca/audio/13.mp3', video: '/quyca/video/12.mp4' },
    { id: 14, src: '/quyca/14.png', audio: '/quyca/audio/14.mp3', video: '/quyca/video/14.mp4' },
    { id: 15, src: '/quyca/15.png', audio: '/quyca/audio/15.mp3', video: '/quyca/video/15.mp4'},
    { id: 16, src: '/quyca/16.png', audio: '/quyca/audio/16.mp3', video: '/quyca/video/16.mp4'},
    { id: 17, src: '/quyca/17.png', audio: '/quyca/audio/17.mp3', video: '/quyca/video/17.mp4'},
    { id: 18, src: '/quyca/18.png', audio: '/quyca/audio/18.mp3', video: '/quyca/video/18.mp4' },
    { id: 19, src: '/quyca/19.png', audio: '/quyca/audio/19.mp3', video: '/quyca/video/16.mp4' },
    { id: 20, src: '/quyca/20.png', audio: '/quyca/audio/17.mp3', video: '/quyca/video/17.mp4'},
    { id: 21, src: '/quyca/21.png', audio: '/quyca/audio/18.mp3', video: '/quyca/video/18.mp4'},
    { id: 22, src: '/quyca/22.png', audio: '/quyca/audio/19.mp3', video: '/quyca/video/1.mp4' }
  ]);


  const [videoModalAbierto, setVideoModalAbierto] = useState(false);
  const [videoSeleccionado, setVideoSeleccionado] = useState('');
  const [audioSeleccionado, setAudioSeleccionado] = useState('');

  const reproducirContenido = async (id) => {
    const imagenSeleccionada = images.find((imagen) => imagen.id === id);

    if (imagenSeleccionada.video) {
      const videoExiste = await verificarRutaRecurso(imagenSeleccionada.video);
      if (videoExiste) {
        setVideoSeleccionado(imagenSeleccionada.video);
        abrirVideoModal();
      }
    }

    if (imagenSeleccionada.audio) {
      new Audio(imagenSeleccionada.audio).play();
      setAudioSeleccionado(imagenSeleccionada.audio);
    }
  };

  const abrirVideoModal = () => {
    setVideoModalAbierto(true);
  };

  const cerrarVideoModal = () => {
    setVideoModalAbierto(false);
    setVideoSeleccionado('');
  };

  const verificarRutaRecurso = async (ruta) => {
    try {
      const response = await fetch(ruta);
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const imageContainer = document.getElementById("image-container");

    images.forEach((imagen) => {
      const image = new Image();
      image.src = imagen.src;
      image.alt = `Imagen ${imagen.id}`;
      image.className = "responsive-image imageInte " + `image1_${imagen.id}`;

      image.addEventListener("click", () => {
        reproducirContenido(imagen.id);
      });

      imageContainer.appendChild(image);
    });
  }, [images]);

  return (
    <div className="menu1bolt">
      <Navbar />
      <div className="content-container">
        <h1 className="title-text title-bold">QUYCA</h1>
        <h2 className="subtie">[Territorio]</h2>
      </div>
      <div className="imagesContainer" id="image-container"></div>
      {videoModalAbierto && (
        <div className="modal-container" onClick={cerrarVideoModal}>
          <div className="modal2">
            <video width="100%" height="auto" controls autoPlay>
              <source src={videoSeleccionado} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quyca;