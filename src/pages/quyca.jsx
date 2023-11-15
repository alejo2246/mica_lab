import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';

const Quyca = () => {
  const [images] = useState([
    { id: 1, src: '/quyca/1.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '145%', left: '46%', width: '20%', height: 'auto' },

    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '127%', left: '47%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '126%', left: '45%', width: '2%', height: 'auto' },
    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '127%', left: '52.7%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '126%', left: '50.5%', width: '2%', height: 'auto' },
    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '127%', left: '58.5%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '126%', left: '56%', width: '2%', height: 'auto' },
    { id: 8, src: '/quyca/8.png', audio: '/quyca/audio/3.mp3', video: '/quyca/video/3.mp4', top: '135%', left: '46%', width: '2%', height: 'auto' },
    { id: 9, src: '/quyca/9.png', audio: '/quyca/audio/9.mp3', video: '/quyca/video/9.mp4', top: '150%', left: '25%', width: '20%', height: 'auto' },
    { id: 10, src: '/quyca/10.png', audio: '/quyca/audio/10.mp3', video: '/quyca/video/10.mp4', top: '123%', left: '62%', width: '13%', height: 'auto' },
    { id: 11, src: '/quyca/11.png', audio: '/quyca/audio/11.mp3', video: '/quyca/video/11.mp4', top: '150%', left: '67%', width: '5%', height: 'auto' },
    { id: 12, src: '/quyca/12.png', audio: '/quyca/audio/12.mp3', video: '/quyca/video/12.mp4', top: '60%', left: '25%', width: '20%', height: 'auto' },
    { id: 13, src: '/quyca/13.png', audio: '/quyca/audio/13.mp3', video: '/quyca/video/12.mp4', top: '60%', left: '55%', width: '20%', height: 'auto' },
    { id: 14, src: '/quyca/14.png', audio: '/quyca/audio/14.mp3', video: '/quyca/video/14.mp4', top: '92%', left: '46%', width: '25%', height: 'auto' },
    { id: 15, src: '/quyca/15.png', audio: '/quyca/audio/15.mp3', video: '/quyca/video/15.mp4', top: '78%', left: '42%', width: '17%', height: 'auto' },
    { id: 16, src: '/quyca/16.png', audio: '/quyca/audio/16.mp3', video: '/quyca/video/16.mp4', top: '165%', left: '55%', width: '20%', height: 'auto' },
    { id: 17, src: '/quyca/17.png', audio: '/quyca/audio/17.mp3', video: '/quyca/video/17.mp4', top: '91%', left: '27%', width: '17%', height: 'auto' },
    { id: 18, src: '/quyca/18.png', audio: '/quyca/audio/18.mp3', video: '/quyca/video/18.mp4', top: '131%', left: '49%', width: '8%', height: 'auto' },
    { id: 19, src: '/quyca/19.png', audio: '/quyca/audio/19.mp3', video: '/quyca/video/1.mp4', top: '131%', left: '25%', width: '20%', height: 'auto' }
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

  return (
    <div className="menu1bolt">
      <Navbar />
      <div className="content-container">
        <h1 className="title-text title-bold">QUYCA</h1>
        <h2 className="subtie">[Territorio]</h2>
      </div>
      <div className="image-container">
        {images.map((imagen) => (
          <img
            key={imagen.id}
            src={imagen.src}
            alt={`Imagen ${imagen.id}`}
            className={'responsive-image imageInte'}
            style={{ top: imagen.top, left: imagen.left, width: imagen.width, height: imagen.height }}
            onClick={() => reproducirContenido(imagen.id)}
          />
        ))}
      </div>
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