import '../../styles/StyleGlobal/style-global.css';
import '../ClienteComerciante/ClienteComerciante.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import { Link } from 'react-router-dom';

function ClienteComerciante() {
    return (
        <>
            <div className="container-center">
                <div className="container-left-opcao">
                    <div className="red-size">
                        <div className="components">
                            <div className="logo">
                                <Link to={'/'}><a href="./index.html">
                                    <img className="img-logo" src={logoWhite} alt="" />
                                </a></Link>
                            </div>
                            <Link to={'/cadastroCliente'}><div className="button-client">
                                <a className="round-button" href="">
                                    Quero ser assinante <span className="icon"></span>
                                </a>
                            </div></Link>
                        </div>
                    </div>
                </div>

                <div className="container-right-opcao">
                    <Link to={'/cadastroComerciante'}><div className="button-client">
                        <a className="round-button" id="hover2" href="">
                            Sou empresário <span className="icon"></span>
                        </a>
                    </div></Link>
                </div>
            </div>
        </>
    )
}

export default ClienteComerciante;