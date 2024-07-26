import { ProfilePicture } from "../ProfilePicture"
import "./styles.css"

export const Header = ({ username, url, greetings }) => {
  return (
    <header>
      <div className="header-container">
        <div className="user-profile">
          <ProfilePicture
            image={url}
            alternative={username + "-picture"}
          />
          <div className="userinfo">
            <p>{username}</p>
            <span className="greetings">{greetings}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
