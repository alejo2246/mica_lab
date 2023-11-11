import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';

const Quyca = () => {
  const [images] = useState([
    { id: 1, src: '/quyca/1.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '145%', left: '41%', width: '20%', height: 'auto' },

    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '127%', left: '43%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '126%', left: '41%', width: '2%', height: 'auto' },
    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '127%', left: '48.7%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '126%', left: '46.5%', width: '2%', height: 'auto' },
    { id: 5, src: '/quyca/5.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '127%', left: '54%', width: '3%', height: 'auto' },
    { id: 2, src: '/quyca/2.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '126%', left: '52%', width: '2%', height: 'auto' },

    { id: 6, src: '/quyca/6.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '10%', left: '20%', width: '20%', height: 'auto' },
    { id: 7, src: '/quyca/7.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '10%', left: '20%', width: '20%', height: 'auto' },
    { id: 8, src: '/quyca/8.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '135%', left: '41%', width: '2%', height: 'auto' },
    { id: 9, src: '/quyca/9.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '150%', left: '20%', width: '20%', height: 'auto' },
    { id: 10, src: '/quyca/10.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '123%', left: '58%', width: '13%', height: 'auto' },
    { id: 11, src: '/quyca/11.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '150%', left: '64%', width: '5%', height: 'auto' },
    { id: 12, src: '/quyca/12.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '60%', left: '20%', width: '20%', height: 'auto' },
    { id: 13, src: '/quyca/13.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '60%', left: '50%', width: '20%', height: 'auto' },
    { id: 14, src: '/quyca/14.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '92%', left: '41%', width: '25%', height: 'auto' },
    { id: 15, src: '/quyca/15.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '78%', left: '35%', width: '17%', height: 'auto' },
    { id: 16, src: '/quyca/16.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '165%', left: '50%', width: '20%', height: 'auto' },
    { id: 17, src: '/quyca/17.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '91%', left: '22%', width: '17%', height: 'auto' },
    { id: 18, src: '/quyca/18.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '131%', left: '44%', width: '8%', height: 'auto' },
    { id: 19, src: '/quyca/19.png', audio: '/quyca/audio/1.mp3', video: '/quyca/video/1.mp4', top: '131%', left: '20%', width: '20%', height: 'auto' }
  ]);

  const reproducirContenido = (id) => {
    const imagenSeleccionada = images.find((imagen) => imagen.id === id);
    if (imagenSeleccionada.audio) {
      new Audio(imagenSeleccionada.audio).play();
    } else if (imagenSeleccionada.video) {
      console.log(`Reproduciendo video: ${imagenSeleccionada.video}`);
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
    </div>
  );
};

export default Quyca;
