import { ProfilePicture } from "../ProfilePicture"
import "./styles.css"

export const Header = ({ user, greetings }) => {
  return (
    <header>
      <div className="header-container">
        <div className="user-profile">
          <ProfilePicture
            image={user[0]}
            alternative={user[1] + "-picture"}
          />
          <div className="userinfo">
            <p>{user[1]}</p>
            <span className="greetings">{greetings}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
