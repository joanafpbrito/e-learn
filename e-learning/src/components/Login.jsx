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
        <div className="container">
            <div className="sideIMG">
                <img src="src\assets\logo 180 academy sem fundo blck.png" alt="" />
            </div>
            <form className="LoginForm" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="innerForm">
                    <div >
                        <label htmlFor="email">Email</label>
                        <input onChange={(event) => handleInputChange('email', event.target.value)}
                            id="email" type="email" name="email" value={enteredValues.email} />
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input onChange={(event) => handleInputChange('password', event.target.value)}
                            id="password" type="password" name="password" value={enteredValues.password} />
                    </div>
                </div>
                <p><button type='submit'>Login</button></p>
            </form>
        </div>
        </>
    )
}

export default Login;