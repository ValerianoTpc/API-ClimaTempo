import React from 'react';
import localImage from '../../assets/images/icons/local.svg'
import './style.css';

function ClimateItem(props) {
  return (
       <div className="card">
           <div className="local">
               <img src={localImage} alt=""/>
               <h1>{props.value.name} - {props.value.state}</h1>
           </div>
           <div className="data">
               <h3>Dom | 12.08.2019</h3>
               <h1>23º/12º</h1>
           </div>
           <div className="periodo">
                <div className="manha">
                    <h3>Manhã</h3>
                    <h1>18°C</h1>
                </div>
                <div className="tarde">
                    <h3>Tarde</h3>
                    <h1>28°C</h1>
                </div>
                <div className="noite">
                    <h3>Noite</h3>
                    <h1>20°C</h1>
                </div>
           </div>
       </div>
  );
}

export default ClimateItem;
