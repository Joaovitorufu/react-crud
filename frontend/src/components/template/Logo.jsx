import './Logo.css';
import logo from '../../assets/img/logo.png';

export const Logo = () => {
    return(
        <aside className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}
