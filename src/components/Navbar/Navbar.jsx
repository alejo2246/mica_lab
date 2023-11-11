import Link from "next/link";
import Image from "next/image";
import Typography from "./Typography";
import { useState } from "react";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    console.log("Menu clicked");
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/home">
            <div className="navbar-logo">
              <Image src="/icons/logo.svg" alt="Logo" width={53} height={49} />
            </div>
          </Link>
          <Typography text="MICA LAB" sx={"hola"} />
        </div>
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
          <div className="modal-container">
            <div className="modal">
              <div className="submenu">
                {/* Opciones principales */}
                <Link
                  href="#"
                  className={`navbar-link ${
                    selectedLink === "FUECHY" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("FUECHY")}
                >
                  FUECHY
                </Link>
                <Link
                  href="/about"
                  className={`navbar-link ${
                    selectedLink === "SOBRE EL PROYECTO" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("SOBRE EL PROYECTO")}
                >
                  SOBRE EL PROYECTO
                </Link>
                <Link
                  href="/credits"
                  className={`navbar-link ${
                    selectedLink === "CRÉDITOS" ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick("CRÉDITOS")}
                >
                  CRÉDITOS
                </Link>

                {/* Opciones secundarias */}
                {selectedLink === "FUECHY" && (
                  <>
                    <Link
                      href="/ubasucac"
                      className={`navbar-link ${
                        selectedLink === "UBASUCAC" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("UBASUCAC")}
                    >
                      UBASUCAC AGUENÉ
                    </Link>
                    <Link
                      href="/chicubun"
                      className={`navbar-link ${
                        selectedLink === "CHICUBUN" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("CHICUBUN")}
                    >
                      CHICUBUN
                    </Link>
                    <Link
                      href="/quyca"
                      className={`navbar-link ${
                        selectedLink === "QUYCA" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("QUYCA")}
                    >
                      QUYCA
                    </Link>
                    <Link
                      href="/hizqa"
                      className={`navbar-link ${
                        selectedLink === "HIZQA" ? "selected" : ""
                      }`}
                      onClick={() => handleLinkClick("HIZQA")}
                    >
                      HIZQA SAASBISA
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
