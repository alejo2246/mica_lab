import Link from "next/link";
import Image from "next/image";
import Typography from "./typography";
// import theme from "@/pages/theme";
const Navbar = () => {
  // const { colors, fonts, fontSizes } = theme;
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src="/icons/logo.svg" alt="Logo" width={53} height={49} />
              <Typography text="MICA LAB" sx={"hola"} />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">SOBRE EL PROYECTO</Link>
        </li>
        <li>
          <Link href="/credits">CRÉDITOS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
