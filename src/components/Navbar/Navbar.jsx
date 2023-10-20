import Link from "next/link";
import Image from "next/image";
import Typography from "./typography";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link href="/home">
              <div className="navbar-logo">
                <Image src="/icons/logo.svg" alt="Logo" width={53} height={49} />
                <Typography text="MICA LAB" sx={"hola"} />
              </div>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about">FUECHY</Link>
          </li>
          <li className="navbar-item">
            <Link href="/about">SOBRE EL PROYECTO</Link>
          </li>
          <li className="navbar-item">
            <Link href="/credits">CRÉDITOS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
