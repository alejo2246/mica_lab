import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import LeftCircle from "@/components/animation/LeftCircle";
import RightCircle from "@/components/animation/RightCircle";
import YellowCircle from "@/components/animation/YellowCircle";
import TextImage from "@/components/animation/TextImage";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef, useContext } from "react";
import { getProjects } from "../../sanity/sanity-utils";
import GifContext from "@/context/GifContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [animationStarted, setAnimationStarted] = useState(false);
  const { setGifUrl } = useContext(GifContext);
  const audioRef = React.useRef(null);
  const handleClick = () => {
    if (!animationStarted) {
      animate();
    }
  };
  const animate = async () => {
    setAnimationStarted(true);
    // await controls.start({ opacity: 1, scale: 1 });
    audioRef.current.volume = 0.1;
    audioRef.current.play();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getProjects();
        setGifUrl(projectsData[0].image);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Llamar a la función para cargar datos
    fetchData();
    const redirectionTimeout = setTimeout(() => {
      router.push("/home", undefined, { shallow: true });
    }, 5000);
    return () => clearTimeout(redirectionTimeout);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pagina de la iniciativa micalab" />
        <meta name="keywords" content="chicubun, fuechy, quyca" />
        <meta name="author" content="Daniela" />
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
        <title>Micalab</title>
      </Head>

      <div
        className={styles.animationContainer}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="circle-container" onClick={handleClick}>
          <div className="circle">
            <LeftCircle />
            <RightCircle />
          </div>
          <YellowCircle />
          <TextImage />
        </div>

        <audio ref={audioRef} src="./audios/INSTRUMENTOS.mp3" />
      </div>
    </>
  );
}
/*export default function Home() {
  const router = useRouter();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hideCircle, setHideCircle] = useState(false);

  const audioRef = React.useRef(null);
  const handleClick = () => {
    if (!animationStarted) {
      animate();
    }
  };
  const animate = async () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setHideCircle(true);
    }, 4000);
    setTimeout(() => {
      router.push("/home", undefined, { shallow: true });
    }, 5000);
    audioRef.current.volume = 0.1;
    audioRef.current.play();
  };

  // useEffect(() => {
  //   const redirectionTimeout = setTimeout(() => {
  //     router.push('/home', undefined, { shallow: true });
  //   }, 5000);
  //   return () => clearTimeout(redirectionTimeout);
  // }, []);

  return (
    <>
      <Head>
        <title>Mica lab</title>
        <meta name="description" content="Mica lab web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={styles.animationContainer}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <div className="circle-container">
          <div className="circle">
            <LeftCircle start={animationStarted} />
            <RightCircle start={animationStarted} />
          </div>
          <Image
            src={yellowCircleImage}
            alt="Yellow Circle"
            width={206}
            height={213}
            style={{
              opacity: hideCircle ? "0" : "1",
              transition: "opacity 1s ease",
              transform: "translateX(135px)",
            }}
          />
          
          <Image
            src={textImage}
            alt="Mica Lab"
            width={700}
            height={75}
            style={{
              opacity: hideCircle ? "1" : "0",
              transition: "opacity 1s ease",
              transform: "translateX(-310px)",
            }}
          />
        </div>

        <audio ref={audioRef} src="./audios/INSTRUMENTOS.mp3" />
      </div>
    </>
  );
}*/
