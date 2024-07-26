import "./Login.css"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import Logo from "../../assets/favicon.svg"

export const Login = () => {
  return (
    <div className="login-container">
      <div className="view-login">
        <header>
          <a href="/">
            <img src={Logo} alt="iris-logo" />
          </a>
        </header>
        <main>
          <form>
            <h1>Faça login para continuar cutindo a vida adoidado. 😋</h1>

            <Input
              labelText="Email"
              id="email-input"
              type="email"
              placeholder="Digite seu email"
            />

            <Input
              labelText="Senha"
              id="password-input"
              type="password"
              placeholder="Digite sua senha"
            />

            <Button type="submit" title="Login" color="white" />
          </form>
        </main>
      </div>
      <footer>
        <div className="footer-container">
          <h2>Iris</h2>

          <ul>
            <li>
              <h3>Autenticação</h3>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Cadastro</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
