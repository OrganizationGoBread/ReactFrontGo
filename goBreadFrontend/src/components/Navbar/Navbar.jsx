import '../../styles/StyleGlobal/style-global.css';
import './Navbar.css';
import Logo from '../../assets/Icons/Group 16.svg';
import ButtonEnter from '../ButtonEnter/ButtonEnter';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='father-navbar-home'>
            <div className='container'>
                <div className='content-navbar'>
                    <img src={Logo} alt="logo" className="logo" />
                        <nav>
                            <a href="#">SERVIÇOS</a>
                            <a href="#">ASSINATURAS</a>
                            <a href="#">Blog</a>
                        </nav>
                </div>
                <Link to="/login"><ButtonEnter /></Link>
            </div>
        </header>
    )
}

export default Navbar;