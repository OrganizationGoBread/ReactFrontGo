import '../../styles/StyleGlobal/style-global.css';
import './PortalComerciante.css';
import products from '../../assets/Icons/products.svg';
import relatorio from '../../assets/Icons/relatorio-de-lucro 1.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import deletarUsuario from '../../assets/Icons/deletar-usuario 1.jpg';
import sair from '../../assets/Icons/sair.svg';
import lampada from '../../assets/Icons/lampada.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import api from '../../api/api';

function PortalComerciante() {
    const history = useNavigate();

    const [comercioData, setComercioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchComercioData() {
            try {
                const idPadaria = sessionStorage.getItem('selectedPadariaId');
                const response = await api.get(`/comercios/${idPadaria}`);
                setComercioData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações do comércio:', error);
            }
        }

        fetchComercioData();
    }, []);

    async function handleDeletePedido(pedidoId) {
        try {
            const confirmed = await showConfirmation();
            if (confirmed) {
                await api.delete(`/pedidos/${pedidoId}`);
                setCliente(prevCliente => ({
                    ...prevCliente,
                    pedidos: prevCliente.pedidos.filter(pedido => pedido.id !== pedidoId)
                }));

                const revertConfirmed = await showRevertConfirmation();
                if (revertConfirmed) {
                    await api.post(`/pedidos/reverter-delete`, { pedidoId });
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


    const showPedidoDetails = (pedido) => {
        Swal.fire({
            // title: `Detalhes do Pedido ${pedido.id}`,
            html: `
                <div style="width: 100%; margin-bottom: 20px; display: flex; text-align: start; margin-top: 8px;">
                    <h3 style="color: black; letter-spacing: -1; font-weight: 600;">Pedido: ${pedido.id}</h3>
                </div>

                <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 20px; font-weight: 600; letter-spacing: -1;">Produto</h5>
                        <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 8px;">
                            ${pedido.itensPedido.map(item => `
                                <li style="font-size: 14px; font-weight: 300;">
                                    ${item.produto.nome}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 20px; font-weight: 600; letter-spacing: -1;">Quantidade</h5>
                        <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 8px;">
                            ${pedido.itensPedido.map(item => `
                                <li style="font-size: 14px; font-weight: 300;">
                                    ${item.quantidade}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
                <div style="display: flex; justify-content: space-between;">
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Faça a entrega em:</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.endereco.rua}, ${pedido.cliente.endereco.numero} - ${pedido.cliente.endereco.bairro}</p>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Horário</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.horarioEntrega}</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Dia da entrega</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.diaEntrega}</p>
                    </div>
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Complemento</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.endereco.complemento}</p>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">CEP</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.endereco.cep}</p>
                    </div>
                </div>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
                <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Cliente</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.nome}</p>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">CPF</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.cpf}</p>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Telefone</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.telefone}</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                    <div style="text-align: start;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Email</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.email}</p>
                    </div>
                    <div style="text-align: end;">
                        <h5 style="margin-bottom: 10px; font-weight: 600; letter-spacing: -1;">Identificador</h5>
                        <p style="font-size: 14px; font-weight: 300;">${pedido.cliente.id}</p>
                    </div>
                </div>
            `,
            confirmButtonText: 'Fechar'
        });
    };


    function renderTable() {
        if (loading) {
            return <p>Carregando...</p>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nº Pedido</th>
                        <th>Produtos</th>
                        <th>Cliente</th>
                        <th>Endereço de Entrega</th>
                        <th>Dia da Entrega</th>
                        <th>Horário da Entrega</th>
                        <th>Complemento</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {comercioData.pedidos.map(pedido => (
                        <tr key={pedido.id} onClick={() => showPedidoDetails(pedido)} style={{ cursor: 'pointer' }}>
                            <td>{pedido.id}</td>
                            <td>
                                <button className="btn-details" onClick={() => showPedidoDetails(pedido)}>Ver Produtos</button>
                            </td>
                            <td>{pedido.cliente.nome}</td>
                            <td>{pedido.cliente.endereco.rua}, {pedido.cliente.endereco.numero} - {pedido.cliente.endereco.bairro}</td>
                            <td>{pedido.diaEntrega}</td>
                            <td>{pedido.horarioEntrega}</td>
                            <td>{pedido.cliente.endereco.complemento}</td>
                            <td>{pedido.cliente.endereco.cep}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <>
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access'><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/relatorios')}><img src={relatorio} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dadosComerciante')}><img src={perfilCliente} alt="" /></button>
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

export default PortalComerciante;
