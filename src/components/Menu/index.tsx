import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/quina') {
            setActiveLink('quina');
        } else if (path === '/megasena') {
            setActiveLink('megasena');
        } else if (path === '/lotofacil') {
            setActiveLink('lotofacil');
        }
    }

    );

    return (
        <nav>
            <ul>
                <Link to="/megasena" className="menu" id ={activeLink ==='megasena' ? 'menuActive':'titulo_megasena_menu'}>Megasena</Link>
                <Link to="/lotofacil" className="menu" id ={activeLink ==='lotofacil' ? 'menuActive':'titulo_lotofacil_menu'}>Lotofacil</Link>
                <Link to="/quina" className="menu" id ={activeLink ==='quina' ? 'menuActive':'titulo_quina_menu'}>Quina</Link>
            </ul>
        </nav>
    );
}

export default Menu;