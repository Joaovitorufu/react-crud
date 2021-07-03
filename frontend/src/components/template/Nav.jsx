import './Nav.css';
import { NavItem } from './NavItem';

export const NavBar = () => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem
                    icon ="home"
                    name ="Início"
                    href = "/"
                />
                <NavItem
                    icon ="users"
                    name ="Usuários"
                    href = "/users"
                />
               
            </nav>
        </aside>
    )
}