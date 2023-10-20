import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const Credits = () => {
  return (
    <div>
      <Navbar />
      <style jsx>{`
      `}</style>
      <div className="credits-container">
      <h2 className="section-title">Créditos</h2>
        <div className="section">
          <h2 className="credit1">Investigación:</h2>
          <p className="credtuser">Daniela Hernández Castiblanco</p>
          </div>
          <div className="section">
          <h2 className="credit1">Gestión y manejo web:</h2>
          <p className="credtuser"> Yaneth Duarte Benavides</p>
          </div>
          <div className="section">
          <h2 className="credit1">Ilustración:</h2>
          <p className="credtuser">Margarita Prada Arenas</p>
          </div>

        <div className="section">
          <h2 className="credit1">Diseño Web:</h2>
          <p className="credtuser">Camila Gómez Alfonso</p>
        </div>
        <div className="section">
          <h2 className="credit1">Desarrollo web:</h2>
          <p className="credtuser">Alejandro Padilla</p></div>
          <div className="section">
          <h2 className="credit1">Diseño sonoro:</h2>
          <p className="credtuser">Mariana Duque Ramírez</p>
        </div>
        <div className="section">
          <h2 className="credit1">Mapeo Colectivo:</h2>
          <p className="credtuser">
            Luis Jorge Chisaba Nivia, Pedro Antonio Chisaba Rico, José Antonio Chisaba Rico, Victor Alfonso Chisaba Bayona, Cleotilde Nagles de Rozo, Nancy Patricia Rozo Nagles, Yaneth Duarte Benavides, Julia Ospina Pacheco, Milena Ospina, Fernanda Casas Pérez, Leonardo Quintero López, Flor María Nivia, Juan Diego Bonilla, Noralba Duarte Benadives, Ignacio Rozo Ospina y Jonathan Steff Sanchez Rubiano.
          </p>
        </div>
        <div className="section">
          <h2 className="credit1">Pertenecientes a los clanes<br /> originarios:</h2>
          <p className="credtuser">Mususu-Neuque, Nivia, Yopasa, Cabiativa, Chisaba y Caita</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
