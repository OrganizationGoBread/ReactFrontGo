import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import '../../styles/StyleGlobal/style-global.css';
import './CadastroCliente.css';

import buttonBack from '../../assets/Icons/flecha 1.svg';
import olho from '../../assets/Icons/olho.png';
import olhoFechado from '../../assets/Icons/olhoFechado.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CadastroCliente() {
    const history = useNavigate();

    const validationRegister = yup.object().shape({
        cpf: yup.string().required("O CPF é obrigatório."),
        nome: yup.string().required("O NOME é obrigatório.").min(3, "O NOME deve ter no mínimo 3 caracteres.").max(255, "O NOME deve ter no máximo 255 caracteres."),
        email: yup.string().required("O EMAIL é obrigatório.").max(255, "O EMAIL deve ter no máximo 255 caracteres."),
        telefone: yup.string().required("O TELEFONE é obrigatório.").min(11, "O TELEFONE deve ter no mínimo 11 caracteres.").max(11, "O TELEFONE deve ter no máximo 11 caracteres."),
        senha: yup.string().required("A SENHA é obrigatória.").min(8, "A SENHA deve ter no mínimo 8 caracteres.").max(16, "A SENHA deve ter no máximo 16 caracteres."),
        cep: yup.string().required("O CEP é obrigatório."),
        numero: yup.string().required("O NÚMERO é obrigatório.").min(1, "O NÚMERO deve ter no mínimo 1 caracter."),
        complemento: yup.string().required("O COMPLEMENTO é obrigatório.").min(3, "O COMPLEMENTO deve ter no mínimo 3 caracteres.").max(255, "O COMPLEMENTO deve ter no máximo 255 caracteres."),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationRegister)
    });

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const [formData, setFormData] = useState({
        cpf: '',
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        tipo: 'cliente',
        assinatura: 'basic',
        endereco: {
            cep: '',
            numero: '',
            complemento: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cep' || name === 'numero' || name === 'complemento') {
            setFormData((prevData) => ({
                ...prevData,
                endereco: {
                    ...prevData.endereco,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const isFormValid = () => {
        return (
            formData.cpf.trim() !== '' &&
            formData.nome.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.telefone.trim() !== ''
        );
    };

    const isFormValidPassword = () => {
        return (
            formData.senha && formData.senha.trim() !== ''
        );
    };

    const isFormValidEndereco = () => {
        return (
            formData.cep && formData.cep.trim() !== '' &&
            formData.numero && formData.numero.trim() !== '' &&
            formData.complemento && formData.complemento.trim() !== ''
        );
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const addRegister = async (e) => {
        axios.post('http://52.20.221.176/api/clientes/cadastrar', formData, config)
            .then((response) => {
                if (response.status == 201 && response.data?.id) {
                    sessionStorage.setItem('idCliente', response.data.id);
                    sessionStorage.setItem('bairro', response.data.endereco.bairro);
                    console.log(response);
                    console.log(formData);
                    toast.success("Cadastro realizado!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })

                    setTimeout(() => {
                        history('/assinatura');
                    }, 2000);
                }
            }).catch((error) => {
                console.log(error);
                console.log(formData);
                toast.error("Erro ao cadastrar!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            })
    };

    function exibirSenha() {
        let iptMostrarSenha = document.getElementById('senha');
        let iptConfirmarSenha = document.getElementById('confirmarSenha');
        let exibirSenha = document.getElementById('btn-ver-senha');

        if (iptMostrarSenha.type === 'password' && iptConfirmarSenha.type === 'password') {
            iptMostrarSenha.setAttribute('type', 'text');
            iptConfirmarSenha.setAttribute('type', 'text');
            exibirSenha.src = olhoFechado;
        } else {
            iptMostrarSenha.setAttribute('type', 'password');
            iptConfirmarSenha.setAttribute('type', 'password');
            exibirSenha.src = olho;
        }
    }

    return (
        <>
            <ToastContainer />
            <section className='container-form'>
                <div className='centered-content'>
                    <div className="progress" />

                    <div className="centered-content">
                        <div className="pagination">
                            <h1 className={currentStep === 1 ? 'active' : ''}>01</h1>
                            <h1 className={currentStep === 2 ? 'active' : ''}>02</h1>
                            <h1 className={currentStep === 3 ? 'active' : ''}>03</h1>
                        </div>
                    </div>

                    {currentStep === 1 && (
                        <>
                            <form onSubmit={handleSubmit(addRegister)}>
                                <div className="titles">
                                    <h1>Informações do cliente</h1>
                                    <h3>Preciso que informe algumas informações.</h3>
                                </div>

                                <div className="form-inputs">
                                    <input
                                        type="text"
                                        name="cpf" {...register("cpf")}
                                        placeholder="CPF"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                    />
                                    <p className='error-message'>{errors.cpf?.message}</p>
                                    <input
                                        type="text"
                                        name="nome" {...register("nome")}
                                        placeholder="Nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                    />
                                    <p className='error-message'>{errors.nome?.message}</p>
                                    <input
                                        type="email"
                                        name="email" {...register("email")}
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <p className='error-message'>{errors.email?.message}</p>
                                    <input
                                        type="text"
                                        name="telefone" {...register("telefone")}
                                        placeholder="Número (Contato)"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                    />
                                    <p className='error-message'>{errors.telefone?.message}</p>
                                </div>

                                <div className="access">
                                    <Link to="/"><img src={buttonBack} alt="" /></Link>
                                    <button onClick={() => {
                                        if (isFormValid()) {
                                            nextStep();
                                        }
                                    }}>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <form onSubmit={handleSubmit(addRegister)}>
                                <div className="titles">
                                    <h1>Crie sua senha</h1>
                                    <h3>Faça o cadastro da sua senha, e confirme.</h3>
                                </div>
                                <div className="form-inputs">
                                    <input
                                        type="password"
                                        name="senha" {...register("senha")}
                                        placeholder="Senha"
                                        id='senha'
                                        value={formData.senha}
                                        onChange={handleChange}
                                    />
                                    <img src={olho} alt="" id='btn-ver-senha' onClick={exibirSenha} />
                                    <p className='error-message'>{errors.senha?.message}</p>
                                    <input
                                        type="password"
                                        name="confirmarSenha" {...register("confirmarSenha")}
                                        id='confirmarSenha'
                                        placeholder="Confirme a senha"
                                    />
                                    <p className='error-message' id="senhaDiferenteError" style={{ color: 'red', display: 'none' }}>As senhas são diferentes.</p>
                                </div>
                                <div className="access">
                                    <img src={buttonBack} alt="" onClick={prevStep} />
                                    <button onClick={() => {
                                        const senha = formData.senha;
                                        const confirmarSenha = document.getElementById('confirmarSenha').value;;

                                        if (senha === confirmarSenha) {
                                            if (isFormValidPassword()) {
                                                nextStep();
                                            }
                                        } else {
                                            document.getElementById('senhaDiferenteError').style.display = 'block';
                                        }
                                    }}>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <form onSubmit={handleSubmit(addRegister)}>
                                <div className="titles">
                                    <h1>Seu endereço</h1>
                                    <h3>Preencha as informações do seu endereço.</h3>
                                </div>
                                <div className="form-inputs">
                                    <input
                                        type="text"
                                        placeholder="CEP"
                                        name="cep" {...register("cep")}
                                        value={formData.cep}
                                        onChange={handleChange}
                                    />
                                    <p className='error-message'>{errors.cep?.message}</p>
                                    <div className="fieldBetween">
                                        <input
                                            type="text"
                                            name="numero" {...register("numero")}
                                            placeholder="Número"
                                            value={formData.numero}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="text"
                                            name="complemento" {...register("complemento")}
                                            placeholder="Complemento"
                                            value={formData.complemento}
                                            onChange={handleChange}
                                        />

                                    </div>
                                    <p className='error-message'>{errors.numero?.message}</p>
                                    <p className='error-message'>{errors.complemento?.message}</p>
                                </div>
                                <div className="access">
                                    <img src={buttonBack} alt="" onClick={prevStep} />
                                    <button onClick={() => {
                                        if (isFormValidEndereco()) {
                                            nextStep();
                                        }
                                    }}>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default CadastroCliente;
