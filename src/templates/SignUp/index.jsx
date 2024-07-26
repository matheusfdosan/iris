import "./SignUp.css"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
import Logo from "../../assets/favicon.svg"

export const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="view-signup">
        <div className="blur"></div>
        <div className="blur"></div>
        <header>
          <a href="/">
            <img src={Logo} alt="iris-logo" />
          </a>
        </header>
        <main>
          <form>
            <h1>Faça o cadastro para começar a diversão. 😛</h1>

            <Input
              labelText="Email"
              id="email-input"
              type="email"
              placeholder="Digite seu email aqui"
            />

            <Input
              labelText="Senha"
              id="password-input"
              type="password"
              placeholder="Crie uma senha"
            />

            <Input
              labelText="Confirme sua senha"
              id="confirm-password-input"
              type="password"
              placeholder="Confirme sua senha"
            />

            <Button type="submit" title="Cadastrar" color="white" />
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
