import '../../styles/StyleGlobal/style-global.css';
import './Arquivo.css';
import products from '../../assets/Icons/products.svg';
import relatorio from '../../assets/Icons/relatorio-de-lucro 1.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import baixar from '../../assets/Icons/download.png';
import upload from '../../assets/opcao-de-upload-de-armazenamento-em-nuvem.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Arquivo() {

    const history = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileAttached, setFileAttached] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileAttached(true);
    };

    const handleDownload = async () => {
        try {
            const idComercio = sessionStorage.getItem('selectedPadariaId');
            const response = await axios.get(`http://52.20.221.176:8080/comercios/download/clientes-txt/${idComercio}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'clientes.txt');

            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Erro ao fazer o download do arquivo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao baixar o arquivo!',
            });
        }
    };

    const handleUpload = async () => {
        try {
            //   const idComercio = sessionStorage.getItem('selectedPadariaId');
            const formData = new FormData();
            formData.append('file', selectedFile);

            await axios.post('http://52.20.221.176:8080/comercios/upload/produtos-txt', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                icon: 'success',
                title: 'Upload realizado com sucesso!',
            });
        } catch (error) {
            console.error('Erro ao fazer o upload do arquivo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao fazer o upload do arquivo!',
            });
        }
    };

    return (
        <>
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access' onClick={() => history('/portalComerciante')}><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/relatorio')}><img src={relatorio} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dadosComerciante')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='main-arquivo'>
                <section className='section-arquivo'>
                    <div className="div-arquivo">
                        <h1>Acesse seu relatório para entender melhor o comportamento de compra de seus clientes.</h1>
                        <div className="div-btn">
                            <h2>Baixe seu relatório</h2>
                            <button onClick={handleDownload}><img src={baixar} alt="" />Baixar Relatório</button>
                        </div>
                    </div>

                    <div className="div-file">
                        <div className="content-file">
                            <img src={upload} alt="" />
                            <h1>Faça o upload do relatório de clientes</h1>
                            <label htmlFor="file-upload" className="custom-upload-button">
                                <span>Escolha o arquivo</span>
                                <input type="file" id="file-upload" onChange={handleFileChange} />
                            </label>
                            {fileAttached && <p className='p-arquivo-anexado'>Arquivo anexado!</p>}
                            <button onClick={handleUpload}>Enviar</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Arquivo;