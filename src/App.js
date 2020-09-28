import React from 'react';
import './App.css';
import ClimateItem from './components/climateItem';
import PageHeader from './components/pageHeader';

function App() {
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
            <ClimateItem></ClimateItem>
          </div>
      
        </section>

           
      </div>

  );
}

export default App;
