import React, { useState } from 'react';
import "./loginComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logoRH from '../../assets/images/logo-senac.png'

function LoginComponent() {
  const[usuario, setUsuario] = useState('');
  const[senha, setSenha] = useState('');
  const[mostrarSenha, setMostrarSenha] = useState(false);
 

  return(
    <div className="login-box">
        <div className="logo">
          <img src={logoRH} alt="logo senac" />
        </div>
        <div className="usuario">
           <span className="user">
            <label>Usuário:</label>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
          </span>
        </div>
        <div className="senha">
        <span className="senha">
            <label>Senha:</label>
            <input type={mostrarSenha? 'text': 'password'} name={senha} onChange={e => setSenha(e.target.value)} />
          </span>
        </div>
        <div className="esqueci-senha">
          <a href="#">Esqueci minha senha</a>
        </div>
        <div className="btn-entrar">
          <button className="btn-entrar" type="submit">Fazer Login</button>
        </div>

    </div>
  )

}

export default LoginComponent;