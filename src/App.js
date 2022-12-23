
import './App.css';
import LoginForm from "./componentes/LoginForm";

function LoginPage(){
    return (
        <div className="app-container">
            <LoginForm/>
        </div>
    );
}

function App() {
  // return (
  //
  //   <div>
  //     <Navbar/>
  //   </div>
  // );

    return LoginPage();

}

export default App;
