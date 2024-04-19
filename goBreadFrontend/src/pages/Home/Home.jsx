import Navbar from "../../components/Navbar/Navbar";
import ImageMockups from "../../assets/Group 16.png";
import iconAssinatura from "../../assets/Icons/assinatura.png";
import esbocoProjeto from "../../assets/Icons/esboco-projeto 1.svg";
import lendoUmLivro from "../../assets/Icons/lendo-um-livro.png";
import basicSacola from "../../assets/Icons/sacola.png";
import familySacola from "../../assets/Icons/sacolas-de-compras.png";
import check from "../../assets/Icons/direito.png";
import imageComerciante from "../../assets/Group 17.png";
import polygon from "../../assets/Icons/Polygon 1.svg";
import './Home.css';
import Footer from "../../components/Footer/Footer";
import Slogan from "../../components/Slogan/Slogan";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <div className="main-container">
                        <div className="content-main">
                            <p className="sub-slogan">VENHA PARA <b>GO!</b></p><br></br>
                            <p className="slogan">Assine agora e<br></br> receba seu <br></br> <span>café da manhã </span>
                                fresco<br></br>na sua porta.</p><br></br>
                            <Link to="/comerciante"><button className="commerce-button">Sou comerciante</button></Link>
                            <Link to="/cadastroCliente"><button className="client-button">Seja nosso cliente</button></Link>
                        </div>
                        <div className="containerRight">
                            <img src={ImageMockups} alt="" />
                        </div>
                    </div>
                </div>
            </main>

            <section className="sectionVantagensHome" id="como-funciona">
                <div className="container containerVantagensHome">
                    <div className="tituloVantagensHome">
                        <h1 className="titulo">Como funciona</h1>
                        <h2 className="subTitulo">a <span>goBread!</span></h2>
                    </div>
                    <div className="cardsHome">
                        <div className="individualCard">
                            <div className="divIcone">
                                <div className="iconeCard">
                                    <img className="icons" src={iconAssinatura} alt="" />
                                </div>
                            </div>
                            <h1 className="tituloCard">Assinatura</h1>
                            <p className="textoCard">
                                Pague uma mensalidade por pedidos ilimitados, com custos adicionais ao atingir um valor específico.
                            </p>
                        </div>
                        <div className="individualCard">
                            <div className="divIcone">
                                <div className="iconeCard">
                                    <img className="icons" src={esbocoProjeto} alt="" />
                                </div>
                            </div>
                            <h1 className="tituloCard">Personalização</h1>
                            <p className="textoCard">
                                Personalize seu pedido de acordo com suas necessidades, escolhendo dias, horários e produtos para cada pedido individual.
                            </p>
                        </div>
                        <div className="individualCard">
                            <div className="divIcone">
                                <div className="iconeCard">
                                    <img className="icons" src={lendoUmLivro} alt="" />
                                </div>
                            </div>
                            <h1 className="tituloCard">Conforto</h1>
                            <p className="textoCard">
                                Receba seus pedidos onde você estiver, conforme a disponibilidade de comércios em sua região.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionAssinaturas" id="assinaturas">
                <div className="container containerAssinaturas">
                    <div className="assinaturasTexto">
                        <h1 className="tituloAssinaturas">
                            Sabe quando você
                        </h1>
                        <h2 className="subTituloAssinaturas">pode começar? <span>Agora!</span></h2>
                    </div>
                    <div className="assinaturasCards">
                        <div className="plus">
                            <div className="assinaturaIcone">
                                <div className="icone">
                                    <img className="imgIcone" src={basicSacola} alt="" />
                                </div>
                                <h1>BASIC</h1>
                            </div>
                            <div className="assinaturaPreco">
                                <h1>R$249,90 <span>/mês</span></h1>
                            </div>
                            <div className="assinaturaVantagens">
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Plano MENSAL</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Menor capacidade de quantidades</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Descontos exclusivos</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Entregas expressas</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Brindes</p>
                                </div>
                                <div className="individualVantagem">
                                    <Link to="/cadastroCliente"><button>ASSINAR BASIC</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="pro">
                            <div className="assinaturaIcone assinaturaPro">
                                <div className="icone">
                                    <img className="imgIcone" src={familySacola} alt="" />
                                </div>
                                <h1>FAMILY</h1>
                            </div>
                            <div className="assinaturaPreco precoPro">
                                <h1>R$299,90 <span>/mês</span></h1>
                            </div>
                            <div className="assinaturaVantagens">
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Plano ANUAL</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Ampla capacidade de quantidades</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Descontos exclusivos</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Entregas expressas</p>
                                </div>
                                <div className="individualVantagem">
                                    <img className="direito" src={check} alt="" />
                                    <p>Fidelidade Premiada</p>
                                </div>
                                <div className="individualVantagem">
                                    <Link to="/cadastroCliente"><button>ASSINAR FAMILY</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <section className="choose">
                    <div className="choose-container">
                        <div className="sou-comerciante">
                            <div className="images-content">
                                <h2>você <span>EMPRESÁRIO</span></h2>
                                <h5>Necessita de uma rede maior de clientes?<br></br>
                                    Junte-se ao goBread! e alcance novos clientes
                                    em sua região. Aumente suas vendas e expanda
                                    seus negócios!</h5>
                                    <Link to="/comerciante"><p><a href="#">Veja</a></p></Link>
                            </div>
                            <div className="image">
                                <img src={imageComerciante} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div className="setaIcon">
                <img src={polygon} alt="" />
            </div>
            <section className="inovations">
                <div className="container">
                    <div className="inovations-container">
                        <div className="title2">
                            <p>Inovações<br></br><span className="sub-title2">Vantagens de usar a
                            </span><span> goBread!</span>
                            </p>
                        </div>
                        <div className="inovations-content">
                            <div className="inovation-card">
                                <div className="circle-1"></div>
                                <br></br>
                                <h2>Tecnologia</h2>
                                <br></br>
                                <p>Utilizamos tecnologia de<br></br>ponta para tornar os pedidos<br></br>mais simples.</p>
                            </div>
                            <div className="inovation-card">
                                <div className="circle-2"></div>
                                <br></br>
                                <h2>Integrações</h2>
                                <br></br>
                                <p>Integre seu comércio com nossa<br></br>plataforma, e conte com a<br></br>roteirização automática.</p>
                            </div>
                            <div className="inovation-card">
                                <div className="circle-3"></div>
                                <br></br>
                                <h2>Atendimento</h2>
                                <br></br>
                                <p>Tenha o suporte a disposição<br></br>sempre que necessário,<br></br>estamos aqui 24h para você.</p>
                            </div>
                        </div>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </section>

            <section className="container">
                <section className="blog">
                    <div className="blog-container">
                        <div className="title">
                            <h1>
                                Blog da <span>go!</span>
                            </h1>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <div className="title">
                                    <h1>
                                        <span>Últimos</span><br></br>posts
                                    </h1>
                                </div>
                            </div>
                            <div className="blog-right">
                                <div className="blog-right-up">
                                    <div className="blog-img"></div>
                                    <div className="blog-text">
                                        <h2>APP</h2>
                                        <br></br>
                                        <p>Entenda o que a go! faz <br></br>através da tecnologia <br></br>para você.</p>
                                    </div>
                                </div>
                                <div className="blog-right-down">
                                    <div className="blog-img"></div>
                                    <div className="blog-text">
                                        <h2>Macro <br></br>Review</h2>
                                        <br></br>
                                        <p>Entenda como estamos <br></br>inovando a forma de <br></br>pagar e consumir o seu <br></br>café da
                                            manhã
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Slogan />
            <Footer />
        </>
    )
}

export default Home;