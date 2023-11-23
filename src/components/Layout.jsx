import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleOrientationAndSizeChange = () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 700;
      const isPortrait = window.innerWidth < window.innerHeight;

      setShowModal(isMobile && isSmallScreen && isPortrait);
    };

    window.addEventListener("resize", handleOrientationAndSizeChange);
    handleOrientationAndSizeChange();

    return () => {
      window.removeEventListener("resize", handleOrientationAndSizeChange);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="fullscreen-modal">
          <div className="modal-content">
            <p>
              Por favor, gire su dispositivo a modo horizontal o utilice una pantalla más grande para una mejor experiencia.
            </p>
          </div>
        </div>
      )}
      <div className={`page-container ${showModal ? "modal-open" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
