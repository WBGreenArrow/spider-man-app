import React from "react";
import "./styles.scss";

import SpiderManMilesMorales from "../../assets/SpiderMan-Miles-Morales.svg";

export const Main = () => {
    return (
        <div className='main-container'>
            <div className='main-content'>
                <img src={SpiderManMilesMorales} alt='Spider Man Miles Morales' />
                <div></div>
            </div>
        </div>
    );
};
