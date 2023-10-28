import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Panorama = () => {
  const hasMounted = useRef(false);
  let camera, scene, renderer;
  useEffect(() => {
    if (!hasMounted.current) {
      // Configuración de Three.js
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      // const renderer = new THREE.WebGLRenderer();
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document
        .getElementById("panorama-container")
        .appendChild(renderer.domElement);

      // Crear una esfera para el panorama
      const geometry = new THREE.SphereGeometry(5, 60, 40);
      geometry.scale(-1, 1, 1);
      // const material = new THREE.MeshBasicMaterial({
      //   map: new THREE.TextureLoader().load("./objects/image2.jpg"),
      // });
      scene.background = new THREE.Color(0xf6f1eb);
      // const texture = new THREE.TextureLoader().load(
      //   "./objects/FONDO PARA VR FINAL.jpg"
      // );
      // texture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = texture;
      // const sphere = new THREE.Mesh(geometry, material);
      // scene.add(sphere);

      // Configuración de la cámara
      camera.position.set(0, 0, 0.6);

      // Agregar controles de órbita
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableRotate = true; // Permite la rotación
      controls.enablePan = false; // Desactiva el desplazamiento/paneo
      controls.enableZoom = false; // Desactiva el zoom

      // Restringe la rotación solo al eje vertical (Y)
      controls.minPolarAngle = Math.PI / 2; // Ángulo mínimo (90 grados)
      controls.maxPolarAngle = Math.PI / 2; // Ángulo máximo (90 grados)

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
      // init();

      // function init() {
      //   const container = document.getElementById("container");

      //   camera = new THREE.PerspectiveCamera(
      //     75,
      //     window.innerWidth / window.innerHeight,
      //     1,
      //     1100
      //   );
      //   camera.position.z = 0.01;

      //   scene = new THREE.Scene();

      //   const texture = new THREE.TextureLoader().load(
      //     "./objects/FONDO PARA VR FINAL.jpg",
      //     render
      //   );
      //   texture.mapping = THREE.EquirectangularReflectionMapping;

      //   scene.background = texture;

      //   renderer = new THREE.WebGLRenderer();
      //   renderer.setPixelRatio(window.devicePixelRatio);
      //   renderer.setSize(window.innerWidth, window.innerHeight);
      //   container.appendChild(renderer.domElement);

      //   //

      //   window.addEventListener("resize", onWindowResize, false);

      //   const controls = new OrbitControls(camera, renderer.domElement);
      //   controls.addEventListener("change", render);
      // }

      // function onWindowResize() {
      //   camera.aspect = window.innerWidth / window.innerHeight;
      //   camera.updateProjectionMatrix();

      //   renderer.setSize(window.innerWidth, window.innerHeight);
      // }

      // function render() {
      //   renderer.render(scene, camera);
      // }
      hasMounted.current = true;
      // Limpiar al desmontar el componente
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div id="panorama-container" />;
};

export default Panorama;
