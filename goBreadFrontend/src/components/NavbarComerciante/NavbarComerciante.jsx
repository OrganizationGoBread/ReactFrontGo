import '../../styles/StyleGlobal/style-global.css';
import './NavbarComerciante.css';
import Logo from '../../assets/Icons/Group 16.svg';
import ButtonEnter from '../ButtonEnter/ButtonEnter';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavbarComercinte() {

    const history = useNavigate();

    // window.addEventListener("scroll", function () {
    //     var header = document.querySelector(".father-navbar-comerciante");
    //     header.classList.toggle("sticky", window.scrollY > 0);
    // });

    return (
        <>
            <header className='father-navbar-comerciante'>
                <div className='container'>
                    <div className='content-navbar'>
                        <img src={Logo} alt="logo" className="logo" onClick={() => history('/')}/>
                        <nav>
                            <a href="#">VANTANGENS</a>
                            <a href="#">PERSONALIZE</a>
                        </nav>
                    </div>
                    <Link to="/login"><ButtonEnter /></Link>
                </div>
            </header>
        </>
    )
}

export default NavbarComercinte;