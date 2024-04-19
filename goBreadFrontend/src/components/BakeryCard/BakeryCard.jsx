import React from 'react';
import imageBakery from '../../assets/ImageBakery.png';
import { Link } from 'react-router-dom';

const BakeryCard = ({ bakery, onSelectPadaria }) => {
  const handleSelectPadaria = () => {
    onSelectPadaria(bakery.id);
    sessionStorage.setItem('selectedPadariaId', bakery.id);
    console.log(bakery.id);
  };

  return (
    <div className="card">
      <img src={imageBakery} alt="Padaria" />
      <div className="bakery-form">
        <h2>{bakery.razaoSocial}</h2>
        <p>
          <b>{bakery.endereco.rua}, {bakery.endereco.numero}</b>
        </p>
        <p className="city">{bakery.endereco.bairro}, {bakery.endereco.cidade}, {bakery.endereco.estado}</p>
        <div className="bottom">
          <div className="circleCard"></div>
          <p>Telefone: {bakery.telefone}</p>
        </div>
        <Link to="/entrega"><button onClick={handleSelectPadaria}>Ir comprar</button></Link>
      </div>
    </div>
  );
};

export default BakeryCard;
