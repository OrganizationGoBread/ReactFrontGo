import '../../styles/StyleGlobal/style-global.css';
import './PersonalData.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import comprarMais from '../../assets/Icons/adicionar-ao-carrinho 1.svg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

function PersonalData() {

    const history = useNavigate();

    const [clienteData, setClienteData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        tipo: '',
        endereco: {
            cep: '',
            numero: '',
            complemento: '',
        },
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function fetchClienteData() {
            try {
                const idCliente = sessionStorage.getItem('idCliente');
                const response = await axios.get(`http://18.212.221.247:8080/clientes/${idCliente}`);
                setClienteData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchClienteData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            const idCliente = sessionStorage.getItem('idCliente');
            await axios.put(`http://18.212.221.247:8080/clientes/${idCliente}`, clienteData);
            toast.success('Informações atualizadas com sucesso!');
            setEditMode(false);
        } catch (error) {
            console.error('Erro ao salvar as informações:', error);
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClienteData({
            ...clienteData,
            [name]: value,
        });
    };

    const deletarConta = async () => {
        const confirmacao = await Swal.fire({
            title: 'Tem certeza?',
            text: 'Você realmente quer cancelar sua conta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacao.isConfirmed) {
            try {
                const idCliente = sessionStorage.getItem('idCliente');
                await axios.delete(`http://18.212.221.247:8080/clientes/${idCliente}`);
                toast.success('Conta deletada!');

                setTimeout(() => {
                    history('/');
                }, 1500);
            } catch (error) {
                console.error('Erro ao salvar as informações:', error);
            }
        }
    }


    return (
        <>
            <ToastContainer />
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access' onClick={() => history('/portalCliente')}><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/editarAssinatura')}><img src={editar} alt="" /></button>
                            <button className='btn-access'><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/padaria')}><img src={comprarMais} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='father-user-info'>
                <section className='user-info-container'>
                    <div className='user-info-form'>
                        <h1>Minhas informações</h1>
                        <label htmlFor="cpf">CPF</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CPF'
                            name='cpf'
                            value={clienteData.cpf}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nome">Nome</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Nome'
                            name='nome'
                            value={clienteData.nome}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Email'
                            name='email'
                            value={clienteData.email}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Telefone'
                            name='telefone'
                            value={clienteData.telefone}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <div className="user-actions">
                            {!editMode ? (
                                <button className='btn-actions-editar' onClick={handleEdit}>
                                    Editar
                                </button>
                            ) : (
                                <>
                                    <button className='btn-actions-salvar' onClick={handleSave}>
                                        Salvar
                                    </button>
                                    <button className='btn-actions-cancelar' onClick={() => setEditMode(false)}>
                                        Cancelar
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="user-info-form2">
                        <label htmlFor="tipo">Tipo de cliente</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Tipo'
                            name='tipo'
                            value={clienteData.tipo}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="cep">Endereço</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CEP'
                            name='cep'
                            value={clienteData.endereco.cep}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="numero">Número</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Número'
                            name='numero'
                            value={clienteData.endereco.numero}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="complemento">Complemento</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Complemento'
                            name='complemento'
                            value={clienteData.endereco.complemento}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />

                        <div className="user-actions">
                            <button className='btn-actions-editar' onClick={deletarConta}>Deletar conta</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PersonalData;