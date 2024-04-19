import '../../scss/componentAssinatura.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imagePeople from '../../assets/pexels-mart-production-8217506-removebg 1.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import { Link } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Assinatura() {
    const history = useNavigate();

    const [tipoAssinatura, setTipoAssinatura] = useState();

    const handleEnviar = () => {
        const idCliente = sessionStorage.getItem('idCliente');

        if (!tipoAssinatura) {
            toast.error('Por favor, selecione um tipo de assinatura.');
            return;
        }

        axios.patch(`http://18.212.221.247:8080/clientes/assinatura/${idCliente}?assinatura=${tipoAssinatura}`)
            .then((response) => {
                console.log(response);
                sessionStorage.setItem('tipoAssinatura', tipoAssinatura);
                toast.success('Assinatura concluída! Aproveite todos os benefícios.');

                setTimeout(() => {
                    history('/padaria');
                }, 1500);
            })
            .catch((error) => {
                console.error('Erro ao atualizar a assinatura:', error);
                toast.error('Erro ao atualizar a assinatura!');
            });
    }

    return (
        <>
            <ToastContainer />
            <section className='containerFather'>
                <div className='containerLeft'>
                    <div class="contentNavbar">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className='contentTitle'>
                        <h1>É HORA DE ESCOLHER<br></br> SUA <span>ASSINATURA</span>.</h1>
                        <p>Pague uma mensalidade por pedidos ilimitados, com custos adicionais ao atingir um valor específico.</p>
                    </div>
                    <div className="contentImage">
                        <img src={imagePeople} alt="" />
                    </div>
                </div>

                <div className="containerRightAssinatura">
                    <div className="container">
                        <div className="contentInfoAssinatura">
                            <div className="content-circleAssinatura">
                                <Link to="/cadastroCliente"><div className="circleAssinatura">
                                    <img src={iconBack} alt="" />
                                </div></Link>
                            </div>

                            <div className="contentAssinatura">
                                <div className="container">
                                    <div class="grid-wrapper grid-col-auto">
                                        <label for="radio-card-1" class="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-1" value="basic" checked={tipoAssinatura === 'basic'} onChange={(e) => setTipoAssinatura(e.target.value)} />
                                            <div class="card-content-wrapper">
                                                <span class="check-icon"></span>
                                                <div class="card-content">
                                                    <h4>BASIC</h4>
                                                    <h5>Menor capacidade de quantidades.</h5>
                                                    <h3>R$ 249,90/ mês</h3>
                                                </div>
                                            </div>
                                        </label>

                                        <label for="radio-card-2" class="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-2" value="family" checked={tipoAssinatura === 'family'} onChange={(e) => setTipoAssinatura(e.target.value)} />
                                            <div class="card-content-wrapper">
                                                <span class="check-icon"></span>
                                                <div class="card-content">
                                                    <h4>FAMILY</h4>
                                                    <h5>Ampla capacidade de quantidades.</h5>
                                                    <h3>R$ 299,90/ mês</h3>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div class="containerAvanced">
                                <div class="contentBtn" onClick={handleEnviar}>
                                    <p>Avançar</p>
                                    <img src={setaDireita} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assinatura;