import './App.css';
import LoginForm from "./components/LoginForm";
import NavigationBar from './components/NavigationBar';
import './hojas_de_estilo/NavigationBar.css'

import {useState} from "react";
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

function App() {

    let [page, setPage] = useState("main");

    switch (page) {
        case "main":
            return MainPage(setPage);

        case "login":
            return LoginPage(setPage);

        case "uso":
            return UsarPlataformaPage(setPage)

        default:
            return <>

            </>
    }
}

export default App;
