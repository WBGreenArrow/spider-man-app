import React from "react";
import "./styles.scss";

import InstagramLogo from "../../assets/instagram.svg";
import TwitterLogo from "../../assets/twitter.svg";
import FacebookLogo from "../../assets/facebook.svg";
import SearchLogo from "../../assets/search.svg";

export const SideBar = () => {
    return (
        <div className='side-bar-conatiner'>
            <aside className='side-bar-content'>
                <img src='https://github.com/WBGreenArrow.png' alt='profile-photo' />
                <div className='online'></div>
                <div className='side-bar-network-content'>
                    <img src={InstagramLogo} alt='instagrm-logo' />
                    <img src={TwitterLogo} alt='twitter-logo' />
                    <img src={FacebookLogo} alt='facebook-logo' />
                </div>
                <img className='side-bar-search-logo' src={SearchLogo} alt='search-logo' />
            </aside>
        </div>
    );
};
