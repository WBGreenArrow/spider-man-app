import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import "./styles.scss";

export const Home = () => {
    return (
        <main className='container'>
            <Header />
            <SideBar />
        </main>
    );
};
