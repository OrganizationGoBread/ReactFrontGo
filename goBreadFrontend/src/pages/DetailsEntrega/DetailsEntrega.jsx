import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/image.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import '../../scss/DetailsEntrega/componentDetailsEntrega.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import React, { useEffect } from 'react';

function DetailsEntrega() {

    const [checkedItems, setCheckedItems] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
        option7: false,
        option8: false,
        option9: false,
        option10: false
    });

    const handleInputChange = (event) => {
        const { name, checked } = event.target;
        const label = event.target.nextSibling.textContent; 
        setCheckedItems({
            ...checkedItems,
            [name]: {
                checked,
                label
            }
        });
    
        console.log(`${label}`);
    };

    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem('selectedInputs'));
        console.log(storedItems);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('selectedInputs', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const buildURLParams = () => {
        const selectedItems = Object.entries(checkedItems)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join('&');
        return selectedItems;
    };

    return (
        <>
            <section className="parent-container">
                <div className="left-container2">
                    <div className="navbar-content2">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className="image-content2">
                        <img src={imageEntrega} alt="" />
                    </div>
                </div>

                <div className="right-container2">
                    <div className="container">
                        <div className="content-c">
                            <div className="info-content">
                                <div className="circle-content">
                                    <div className="circle">
                                        <Link to="/padaria"><img src={iconBack} alt="" /></Link>
                                    </div>
                                </div>

                                <div className="title-content">
                                    <h1>Definições de entrega</h1>
                                    <p>Escolha a melhor forma de receber sua cesta!</p>
                                </div>
                            </div>

                            <div className="containerForm">
                                <div className="contentForm">
                                    <form className="form">
                                        <div className="inputGroup">
                                            <input
                                                id="option1"
                                                name="option1"
                                                type="checkbox"
                                                checked={checkedItems.option1}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option1">Segunda-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input id="option2"
                                                name="option2"
                                                type="checkbox"
                                                checked={checkedItems.option2}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option2">Terça-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option3"
                                                name="option3"
                                                type="checkbox"
                                                checked={checkedItems.option3}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option3">Quarta-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option4"
                                                name="option4"
                                                type="checkbox"
                                                checked={checkedItems.option4}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option4">Quinta-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option5"
                                                name="option5"
                                                type="checkbox"
                                                checked={checkedItems.option5}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option5">Sexta-feira</label>
                                        </div>
                                    </form>
                                    <form className="form">
                                        <div className="inputGroup">
                                            <input
                                                id="option6"
                                                name="option6"
                                                type="checkbox"
                                                checked={checkedItems.option6}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option6">07h30</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option7"
                                                name="option7"
                                                type="checkbox"
                                                checked={checkedItems.option7}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option7">08h00</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option8"
                                                name="option8"
                                                type="checkbox"
                                                checked={checkedItems.option8}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option8">08h30</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option9"
                                                name="option9"
                                                type="checkbox"
                                                checked={checkedItems.option9}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option9">09h00</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input
                                                id="option10"
                                                name="option10"
                                                type="checkbox"
                                                checked={checkedItems.option10}
                                                onChange={handleInputChange}
                                            />
                                            <label for="option10">09h30</label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="advanced-container2">
                                <Link to={`/produto?${buildURLParams()}`}><div className="button-content">
                                    <p>Avançar</p>
                                    <img src={setaDireita} alt="" />
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailsEntrega;