import { useState } from "react"
import { ProfilePicture } from "../ProfilePicture"
import { Link } from "react-router-dom"
import "./styles.css"

import cross from "../../assets/icons/cross.svg"

export const Header = ({ user, greetings }) => {
  const [burguer, setBurguer] = useState("burguer")
  const openNavigate = () => {
    if (burguer === "burguer") {
      setBurguer("burguer active")
    } else {
      setBurguer("burguer")
    }
  }

  return (
    <header>
      <div className="header-container">
        <div className="user-profile">
          <ProfilePicture image={user[0]} alternative={user[1] + "-picture"} />
          <div className="userinfo">
            <p>{user[1]}</p>
            <span className="greetings">{greetings}</span>
          </div>
        </div>
      </div>

      <div className="burguer-container">
        <div className={burguer} onClick={openNavigate}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <nav>
            <div className="close-burguer">
              <img src={cross} alt="close" />
            </div>
            <ul>
              <li>
                <Link to="/home">
                  <span>Principal</span>
                </Link>
              </li>
              <li>
                <Link to="/navigate">
                  <span>Navegar</span>
                </Link>
              </li>
              <li>
                <Link to="/updates">
                  <span>Atualizações</span>
                </Link>
              </li>
              <li>
                <Link to="/newPost">
                  <span>Postar</span>
                </Link>
              </li>
              <li>
                <Link to="/chat">
                  <span>Chats</span>
                </Link>
              </li>
              <li>
                <Link to="/account">
                  <span>Conta</span>
                </Link>
              </li>
              <li>
                <Link to="/preferences">
                  <span>Preferências</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
