import { Link } from "react-router-dom"
import "./styles.css"

export const ProfilePicture = ({ image, alternative }) => {
  return (
    <Link to={"/account"} className="redirect-link">
      {" "}
      <img className="profile-picture" src={image} alt={alternative} />
    </Link>
  )
}
