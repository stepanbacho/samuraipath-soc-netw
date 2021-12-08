import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header />
            <Navbar />
            <div className={'content'}>
                Main Content
                <div className={'main-picture'}></div>
                <div className={'ava-and-info-wrapper'}></div>
                <div className={'posts-wrapper'}>
                    <div className={'title'}></div>
                    <div className={'input-wrapper'}></div>
                    <div className={'posts'}></div>
                </div>
            </div>
        </div>
    );
}

export default App;
