import React from "react";
import MarvelLogoImg from "../../assets/MarvelLogo.svg";
import SpiderManLogoImg from "../../assets/SpiderManLogo.svg";
import "./styles.scss";

export const Header = () => {
    return (
        <nav className='header-container'>
            <ul className='nav-header-text'>
                <li>
                    <img src={MarvelLogoImg} alt='logo-marvel' />
                </li>
                <li>
                    <img src={SpiderManLogoImg} alt='logo-spider-man' />
                </li>
                <li>
                    <div className='nav-menu-text'>
                        <label>home</label>
                        <label>sinopse</label>
                        <label>elenco</label>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
