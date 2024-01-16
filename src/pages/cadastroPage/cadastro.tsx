import './cadastro.css';
import ImputComponent from '../../components/inputComponent/inputComponent';
import { ChangeEvent, SetStateAction, useState } from 'react';


const CadastroPage = () =>{
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [nivel, setNivel] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [inputValue, setInputValue] = useState('');

    
    return(
        <div className="cadastro">
            <div className="cadastroBox">
                <div className="titulo">
                    <h1>Cadastro de Usuários</h1>
                </div>
                <form action="" className='formulario-cadastro'>
                    <ImputComponent Label="Matricula" type="text" Name="matricula" onChange={(e) => setMatricula(e.target.value)}value={matricula} />
                    <ImputComponent Label="Nome" type="text" Name="nome" onChange={(e) => setNome (e.target.value)} value={nome} />
                    <div className="nivel">
                    <label htmlFor="nivel">Nivel:</label>
                    <select name="nivel" id="nivel">
                        <option value="instrutor">INSTRUTOR</option>
                        <option value="coordenador">COORDENADOR</option>
                    </select>
                    </div>
                    <ImputComponent Label ="Telefone" type="text" Name="telefone" onChange={(e) => setTelefone(e.target.value)}value={telefone} />
                    <ImputComponent Label="Email" type="text" Name="email" onChange={(e) => setEmail(e.target.value)}value={email} />
                    <ImputComponent Label="Senha" type="password" Name="senha-cadastro" onChange={(e) => setSenha(e.target.value)}value={senha} />
                    <button className='botao-cadastrar'>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default CadastroPage;