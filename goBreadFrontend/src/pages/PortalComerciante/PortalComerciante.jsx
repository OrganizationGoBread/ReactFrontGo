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

function PortalComerciante() {
    const history = useNavigate();

    const [comercioData, setComercioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchComercioData() {
            try {
                const idPadaria = sessionStorage.getItem('selectedPadariaId');
                const response = await axios.get(`http://52.20.221.176:8080/comercios/${idPadaria}`);
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
                await axios.delete(`http://52.20.221.176:8080/pedidos/${pedidoId}`);
                setCliente(prevCliente => ({
                    ...prevCliente,
                    pedidos: prevCliente.pedidos.filter(pedido => pedido.id !== pedidoId)
                }));

                const revertConfirmed = await showRevertConfirmation();
                if (revertConfirmed) {
                    await axios.post(`http://52.20.221.176:8080/pedidos/reverter-delete`, { pedidoId });
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

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nº Pedido</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Cliente</th>
                        <th>Telefone</th>
                        <th>Endereço Cliente</th>
                        <th>Horário</th>
                        <th>Complemento</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                {comercioData.pedidos.map((pedido, indexPedido) => (
                        pedido.itensPedido.map((item, indexItem) => (
                            <tr key={`${pedido.id}-${indexItem}`}>
                                <td>{pedido.id}</td>
                                <td>{item.produto.nome}</td>
                                <td>{item.quantidade}</td>
                                <td>{pedido.cliente.nome}</td>
                                <td>{pedido.cliente.telefone}</td>
                                <td>{pedido.cliente.endereco.rua}, {pedido.cliente.endereco.numero} - {pedido.cliente.endereco.bairro}</td>
                                <td>{pedido.horarioEntrega}</td>
                                <td>{pedido.cliente.endereco.complemento}</td>
                                <td>{pedido.cliente.endereco.cep}</td>
                            </tr>
                        ))
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
