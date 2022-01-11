import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Main } from "../../components/Main";
import "./styles.scss";

export const Home = () => {
    return (
        <main className='container'>
            <SideBar />
            <div>
                <Header />
                <Main />
            </div>
        </main>
    );
};
