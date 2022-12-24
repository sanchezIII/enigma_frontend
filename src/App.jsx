import './App.css';
import LoginForm from "./components/LoginForm";
import NavigationBar from './components/NavigationBar';
import './hojas_de_estilo/NavigationBar.css'

import {useState} from "react";


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

function App() {

    let [page, setPage] = useState("main");

    switch (page) {
        case "main":
            return MainPage(setPage);

        case "login":
            return LoginPage(setPage);

        default:
            return <>

            </>
    }
}

export default App;
