import React from 'react';
import logoImage from '../../assets/images/icons/worldwide.svg'
import './style.css';

function PageHeader() {
  return (
      <>
        <header className="top-bar">
            <div className="texto">
                <h1>Api-ClimaTempo</h1>
            </div>
            <div className="imagem">
                <img src={logoImage} alt="Mundo"/>
            </div>
        </header>
      </>
  );
}

export default PageHeader;
