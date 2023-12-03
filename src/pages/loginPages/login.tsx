import LoginComponent from "../../components/loginComponent/loginComponent";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
    return(
        <div className="container">
            <div className="title">
                <h1>Sistema de Gestão de Horas</h1>
            </div>
            <div className="login">
                <LoginComponent />
            </div>
        </div>
    )
}

export default LoginPage;