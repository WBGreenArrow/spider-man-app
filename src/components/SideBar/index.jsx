import React from "react";
import "./styles.scss";

export const SideBar = () => {
    return (
        <div className='side-bar-conatiner'>
            <aside className='side-bar-content'>
                <img src='https://github.com/WBGreenArrow.png' alt='profile-photo' />
                <div className='online'></div>
                <div>
                    <label>Instagram</label>
                    <label>Twitter</label>
                    <label>Facebook</label>
                </div>
                <label>Search</label>
            </aside>
        </div>
    );
};
