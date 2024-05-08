import '../Login/Login.css';
import '../../styles/StyleGlobal/style-global.css';
import Logo from '../../assets/Icons/Group 16.svg';
import LogoLogin from '../../assets/logoLogin.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComerciante() {

    const navigation = useNavigate(); 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    console.log(email);
    console.log(senha);

    const submeter = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            senha: senha,
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://52.20.221.176/api/comercios/login', data, config)
            .then((response) => {
                if (response.status == 200 && response.data?.token) {
                    sessionStorage.setItem('authToken', response.data.token);
                    toast.success("Login realizado com sucesso!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    console.log(response.data);
                    console.log(response.data.token);

                    setTimeout(() => {
                        navigation('/portalComerciante');
                    }, 1000);
                } else {
                    throw new Error('Ops! Ocorreu um erro interno.');
                }
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <ToastContainer />
            <header className='headerLogin'>
                <section className='container'>
                    <div className='contentLogin'>
                        <Link to="/"><img src={Logo} alt="" /></Link>
                    </div>
                </section>
            </header>

            <main>
                <section className="containerMainLogin">
                    <div className="container">
                        <div className="containerContentLogin">
                            <div className="containerLeftLogin">
                                <img src={LogoLogin} alt="" />
                            </div>
                            <div className="containerRightLogin">
                                <h1>Entrar</h1>
                                <div className="titleLogin">
                                    <h3><span>Acesse</span> seu portal de compras.</h3>
                                </div>
                                <form onSubmit={submeter}>
                                    <div className="form-inputsLogin">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Senha"
                                            name="senha"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                </form>
                                <div className="accessLogin">
                                    <button onClick={submeter}>Entrar</button>
                                    <p className='click-here'>Não tem cadastro? <Link to='/destinoCadastro'><a href='/' className='click-link-register'>Clique aqui</a></Link> para fazer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default LoginComerciante;