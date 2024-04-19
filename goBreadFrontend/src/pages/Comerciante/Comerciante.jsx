import NavbarComercinte from '../../components/NavbarComerciante/NavbarComerciante';
import '../../styles/StyleGlobal/style-global.css';
import '../Comerciante/Comerciante.css';
import imagemComercio from '../../assets/Group 20.png';
import point from "../../assets/Icons/point.svg";
import vendas from "../../assets/Icons/vendas.svg";
import crescimento from "../../assets/Icons/crescimento.svg";
import fidelidade from "../../assets/Icons/fidelidade.svg";
import ampliacao from "../../assets/Icons/ampliacao.svg";
import facilidade from "../../assets/Icons/facilidade.svg";
import iphoneMap from "../../assets/Group 21.svg";
import polygon from "../../assets/Icons/Polygon 1.svg";
import mackupPersonalize from "../../assets/Group 29.png";
import Slogan from '../../components/Slogan/Slogan';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Comerciante() {
    return (
        <>
            <NavbarComercinte />
            <main>
                <section className="bannerSlogan">
                    <div className="container content-banner">
                        <div className="divisao">
                            <div className="texto">
                                Tudo que você <br></br>
                                precisa para aumentar <br></br>
                                seu lucro utilizando nossos <br></br>
                                serviços.
                            </div>
                            <div className="access">
                                <Link to={"/cadastroComerciante"}><button className="btnCadastrar">
                                    Fazer meu cadastro
                                </button></Link>
                            </div>
                        </div>
                        <div className="divisao">
                            <img className="imgPadeira" src={imagemComercio} alt="" />
                        </div>
                    </div>
                </section>

                <section className="sectionVantagens">
                    <div className="container containerVantagens">
                        <div className="tituloVantagens">
                            <h1 className="titulo">Vantagens</h1>
                            <h2 className='subTitulo'>para você <span>comerciante</span></h2>
                        </div>
                        <div className="cards">
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={point} alt="" />
                                    </div>
                                </div>
                                <h1 className="tituloCard">Raio</h1>
                                <p className="textoCard">
                                    Raio da área atendida, escolha
                                    o raio de atuação da sua loja e
                                    ganhe engajamento
                                </p>
                            </div>
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={vendas} alt="" />
                                    </div>
                                </div>
                                <h1 className="tituloCard">+ Vendas</h1>
                                <p className="textoCard">
                                    Vendas regulares através
                                    de assinaturas, mantendo um
                                    fluxo constante de pedidos.
                                </p>
                            </div>
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={crescimento} />
                                    </div>
                                </div>
                                <h1 className="tituloCard">Crescimento</h1>
                                <p className="textoCard">
                                    Atende um público que valoriza a
                                    conveniência pode aumentar a
                                    percepção positiva da sua marca.
                                </p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={fidelidade} alt="" />
                                    </div>
                                </div>
                                <h1 className="tituloCard">Fidelidade</h1>
                                <p className="textoCard">
                                    As assinaturas promovem a
                                    fidelidade do cliente, levando
                                    a relacionamentos mais duradouros.
                                </p>
                            </div>
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={ampliacao} alt="" />
                                    </div>
                                </div>
                                <h1 className="tituloCard">Ampliação</h1>
                                <p className="textoCard">
                                    Comerciantes podem alcançam
                                    um público maior, incluindo
                                    novos clientes.
                                </p>
                            </div>
                            <div className="individualCard">
                                <div className="divIcone">
                                    <div className="iconeCard">
                                        <img className="icons" src={facilidade} alt="" />
                                    </div>
                                </div>
                                <h1 className="tituloCard">Facilidade</h1>
                                <p className="textoCard">
                                    Facilitamos a gestão de pedidos
                                    e entregas para ambos os lados,
                                    economizando tempo e recursos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="app">
                    <div className="container">
                        <div className="app-container">
                            <div className="content-image">
                                <img src={iphoneMap} alt="" />
                            </div>
                            <div className="content-title">
                                <h1 className="title"><span className="weight">Entregas</span> por sua conta.</h1>
                                <div className="content-circle">
                                    <div className="circle">
                                        <h1>1</h1>
                                    </div>
                                    <div className="parag">
                                        <p>Você faz as entregas.</p>
                                    </div>
                                </div>
                                <div className="content-circle">
                                    <div className="circle">
                                        <h1>2</h1>
                                    </div>
                                    <div className="parag">
                                        <p>Mantenha o controle direto.</p>
                                    </div>
                                </div>
                                <div className="content-circle">
                                    <div className="circle">
                                        <h1>3</h1>
                                    </div>
                                    <div className="parag">
                                        <p>Ofereça
                                            uma experiência personalizada aos seus
                                            clientes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="setaIcon">
                    <img src={polygon} alt="" />
                </div>
                <section className="sectionPersonalize">
                    <div className="container containerPersonalize">
                        <div className="textoPersonalize">
                            <div className="tituloPersonalize">
                                <h2>Personalize sua solução<br></br>
                                    com a goBread!</h2>
                            </div>
                            <div className="containerColumn">
                                <div className="content-circle2">
                                    <div className="circle2">
                                        <h1>1</h1>
                                    </div>
                                    <div className="parag2">
                                        <p>Conte com integradores uniformizados.</p>
                                    </div>
                                </div>
                                <div className="content-circle2">
                                    <div className="circle2">
                                        <h1>2</h1>
                                    </div>
                                    <div className="parag2">
                                        <p>Sacolas e bags.</p>
                                    </div>
                                </div>
                                <div className="content-circle2">
                                    <div className="circle2">
                                        <h1>3</h1>
                                    </div>
                                    <div className="parag2">
                                        <p>Uniformes dedicados e selecionados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="imagemPersonalize">
                            <img className="imgPersonalize" src={mackupPersonalize} alt="" />
                        </div>
                    </div>
                </section>
                <Slogan />
                <Footer />
            </main >
        </>
    )
}

export default Comerciante;