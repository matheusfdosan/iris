import "./Landing.css"
import Logo from "../../assets/favicon.svg"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"

export const Landing = () => {
  const navigate = useNavigate()

  const handleLoginButton = () => {
    navigate("/login")
  }

  const handleSignUpButton = () => {
    navigate("/signup")
  }

  return (
    <div className="landing-container">
      <div className="hero">
        <header>
          <img src={Logo} alt="iris-logo" />
        </header>
        <main>
          <h1>
            Conexões que brilham, momentos que marcam, compartilhe seu mundo!
          </h1>
          <p>
            A Iris é a rede social que coloca a felicidade em primeiro lugar.
            Conecte-se com amigos, compartilhe momentos inesquecíveis e espalhe
            positividade. Descubra histórias emocionantes, crie memórias e deixe
            sua criatividade brilhar.
          </p>
          <div className="buttons">
            <Button
              clickButton={handleLoginButton}
              title="Login"
              color="white"
            />
            <Button
              clickButton={handleSignUpButton}
              title="Cadastro"
              color="dark"
            />
          </div>
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
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Cadastro</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
