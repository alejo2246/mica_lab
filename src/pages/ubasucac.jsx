import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from 'react';

const Ubasucac = () => {
    const [indicatorOffset, setIndicatorOffset] = useState(0);
  
    const handleMouseEnter = (index) => {
      document.getElementById(`imagen${index}`).style.fill = 'red';
      document.getElementById(`fecha${index}`).style.color = 'red';
      document.getElementById(`fecha${index}`).style.fontSize = '40px';
      document.getElementById(`imagen${index}`).src = '/ubasucac/union2.svg';
  
      const newIndicatorOffset = (index - 1) * 5.5;
      setIndicatorOffset(newIndicatorOffset);
    };
  
    const handleMouseLeave = (index) => {
      document.getElementById(`imagen${index}`).style.fill = 'black';
      document.getElementById(`fecha${index}`).style.color = 'black';
      document.getElementById(`fecha${index}`).style.fontSize = '1em';
      document.getElementById(`imagen${index}`).src = '/ubasucac/union.svg';
  
      setIndicatorOffset(0);
    };
  
    useEffect(() => {
      for (let i = 1; i <= 6; i++) {
        const imagen = document.getElementById(`imagen${i}`);
        imagen.addEventListener('mouseenter', () => handleMouseEnter(i));
        imagen.addEventListener('mouseleave', () => handleMouseLeave(i));
      }
  
      return () => {
        for (let i = 1; i <= 6; i++) {
          const imagen = document.getElementById(`imagen${i}`);
          imagen.removeEventListener('mouseenter', () => handleMouseEnter(i));
          imagen.removeEventListener('mouseleave', () => handleMouseLeave(i));
        }
      };
    }, []);

  return (
    <div>
      <Navbar />
      <div className="chicubun-container">
        <h1 className="chicubun-title">UBASUCAC AGUENÉ</h1>
        <h2 className="chicubun-subtitle">de click sobre la línea de tiempo o <br />sobre para visualizar la info cartográfica</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', position: 'relative', marginBottom: '10%' }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ marginLeft: '10px', display: 'flex' }}>
            <div>
              <img
                src="/ubasucac/Lineadetiempo.svg"
                alt="Imagen 1"
              />
              <img id="indicadorTiempo" src="/ubasucac/indicadordetiempo.svg" alt="Indicador de Tiempo" style={{ position: 'absolute', marginLeft: '-1%', marginTop: `${indicatorOffset}%` }} />
            </div>
            <div className="fechassub">
              <p id="fecha1">1538 - 1650</p>
              <p id="fecha2">1650 - 1875</p>
              <p id="fecha3">1875 - 1925</p>
              <p id="fecha4">1950 - 1967</p>
              <p id="fecha5">1975 - 1984</p>
              <p id="fecha6">1989 - 2023</p>
            </div>
          </div>
          <div>
            <img src="/ubasucac/espiral.svg" style={{ width: '100%', maxWidth: '724px', height: 'auto', marginLeft: '10%' }} alt="Imagen de fondo" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '30%', marginTop: '-30%' }} alt="Imagen12" id="imagen1" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '37%', marginTop: '-39%' }} alt="Imagen13" id="imagen2" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '21.8%', marginTop: '-35%' }} alt="Imagen14" id="imagen3" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '41.5%', marginTop: '-24%' }} alt="Imagen15" id="imagen4" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '27%', marginTop: '-45.5%' }} alt="Imagen16" id="imagen5" />
            <img className="imageunion" src="/ubasucac/union.svg" style={{ position: 'absolute', width: '100%', maxWidth: '29px', height: 'auto', marginLeft: '26%', marginTop: '-14%' }} alt="Imagen17" id="imagen6" />
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', width: '100%', paddingTop: '60%' }}>
  <img src="/ubasucac/union3.svg" style={{ position: 'absolute', top: 0, left: '-0.6%', width: '100%', height: '100%', zIndex: 1 }} />
  <img src="/ubasucac/vector.svg" style={{ position: 'absolute', top: '-0.2%', left: 0, width: '98%', height: '100%', zIndex: 2 }} />
  
  <div style={{ position: 'absolute', bottom: '23%', left: '4%', width: '98%', height: '100%',maxHeight:'500px', zIndex: 3 }}>
    <img src="/ubasucac/Rectangle 10.png" style={{height:'100%'}}></img>
  </div>

  <img src="/ubasucac/close.svg" style={{ position: 'absolute', zIndex: 4, top: '10%', right:'3%'}}/>
  <img src="/ubasucac/Layerleft.svg" style={{ position: 'absolute', zIndex: 4, top: '50%', left:'4%'}}/>
  <img src="/ubasucac/Layerright.svg" style={{ position: 'absolute', zIndex: 4, top: '50%', right:'7%'}}/>
  <img src="/ubasucac/Group 1.svg" style={{ position: 'absolute', zIndex: 4, bottom:'7%', left:'3%'}}/>


  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', zIndex: 4, bottom: '7%', right: '5%'}}>
    <img src="/ubasucac/download.svg"  />
    <p className="textcontainer" style={{ marginLeft: '10px' }}>Descarga la imagen acá</p>
  </div>
</div>





    </div>
  );
};

export default Ubasucac;
