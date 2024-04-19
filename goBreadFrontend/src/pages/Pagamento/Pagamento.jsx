import '../../scss/Pagamento/componentIconInput.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imagePhonePagamento from '../../assets/iPhone 12 Pro (Wooden Hands).png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import qrcode from '../../assets/qrcodePix.png';
import iconCarteira from '../../assets/Icons/card.svg';
import iconCalendario from '../../assets/Icons/calendario.svg';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function Pagamento() {

    useEffect(() => {
        const tipoAssinatura = sessionStorage.getItem('tipoAssinatura');

        if (tipoAssinatura === 'basic' || tipoAssinatura === 'family') {
            const valor = tipoAssinatura === 'basic' ? 249 : 299;
            
            const valorElement = document.querySelector('.dados-pix h4:nth-child(1)');
            if (valorElement) {
                valorElement.textContent = `Valor: R$ ${valor},99`;
            }

            const tipoElement = document.querySelector('.dados-pix h4:nth-child(2)');
            if (tipoElement) {
                tipoElement.textContent = `Tipo assinatura: ${tipoAssinatura.charAt(0).toUpperCase() + tipoAssinatura.slice(1)}`;
            }
        }
    });

    return (
        <>
            <section className="parent-container">
                <div className="left-container">
                    <div className="navbar-content">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className="image-content">
                        <img src={imagePhonePagamento} alt="" />
                    </div>
                </div>

                <div className="right-container">
                    <div className="container">
                        <div className="content-c">
                            <div className="info-content">
                                <div className="circle-content">
                                    <div className="circle">
                                        <Link to="/entrega"><img src={iconBack} alt="" /></Link>
                                    </div>
                                </div>

                                <div className="title-content">
                                    <h1>Faça seu pagamento</h1>
                                    <p>Escolha a melhor forma de fazer sua assinatura.</p>
                                </div>
                            </div>

                            <div className="containerForm2">
                                <img src={qrcode} alt="" />
                                <div className="dados-pix">
                                    <h4>Valor:</h4>
                                    <h4>Tipo assinatura:</h4>
                                    <h4>Contrato - Mensal</h4>
                                </div>
                            </div>

                            <div className="advanced-container2">
                            <Link to="/portalCliente"><div className="button-content">
                                    <p>Avançar</p>
                                    <img src={setaDireita} alt="" />
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Pagamento;