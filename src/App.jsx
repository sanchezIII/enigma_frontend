import './App.css';
import LoginForm from "./components/LoginForm";
import NavigationBar from './components/NavigationBar';
import './hojas_de_estilo/NavigationBar.css'
import IAsunto from './components/IAsunto';
import DescripcionAPI from './components/DescripcionAPI';
import Principal from './components/Principal';

import {useEffect, useState} from "react";

import UsarPlataforma from "./components/UsarPlataforma";




function LoginPage(setPage) {
    return (
        <div className="app-container">
            <NavigationBar
                page={"login"}
                setPage={setPage}
            />
            <LoginForm/>
        </div>
    );
}

function MainPage(setPage){
    return (
        <div className="app-container">
            <NavigationBar
                page={"main"}
                setPage={setPage}
            />
           <Principal/>
        </div>
    );
}

function UsarPlataformaPage(setPage){
    return (
        <div className="app-container">
            <NavigationBar
                page={"uso"}
                setPage={setPage}
            />

            <UsarPlataforma/>
        </div>
    );
}

function IAsuntoPage(setPage, obsTypeList){
    return (
        <div className="app-container">
            <NavigationBar
                page={"asunto"}
                setPage={setPage}
            />

            <IAsunto obsTypes={obsTypeList}/>
        </div>
    );
}

function DescripcionAPIPage(setPage){
    return (
        <div className="app-container">
            <NavigationBar
                page={"descripcion"}
                setPage={setPage}
            />

            <DescripcionAPI/>
        </div>
    );
}

function App() {

    // useEffect(() => {
    //     fetch("/api")
    //         // .then((res) => res.json())
    //         .then((json) => {
    //             console.log(json);
    //             return json;
    //         })
    //         // .then((data) => setTypes(data.message));
    // }, []);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            // .then((data) => setData(data.message));
    }, []);

    let [page, setPage] = useState("main");
    let [types, setTypes] = useState([]);

    switch (page) {
        case "main":
            return MainPage(setPage);

        case "login":
            return LoginPage(setPage);

        case "uso":
            return UsarPlataformaPage(setPage);

        case "asunto":
            return IAsuntoPage(setPage);

        case "descripcion":
            return DescripcionAPIPage(setPage)

        default:
            return <>
                Default!!!
            </>
    }
}

export default App;
