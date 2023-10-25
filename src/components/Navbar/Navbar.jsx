import Link from "next/link";
import Image from "next/image";
import Typography from "./typography";

const Navbar = () => {
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
        <div className="navbar-right">
          <div className="navbar-list">
            <span className="navbar-item">
              <div className="menu-item">
                <Link href="/ubasucac" style={{ color: "red" }}>
                  FUECHY{" "}
                  <img
                    src="/flecha.svg"
                    alt="Descripción del SVG"
                    width="16"
                    height="16"
                  />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/aguene">UBASUCAC AGUENÉ</Link>
                  </li>
                  <li>
                    <Link href="/chicubun">CHICUBUN</Link>
                  </li>
                  <li>
                    <Link href="/quyca">QUYCA</Link>
                  </li>
                </ul>
              </div>
            </span>
            <span className="navbar-item">
              <Link href="/about">SOBRE EL PROYECTO</Link>
            </span>
            <span className="navbar-item">
              <Link href="/credits">CRÉDITOS</Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
