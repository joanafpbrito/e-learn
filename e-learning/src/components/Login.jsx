import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

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
                    throw new Error("Failed to authenticate");
                }
            })

            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('role', data.role)
                if (data.role === 'admin') {
                    navigate('/admin');
                }
                if (data.role === 'user') {
                    navigate('/user');
                }
                if (data.role === '180') {
                    navigate('/180');
                }
                if (data.role === 'teacher') {
                    navigate('/teacher');
                }
            })
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
        <div className="containerLogin">
            {/* <div className="sideIMG">
                <img src="src\assets\logo180black.png" alt="" />
            </div> */}
            <form className="LoginForm" onSubmit={handleSubmit}>
                <h1>Bem-Vindo!</h1>
                <h5>Faça login para dar início à sua sessão</h5>
                <div className="innerForm">
                    <div >
                        <label htmlFor="email">Email</label>
                        <input onChange={(event) => handleInputChange('email', event.target.value)}
                            id="email" type="email" name="email" placeholder="Insira aqui o seu email" value={enteredValues.email} />
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input onChange={(event) => handleInputChange('password', event.target.value)}
                            id="password" type="password" name="password" placeholder="Insira aqui a sua password"  value={enteredValues.password} />
                            <p >Esqueceu a sua password? Clique aqui</p>
                    </div>
                </div>
                <p><button type='submit'>Login</button></p>
            </form>
        </div>
    )
}

export default Login;