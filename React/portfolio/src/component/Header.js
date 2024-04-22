import { Link } from 'react-router-dom'; 
import Sajin from '../images/Sajin.png'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex">
                        <img src={Sajin} alt='Portfolio' className='img'/>
                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Education" className="nav-link">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Project" className="nav-link">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link">Contact</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;
