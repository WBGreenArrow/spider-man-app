import React from "react";
import "./styles.scss";

export const Header = () => {
    return (
        <div className='header-container'>
            <nav className='nav-header'>
                <ul className='nav-header-text'>
                    <li>
                        <img src='' alt='' />
                    </li>
                    <li>
                        <a href=''></a>
                    </li>
                    <li>
                        <div>
                            <label>home</label>
                            <label>sinopse</label>
                            <label>elenco</label>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
