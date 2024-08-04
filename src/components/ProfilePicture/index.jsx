import "./styles.css"

export const ProfilePicture = ({ image, alternative }) => {
  return (      <img className="profile-picture" src={image} alt={alternative} />
  )
}
