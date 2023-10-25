import Navbar from "@/components/Navbar/Navbar";
import Viewer from "@/components/Viewer.jsx";
import Link from "next/link";

const HomePage = () => {
  const modelPath = './objects/collage.gltf';
  return (
    <div>
      <Navbar />
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Viewer modelPath={modelPath} />
      </div>
    </div>
  );
};

export default HomePage;
