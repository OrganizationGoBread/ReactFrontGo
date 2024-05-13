import './Padaria.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/image.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BakeryCard from '../../components/BakeryCard/BakeryCard';

import api from '../../api/api';

function Padaria() {

    const [padarias, setPadarias] = useState([]);
    const [selectedPadariaId, setSelectedPadariaId] = useState();

    useEffect(() => {
        const bairroAtual = sessionStorage.getItem('bairro');
      
        if (bairroAtual) {
          api.get('/comercios/bairro', {
            params: {
              bairro: bairroAtual
            }
          })
          .then(response => {
            setPadarias(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Erro ao buscar padarias por bairro:', error);
          });
        }
      }, []);

      const valorDaSession = sessionStorage.getItem('bairro');
      
    return (
        <>
            <main>
                <section className="pai">
                    <div className="left-container2">
                        <div className="navbar-content2">
                            <img src={logoWhite} alt="logo" className="logo" />
                        </div>
                        <div className="contentTitle">
                            <h1>É HORA DE ESCOLHER<br></br> SUA <span>PADARIA</span>.</h1>
                        </div>
                        <div className="image-content2">
                            <img src={imageEntrega} alt="" />
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="container">
                            <div className="container-padaria">
                                <div className="information-card">
                                    <div className="circle-content">
                                        <div className="circle-back">
                                            <Link to="/assinatura"><img src={iconBack} alt="" /></Link>
                                        </div>
                                    </div>

                                    <div className="title-content">
                                        <h1>Padarias perto de mim:</h1>
                                        <p>Resultado para bairro, <b>{valorDaSession}</b></p>
                                    </div>
                                </div>

                                <div className="content-card">
                                    <div className="content-card">
                                        {padarias.map((padaria, index) => (
                                            <BakeryCard 
                                            key={index} 
                                            bakery={padaria} 
                                            onSelectPadaria={setSelectedPadariaId}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Padaria;