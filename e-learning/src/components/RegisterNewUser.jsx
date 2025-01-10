import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function RegisterNewUser() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  const [selectedLimits, setSelectedLimits] = useState([]);

  const role = localStorage.getItem('role');

  function generatePassword() {
    const pass = Math.random().toString(36).slice(-10);
    setPassword(pass);
  }

  function handleCheckboxChange(e) {
    const value = parseInt(e.target.value, 10);
    setSelectedLimits((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((num) => num !== value)
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries())

    if (data.password != data.confirmPassword) {
      setPasswordsAreNotEqual(true);
      return;
    }

    const user = {
      email: data.email,
      password: password,
      company: data.company,
      department: data.department,
      firstName: data['first-name'],
      lastName: data['last-name'],
      role: data.role,
      ableToRegister: data['able-to-register'],
      howMany: selectedLimits
    }

    const response = fetch("http://localhost:3700/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }
    )

    navigate("/", {
      state: { message: "User successfully registered!" }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registo</h1>
      <h5>Faça o registo de um novo utilizador</h5>
      <div>
        <label htmlFor="company">Nome Completo</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="company">Nome de Utilizador</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="company">Email</label>
        <input type="email" id="email" name="email" required />
        <div className='DivGerar'>
          <div>
            <label htmlFor="email">Password</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className='btGerar'>
            <p className='containerPass'>{password}</p>
            <label htmlFor="password"> <button className="Gerar" type="button" onClick={() => generatePassword()}>Gerar Password</button> </label>
          </div>
        </div>
        {role == "180" && (
          <>
            <div className='line4'>
              <label htmlFor="role">Tipo de Utilizador:</label>
              <select id="role" name="role" required>
                <option value="180">Administrador</option>
                <option value="admin">Empresa</option>
                <option value="teacher">Formador</option>
                <option value="user">Aluno</option>
              </select>
            </div>
            <div className='line4'>
              <p>Pode registar novos utilizadores?</p>
              <label htmlFor="able-to-register">
                <input type="radio" id="able-to-register" name="able-to-register" value="yes" />Sim
              </label>
              <label htmlFor="able-to-register">
                <input type="radio" id="able-to-register" name="able-to-register" value="no" />Não
              </label>
            </div>
            <div className='line5'>
              <p>Quantos?</p>
              {[5, 10, 15, 20, 25].map((limit) => (
                <label key={limit}>
                  <input type="checkbox" id="how-many" name="how-many" value={limit} onChange={handleCheckboxChange} /> {limit}
                </label>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="checkbox-item">
        <label>
          <input type="checkbox" id="newsletter-consent" name="newsletter-consent" />Li e aceito prestar o meu consentimento para o envio de newsletters (opcional)
        </label>
        <label>
          <input type="checkbox" id="privacy-policy" name="privacy-policy" required />Li e compreendi a Política de Privacidade
        </label>
        <label>
          <input type="checkbox" id="terms-conditions" name="terms-conditions" required />Li, compreendi e aceito os Termos e Condições
        </label>
      </div>
      <div className='btReg'>
        <p><button className='BotaoReg' type="submit">Criar Registo</button></p>
      </div>
    </form>

  );
}

export default RegisterNewUser;