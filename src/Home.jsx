// Home.js
import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <img src="https://static.vecteezy.com/ti/vetor-gratis/t2/15743706-design-de-logotipo-de-carta-epi-na-ilustracao-logotipoial-desenhos-de-caligrafia-para-logotipo-poster-convite-etc-vetor.jpg" alt="Logo" className="logo" />
      <div>
        <Link to="/epi" className="button">
          <button>EPI</button>
        </Link>
        <Link to="/funcionario" className="button">
          <button>FUNCIONÁRIOS</button>
        </Link>
        <Link to="/registro" className="button">
          <button>REGISTRO</button>
        </Link>
        <Link to="/historico" className="button">
          <button>HISTÓRICO</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
