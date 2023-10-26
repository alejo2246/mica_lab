import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Panorama = () => {
  useEffect(() => {
    // Configuración de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("panorama-container")
      .appendChild(renderer.domElement);

    // Crear una esfera para el panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("./objects/image.jpg"),
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Configuración de la cámara
    camera.position.set(0, 0, 0.5);

    // Agregar controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Desactivar zoom para una imagen panorámica fija

    const loader = new GLTFLoader();
    loader.load(
      "./objects/collage.gltf",
      (gltf) => {
        // Escalar el modelo si es necesario
        gltf.scene.scale.set(0.01, 0.01, 0.01);

        // Colocar el modelo en el centro de la escena
        gltf.scene.position.set(0, 0, 0);

        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error cargando el modelo GLTF", error);
      }
    );
    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualizar los controles en cada frame
      renderer.render(scene, camera);
    };

    animate();

    // Manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Limpiar al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      document
        .getElementById("panorama-container")
        .removeChild(renderer.domElement);
    };
  }, []);

  return <div id="panorama-container" />;
};

export default Panorama;
