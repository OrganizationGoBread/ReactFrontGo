import './ProdutoComerciante.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../api/api';

function ProdutoComerciante() {

    const history = useNavigate();

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCheckboxChange = (productId) => {
        const isSelected = selectedProducts.includes(productId);

        if (isSelected) {
            setSelectedProducts((prevSelected) => prevSelected.filter((id) => id !== productId));
        } else {
            setSelectedProducts((prevSelected) => [...prevSelected, productId]);
        }  
    };

    const handleAvancarClick = async () => {
        const idComercio = sessionStorage.getItem('idComerciante');
        const itensComercio = selectedProducts.map((idProduto) => ({ idComercio, idProduto }));
        const postData = { itensComercio };

        try {
            const response = await api.post('/itens-comercio', postData);
            console.log('Resposta da chamada POST:', response.data);
            toast.success("Itens cadastrados!", {
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
                history('/portalComerciante');
            }, 1500);
        } catch (error) {
            console.error('Erro na chamada POST:', error);
        }
    };

    return (
        <>
         <ToastContainer />
            <section className='container-check'>
                <div className="container">
                    <div className="alinharNoMeio">
                        <div className="tituloDeProduto">
                            <h1 className='title-catalago'>Catálago</h1>
                        </div>
                        <div className="containerProdutosCentralizado">
                            <ul className="ks-cboxtags">
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxOne"
                                        value="Rainbow Dash"
                                        onChange={() => handleCheckboxChange(1)}
                                    />
                                    <label htmlFor="checkboxOne">Pão Francês</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxTwo"
                                        value="Cotton Candy"
                                        onChange={() => handleCheckboxChange(2)}
                                    />
                                    <label htmlFor="checkboxTwo">Pão de Leite</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxThree"
                                        value="Rarity"
                                        onChange={() => handleCheckboxChange(3)}
                                    />
                                    <label htmlFor="checkboxThree">Croissant</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxFour"
                                        value="Moondancer"
                                        onChange={() => handleCheckboxChange(4)}
                                    />
                                    <label htmlFor="checkboxFour">Pão de queijo G</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxFive"
                                        value="Surprise"
                                        onChange={() => handleCheckboxChange(5)}
                                    />
                                    <label htmlFor="checkboxFive">Pão de queijo P</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxSix"
                                        value="Mussarela"
                                        onChange={() => handleCheckboxChange(6)}
                                    />
                                    <label htmlFor="checkboxSix">Mussarela</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxSeven"
                                        value="Presunto"
                                        onChange={() => handleCheckboxChange(7)}
                                    />
                                    <label htmlFor="checkboxSeven">Presunto</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxEight"
                                        value="Leite"
                                        onChange={() => handleCheckboxChange(8)}
                                    />
                                    <label htmlFor="checkboxEight">Leite</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxNine"
                                        value="Cafe"
                                        onChange={() => handleCheckboxChange(9)}
                                    />
                                    <label htmlFor="checkboxNine">Café</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxTen"
                                        value="Laranja"
                                        onChange={() => handleCheckboxChange(10)}
                                    />
                                    <label htmlFor="checkboxTen">Suco de Laranja</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxeleven"
                                        value="Requeijao"
                                        onChange={() => handleCheckboxChange(11)}
                                    />
                                    <label htmlFor="checkboxeleven">Requeijão</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="checkboxtwelve"
                                        value="Maionese"
                                        onChange={() => handleCheckboxChange(12)}
                                    />
                                    <label htmlFor="checkboxtwelve">Maionese</label>
                                </li>
                            </ul>
                        </div>

                        <div className="advanced-container">
                            <div className="button-content" onClick={handleAvancarClick}>
                                <p>Avançar</p>
                                <img src={setaDireita} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProdutoComerciante;