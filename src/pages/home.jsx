import Navbar from "@/components/Navbar/Navbar";
import Panorama from "@/components/Viewer.jsx";
import Link from "next/link";

const HomePage = () => {
  const modelPath = "./objects/image.jpg";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
        }}
        id="container"
      >
        <Panorama />
      </div>
    </div>
  );
};

export default HomePage;
