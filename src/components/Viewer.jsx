import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Viewer = ({ modelPath }) => {
  let scene, camera, renderer, controls;

  useEffect(() => {
    const init = () => {
      // Configuración de la escena
      scene = new THREE.Scene();

      // Configuración de la cámara
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //   camera.position.z = 5;
      camera.position.set(0, 0, 10); // Otra posición que pueda mostrar el modelo


      // Configuración del renderizador
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      document.body.appendChild(renderer.domElement);

      // Configuración del modelo GLB
      const loader = new GLTFLoader();
      loader.load(modelPath, (gltf) => {
        gltf.scene.rotation.x = Math.PI / 2;
        gltf.scene.scale.set(1, 1, 1); // Ajusta la escala según tus necesidades
        scene.add(gltf.scene);
      });
      
      

      // Configuración de OrbitControls para permitir la interactividad
      controls = new OrbitControls(camera, renderer.domElement);
    };

    const animate = () => {
        requestAnimationFrame(animate);
      
        // Actualiza los controles
        controls.update();
      
        // Renderiza la escena
        renderer.render(scene, camera);
      };
      

    // Inicializa la escena y comienza la animación
    init();
    animate();

    // Manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Agrega el listener para el cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [modelPath]);

  return null; // No renderizamos nada en React, ya que Three.js se encarga de la renderización
};

export default Viewer;
