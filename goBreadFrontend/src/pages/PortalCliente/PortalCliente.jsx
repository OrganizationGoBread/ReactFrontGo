import '../../styles/StyleGlobal/style-global.css';
import './PortalCliente.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import comprarMais from '../../assets/Icons/adicionar-ao-carrinho 1.svg'
import sair from '../../assets/Icons/sair.svg';
import lampada from '../../assets/Icons/lampada.svg';
import deletar from '../../assets/Icons/deletar.svg';
import buttonBack from '../../assets/Icons/flecha 1.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function PortalCliente() {
    const history = useNavigate();

    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCliente() {
            try {
                const idCliente = sessionStorage.getItem('idCliente');
                const response = await axios.get(`http://18.212.221.247:8080/clientes/${idCliente}`);
                setCliente(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchCliente();
    }, []);

    async function handleDeletePedido(pedidoId) {
        try {
            const confirmed = await showConfirmation();
            if (confirmed) {
                await axios.delete(`http://18.212.221.247:8080/pedidos/${pedidoId}`);
                setCliente(prevCliente => ({
                    ...prevCliente,
                    pedidos: prevCliente.pedidos.filter(pedido => pedido.id !== pedidoId)
                }));
    
                const revertConfirmed = await showRevertConfirmation();
                if (revertConfirmed) {
                    await axios.post(`http://18.212.221.247:8080/pedidos/reverter-delete`, { pedidoId });
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Erro ao excluir pedido:', error);
        }
    }
    
    const showConfirmation = async () => {
        const result = await Swal.fire({
            title: 'Tem certeza?',
            text: 'Você está prestes a excluir este pedido.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        });
    
        return result.isConfirmed;
    };
    
    const showRevertConfirmation = async () => {
        const revertResult = await Swal.fire({
            title: 'Deseja reverter o delete?',
            text: 'Esta ação não poderá ser desfeita.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, reverter!',
            cancelButtonText: 'Cancelar'
        });
    
        return revertResult.isConfirmed;
    };

    function renderTable() {
        if (loading) {
            return <p>Carregando...</p>;
        }

        if (!cliente) {
            return <p>Nenhum cliente encontrado.</p>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nº Pedido</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Dia da Entrega</th>
                        <th>Horário</th>
                        <th>Padaria</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {cliente.pedidos.map((pedido, indexPedido) => (
                        pedido.itensPedido.map((item, indexItem) => (
                            <tr key={`${pedido.id}-${indexItem}`}>
                                <td>{pedido.id}</td>
                                <td>{item.produto.nome}</td>
                                <td>{item.quantidade}</td>
                                <td>{pedido.diaEntrega}</td>
                                <td>{pedido.horarioEntrega}</td>
                                <td>{pedido.comercio.razaoSocial}</td>
                                <td>
                                    <button className="btn-deletar" onClick={() => handleDeletePedido(pedido.id)}><img src={deletar} alt="" /></button>
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        );
    }

    async function handleRevertAllDeleted() {
        try {
            const confirmed = await showRevertAllConfirmation();
            if (confirmed) {
                const deletedPedidoIds = cliente.pedidos.map(pedido => pedido.id);
                await axios.post('http://18.212.221.247:8080/pedidos/reverter-delete', { deletedPedidoIds });
                window.location.reload();
            }
        } catch (error) {
            console.error('Erro ao reverter pedidos:', error);
        }
    }

    const showRevertAllConfirmation = async () => {
        const revertAllResult = await Swal.fire({
            title: 'Deseja reverter todos os pedidos deletados?',
            text: 'Esta ação não poderá ser desfeita.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, reverter!',
            cancelButtonText: 'Cancelar'
        });

        return revertAllResult.isConfirmed;
    };

    return (
        <>
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access'><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/editarAssinatura')}><img src={editar} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dados')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/padaria')}><img src={comprarMais} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="cards-info">
                    <div className="container">
                        <div className="content-card-info">
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Revise seu histórico de compras, acompanhe detalhes de pedidos anteriores.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Gerencie seus pedidos, atualize suas informações, e tenha controle total do seu histórico.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Faça pedidos com facilidade. Realize compras recorrentes ou adquira novos produtos.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-reverter-btn">
                    <div className="container">
                        <button onClick={handleRevertAllDeleted}><img src={buttonBack} alt="" /></button>
                    </div>
                </section>

                <section className="container-table">
                    <div className="container">
                        <div className="table">
                            {renderTable()}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PortalCliente;
