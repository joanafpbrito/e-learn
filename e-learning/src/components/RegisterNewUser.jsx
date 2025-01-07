import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterNewUser() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  const [selectedLimits, setSelectedLimits] = useState([]);

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
      <h1>Registar Novo Utilizador</h1>
      <p>180 Academy - a formar o futuro</p>
      <hr />
      <div className='MainDivReg'>
        <div className='line1'>
          <div>
            <label htmlFor="company">Empresa</label>
            <input type="text" id="company" name="company" required />
          </div>
          <div>
            <label htmlFor="department">Departamento</label>
            <input type="text" id="department" name="department" />
          </div>
        </div>

        <div className='line2'>
          <div>
            <label htmlFor="first-name">Primeiro Nome</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div>
            <label htmlFor="last-name">Último Nome</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
        </div>

        <div className='DivGerar'>
          <div>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className='btGerar'>
            <p className='containerPass'>{password}</p>
            <label htmlFor="password"> <button className="Gerar" type="button" onClick={() => generatePassword()}>Gerar Password</button> </label>
          </div>
        </div>

        <div>
          <label htmlFor="phone">Tipo User</label>
          <select id="role" name="role" required>
            <option value="180">Administrador</option>
            <option value="admin">Empresa</option>
            <option value="user">Funcionário</option>
            <option value="teacher">Formador</option>
          </select>
        </div>

        <div className='line4'>
          <p>Pode registar novos utilizadores?</p>
          <label htmlFor="able-to-register">
            <input type="checkbox" id="able-to-register" name="able-to-register" value="yes" />Sim
          </label>
          <label htmlFor="able-to-register">
            <input type="checkbox" id="able-to-register" name="able-to-register" value="no" />Não
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

        <div className='btReg'>
          <p><button className='BotaoReg' type="submit">Register Employee</button></p>
        </div>

      </div>
    </form>
  );
}

export default RegisterNewUser;