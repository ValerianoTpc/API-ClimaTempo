import React , { useState , useEffect } from 'react' ;   
import './App.css';

import ClimateItem from './components/climateItem';
import PageHeader from './components/pageHeader';

function App() {   
  const [clima,setClima] = useState([]);
  useEffect(() => {
    async function getData(){
    const response = await fetch('api/v1/locale/city/3477?token=SEU-TOKEN');
    const data = await response.json();
    setClima(data);
    } 
    getData();
  },[clima.id,setClima]);
  

  return (
      <div className="page">
        <PageHeader></PageHeader>    

        <section className="content">
          <div className="menu">
            <button > HOJE </button>
            <button > AMANHÃ </button>
            <button > SEMANA </button>
            <button > 15 DIAS </button>
          </div>

          <div className="corpo">
            <ClimateItem key={clima.id} value={clima}></ClimateItem>
          </div>
      
        </section>
      </div>

  );
}

export default App;
