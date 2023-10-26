import Navbar from "@/components/Navbar/Navbar";
import Panorama from "@/components/Viewer.jsx";
import Link from "next/link";

const HomePage = () => {
  const modelPath = "./objects/image.jpg";
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Panorama />
      </div>
    </div>
  );
};

export default HomePage;
