import React from "react";
import "./styles.scss";

export const SideBar = () => {
    return (
        <div className='side-bar-conatiner'>
            <aside>
                <label>Img</label>
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
