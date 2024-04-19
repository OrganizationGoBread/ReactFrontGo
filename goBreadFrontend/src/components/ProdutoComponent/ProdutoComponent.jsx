import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

function CardProduto({ produto, updateQuantidadeSelecionada }) {
    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
    const [tipoAssinatura, setTipoAssinatura] = useState('');

    useEffect(() => {
        const tipoAssinatura = sessionStorage.getItem('tipoAssinatura');
        setTipoAssinatura(tipoAssinatura);
    }, []);

    const decrementarQuantidade = () => {
        if (quantidadeSelecionada > 0) {
            setQuantidadeSelecionada(quantidadeSelecionada - 1);
            updateQuantidadeSelecionada(produto.id, quantidadeSelecionada - 1);
        }
    };

    const incrementarQuantidade = () => {
        if ((tipoAssinatura === 'basic' && quantidadeSelecionada < 5) ||
        (tipoAssinatura === 'family' && quantidadeSelecionada < 10)) {
        setQuantidadeSelecionada(quantidadeSelecionada + 1);
        updateQuantidadeSelecionada(produto.id, quantidadeSelecionada + 1);
    } else {
        Swal.fire({
            title: 'Atenção',
            text: `No plano ${tipoAssinatura.toUpperCase()}, você pode selecionar no máximo ${tipoAssinatura === 'basic' ? '5' : '10'} porções.`,
            icon: 'warning',
        });
    }
    };

    return (
        <div className="cardProduto">
            <img src={produto.imagem} alt="" />
            <h1>{produto.nome}</h1>
            <p>{produto.valorPorcao} / Porção</p>
            <div className="addAndRemove">
                <button onClick={decrementarQuantidade} disabled={quantidadeSelecionada === 0}>-</button>
                <p>{quantidadeSelecionada} porções</p>
                <button onClick={incrementarQuantidade} disabled={(tipoAssinatura === 'basic' && quantidadeSelecionada > 5) || (tipoAssinatura === 'family' && quantidadeSelecionada > 10)}>+</button>
            </div>
            <h1 className="preco">{produto.valorPorcao * quantidadeSelecionada} {produto.tipoPorcao}</h1>
        </div>
    );
}

export default CardProduto;
