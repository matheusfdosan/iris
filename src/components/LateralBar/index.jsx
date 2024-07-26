import "./styles.css"
import Logo from "../../assets/favicon.svg"
import { Link } from "react-router-dom"

import starIcon from "../../assets/icons/star-icon-outlined.svg"
import navigateIcon from "../../assets/icons/navigate-icon-outlined.svg"
import updatesIcon from "../../assets/icons/updates-icon.svg"
import newPostsIcon from "../../assets/icons/create-post.svg"
import accountIcon from "../../assets/icons/user-profile-icon.svg"
import preferencesIcon from "../../assets/icons/preferences-icon.svg"
import chatIcon from "../../assets/icons/chat-icon.svg"

export const LateralBar = () => {
  return (
    <aside className="lateral-bar-container">
      <div className="top">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <img src={starIcon} alt="home-icon" />
              <span>Principal</span>
            </Link>
          </li>
          <li>
            <Link to="/navigate">
              <img src={navigateIcon} alt="navigate-icon" />
              <span>Navegar</span>
            </Link>
          </li>
          <li>
            <Link to="/updates">
              <img src={updatesIcon} alt="updates-icon" />
              <span>Atualizações</span>
            </Link>
          </li>
          <li>
            <Link to="/newPost">
              <img src={newPostsIcon} alt="new-post-icon" />
              <span>Postar</span>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <img src={chatIcon} alt="chat-icon" />
              <span>Chats</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img src={accountIcon} alt="user-account-icon" />
              <span>Conta</span>
            </Link>
          </li>
          <li>
            <Link to="/preferences">
              <img src={preferencesIcon} alt="preferences" />
              <span>Preferências</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
