import '../App.css';
import '../index.css';
import WinkImage from '../assets/wink-white.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalError from "../componentsRoot/ModalError";

function Login() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    function handleSubmit(event) {
        event.preventDefault();
        const authData = enteredValues;

        const response = fetch("http://localhost:3700/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData),
        })

            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then(data => {
                        throw new Error(data.error || "Falha ao autenticar");
                    });
                }
            })

            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('role', data.role);

                navigate("/");
            })

            .catch((error) => {
                if (error.message.includes("Utilizador não encontrado")) {
                    setErrorMessage("Não existe nenhum resgisto com este e-mail!");
                } else if (error.message.includes("Senha incorreta")) {
                    setErrorMessage("A senha está incorreta. Verifique e tente novamente.");
                }

                setShowModal(true);
            });
    }

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => (
            {
                ...prevValues,
                [identifier]: value
            }
        ));
    }

    return (
        <>
            {showModal && (
                <ModalError
                    subtitle={"Erro"}
                    message={errorMessage}
                    onClose={() => setShowModal(false)}
                />
            )}
            <div className="containerLoginWrapper">
                {/* Coluna de login */}
                <div className="containerLogin">
                    <form className="LoginForm" onSubmit={handleSubmit}>
                        <h1>Bem-Vindo!</h1>
                        <h5>Faça o login para dar início à sua sessão</h5>
                        <div className="innerForm">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={(event) => handleInputChange('email', event.target.value)}
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Insira aqui o seu email"
                                    value={enteredValues.email}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={(event) => handleInputChange('password', event.target.value)}
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Insira aqui a sua password"
                                    value={enteredValues.password}
                                />
                                <p>Esqueceu a sua password? Clique aqui</p>
                            </div>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                {/* Coluna de imagem */}
                <div className="loginImage">
                    <img src={WinkImage} alt="smile180" />
                </div>
            </div>
        </>
    )
}

export default Login;