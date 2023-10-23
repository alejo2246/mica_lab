import Navbar from "@/components/Navbar/Navbar";

const quyca = () => {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <h1 className="title-text title-bold">QUYCA</h1>
      </div>
      <div className="image-container">
          <img src="/quyca.png" alt="Your Image" className="responsive-image" />
        </div>
    </div>
  );
};

export default quyca;
