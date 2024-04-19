import '../../styles/StyleGlobal/style-global.css';
import './DadosComerciante.css';
import products from '../../assets/Icons/products.svg';
import relatorio from '../../assets/Icons/relatorio-de-lucro 1.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import deletarUsuario from '../../assets/Icons/deletar-usuario 1.jpg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

function DadosComerciante() {

    const history = useNavigate();

    const [comercianteData, setComercianteData] = useState({
        razaoSocial: '',
        responsavel: '',
        cnpj: '',
        email: '',
        telefone: '',
        tipo: '',
        endereco: {
            cep: '',
            numero: '',
            complemento: '',
        },
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function fetchComercianteData() {
            try {
                const idPadaria = sessionStorage.getItem('selectedPadariaId');
                const response = await axios.get(`http://18.212.221.247:8080/comercios/${idPadaria}`);
                setComercianteData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchComercianteData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            const idPadaria = sessionStorage.getItem('selectedPadariaId');
            await axios.put(`http://18.212.221.247:8080/comercios/${idPadaria}`, comercianteData);
            toast.success('Informações atualizadas com sucesso!');
            setEditMode(false);
        } catch (error) {
            console.error('Erro ao salvar as informações:', error);
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setComercianteData({
            ...comercianteData,
            [name]: value,
        });
    };

    const idComerciante = sessionStorage.getItem('idComerciante');
    console.log(idComerciante);

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
                const idComerciante = sessionStorage.getItem('idComerciante');
                await axios.delete(`http://18.212.221.247:8080/comercios/${idComerciante}`);
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
                            <button className='btn-access' onClick={() => history('/portalComerciante')}><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/relatorios')}><img src={relatorio} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dadosComerciante')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='father-user-info'>
                <section className='user-info-container'>
                    <div className='user-info-form'>
                        <h1>Minhas informações</h1>
                        <label htmlFor="razaoSocial">Nome Padaria</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Razão Social'
                            name='razaoSocial'
                            value={comercianteData.razaoSocial}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">Responsável</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Responsável'
                            name='responsavel'
                            value={comercianteData.responsavel}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">CNPJ</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CNPJ'
                            name='cnpj'
                            value={comercianteData.cnpj}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">Email</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Email'
                            name='email'
                            value={comercianteData.email}
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

                    <div className="endereco">
                        <label htmlFor="razaoSocial">Telefone</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Telefone'
                            name='telefone'
                            value={comercianteData.telefone}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">Tipo de cliente</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Tipo'
                            name='tipo'
                            value={comercianteData.tipo}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">CEP</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CEP'
                            name='cep'
                            value={comercianteData.endereco.cep}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">Endereço</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Número'
                            name='numero'
                            value={comercianteData.endereco.numero}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="razaoSocial">Complemento</label>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Complemento'
                            name='complemento'
                            value={comercianteData.endereco.complemento}
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

export default DadosComerciante;