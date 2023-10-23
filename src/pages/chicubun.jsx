import Navbar from "@/components/Navbar/Navbar";

const chicubun = () => {
  return (
    <div>
      <Navbar />
      <div className="chicubun-container">
        <h1 className="chicubun-title">CHICUBUN</h1>
        <h2 className="chicubun-subtitle">Para mejorar esta experiencia, usa tus audífonos y da click
en las diferentes imágenes</h2>
      </div>
      <div className="chicubun-image-container">
        <img src="/chicubun.png" alt="Your Image" className="chicubun-image" />
      </div>
    </div>
  );
};

export default chicubun;
