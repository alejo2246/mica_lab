import Link from "next/link";
import Image from "next/image";
import Typography from "./Typography";
import { useState } from "react";
import { cloneUniformsGroups } from "three";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  // Obtener el estado inicial del localStorage o usar un valor por defecto
  const initialSelectedLink = isLocalStorageAvailable
    ? localStorage.getItem("selectedLink") || null
    : null;

  const [selectedLink, setSelectedLink] = useState(initialSelectedLink);


  const handleLinkClick = (link) => {
    if (isLocalStorageAvailable) {
      if (selectedLink === link) {
        setSelectedLink(null);
        localStorage.removeItem("selectedLink");
      } else {
        setSelectedLink(link);
        localStorage.setItem("selectedLink", link);
      }
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      setShowMenu(false);
    }
  };
  
  return (
    <nav>
      <div className="navbar-container">
        <Link
          href="/home"
          className="navbar-left"
          style={{ cursor: "pointer" }}
        >
          <div className="navbar-logo">
            <Image src="/icons/logo.svg" alt="Logo" width={53} height={49} />
          </div>
          <Typography text="MICA LAB" sx={"hola"} />
        </Link>

        <div className={`navbar-right ${showMenu ? "show-menu" : ""}`}>
          <div className="navbar-list">
            <span className="navbar-item">
              <div className="menu-item">
                <Link
                  href="#"
                  className="buttom12"
                  onClick={() => handleLinkClick("FUECHY")}
                >
                  FUECHY{" "}
                  <img
                    className="hola"
                    src="/flecha.svg"
                    alt="Descripción del SVG"
                    width="16"
                    height="16"
                  />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      href="/ubasucac"
                      className={`navbar-link ${
                        selectedLink === "UBASUCAC" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("UBASUCAC")}
                    >
                      UBASUCAC AGUENÉ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chicubun"
                      className={`navbar-link ${
                        selectedLink === "CHICUBUN" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("CHICUBUN")}
                    >
                      CHICUBUN
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quyca"
                      className={`navbar-link ${
                        selectedLink === "QUYCA" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("QUYCA")}
                    >
                      QUYCA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizqa"
                      className={`navbar-link ${
                        selectedLink === "HIZQA" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("HIZQA")}
                    >
                      HIZQA SAASBISA
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
            <span className="navbar-item">
              <Link
                href="/about"
                className={`navbar-link ${
                  selectedLink === "SOBRE LA INICIATIVA" ? "selected" : ""
                }`}
                onClick={() => handleLinkClick("SOBRE LA INICIATIVA")}
              >
                SOBRE LA INICIATIVA
              </Link>
            </span>
            <span className="navbar-item">
              <Link
                href="/credits"
                className={`navbar-link ${
                  selectedLink === "CRÉDITOS" ? "selected" : ""
                }`}
                onClick={() => handleLinkClick("CRÉDITOS")}
              >
                CRÉDITOS
              </Link>
            </span>
          </div>
        </div>
        <div className="hamburger-menu" onClick={() => handleMenuClick()}>
          <div className={`bar ${showMenu ? "change" : ""}`} />
          <div className={`bar ${showMenu ? "change" : ""}`} />
          <div className={`bar ${showMenu ? "change" : ""}`} />
        </div>
        {showMenu && (
          <div className="modal-container"
          onClick={(e) => handleOutsideClick(e)}
          >
            <div className="modal">
              <div className="submenu">
                {/* Opciones principales */}
                <Link
                  href="#"
                  className={`navbarlink3 ${
                    selectedLink === "FUECHY" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("FUECHY")}
                >
                  FUECHY
                </Link>
                {selectedLink === "FUECHY" && (
                <>
                  <Link
                    href="/ubasucac"
                    className={`navbarlink2 ${
                      selectedLink === "UBASUCAC" ? "selected highlight-fuechy" : ""
                    }`}
                    onClick={() => handleLinkClick("UBASUCAC")}
                  >
                    UBASUCAC AGUENÉ
                  </Link>
                  <Link
                    href="/chicubun"
                    className={`navbarlink2 ${
                      selectedLink === "CHICUBUN" ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick("CHICUBUN")}
                  >
                    CHICUBUN
                  </Link>
                  <Link
                    href="/quyca"
                    className={`navbarlink2 ${
                      selectedLink === "QUYCA" ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick("QUYCA")}
                  >
                    QUYCA
                  </Link>
                  <Link
                    href="/hizqa"
                    className={`navbarlink2 ${
                      selectedLink === "HIZQA" ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick("HIZQA")}
                  >
                    HIZQA SAASBISA
                  </Link>
                </>
              )}
                <Link
                  href="/about"
                  className={`navbarlink3 ${
                    selectedLink === "SOBRE EL PROYECTO" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("SOBRE EL PROYECTO")}
                >
                  SOBRE EL PROYECTO
                </Link>
                <Link
                  href="/credits"
                  className={`navbarlink3 ${
                    selectedLink === "CRÉDITOS" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("CRÉDITOS")}
                >
                  CRÉDITOS
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
