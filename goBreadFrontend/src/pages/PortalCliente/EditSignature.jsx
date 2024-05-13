import '../../styles/StyleGlobal/style-global.css';
import './EditSignature.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import { useNavigate } from 'react-router-dom';
import comprarMais from '../../assets/Icons/adicionar-ao-carrinho 1.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import api from '../../api/api';

function EditSignature() {
    const history = useNavigate();
    const [tipoAssinatura, setTipoAssinatura] = useState();

    const handleEnviar = () => {
        const idCliente = sessionStorage.getItem('idCliente');

        if (!tipoAssinatura) {
            toast.error('Por favor, selecione um tipo de assinatura.');
            return;
        }

        api.patch(`/clientes/assinatura/${idCliente}?assinatura=${tipoAssinatura}`)
            .then((response) => {
                console.log(response);
                sessionStorage.setItem('tipoAssinatura', tipoAssinatura);
                toast.success('Assinatura concluída! Aproveite todos os benefícios.');
            })
            .catch((error) => {
                console.error('Erro ao atualizar a assinatura:', error);
                toast.error('Erro ao atualizar a assinatura!');
            });
    }

    return (
        <>
            <ToastContainer />
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access' onClick={() => history('/portalCliente')}><img src={products} alt="" /></button>
                            <button className='btn-access'><img src={editar} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dados')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/padaria')}><img src={comprarMais} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='father-user-info-assinatura'>
                <section className='user-info-container-assinatura'>
                    <div className="left-assinatura">
                        <h1>Você tem a flexibilidade de modificar sua assinatura a qualquer momento.</h1>
                        <div className="title-pequenos">
                            <p>Manter-se atualizado é fundamental.</p>
                        </div>
                        <div className="title-pequenos">
                            <p>A modificação da assinatura é simples e pode ser feita por aqui.</p>
                        </div>
                        <div className="title-pequenos">
                            <p>Estamos comprometidos em fornecer uma experiência flexível e conveniente.</p>
                        </div>
                    </div>
                    <div className='user-info-form-assinatura'>
                        <div className="center-assinatira">
                            <div class="grid-wrapper grid-col-auto grid-assinatura">
                                <label for="radio-card-1" class="radio-card">
                                    <input type="radio" name="radio-card" id="radio-card-1" value="basic" checked={tipoAssinatura === 'basic'} onChange={(e) => setTipoAssinatura(e.target.value)} />
                                    <div class="card-content-wrapper">
                                        <span class="check-icon"></span>
                                        <div class="card-content">
                                            <h4>BASIC</h4>
                                            <h5>Menor capacidade de quantidades.</h5>
                                            <h3>R$249,90/ mês</h3>
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
                            <div class="containerAvanced-assinatura">
                                <div class="contentBtn" onClick={handleEnviar}>
                                    <p>Atualizar</p>
                                    <img src={setaDireita} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EditSignature;