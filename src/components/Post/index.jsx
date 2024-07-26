import { ProfilePicture } from "../ProfilePicture"
import { fetchUsers } from "../../utils/fetchUsers"
import { fetchPosts } from "../../utils/fetchUsers"
import comments from "../../assets/icons/message-icon.svg"
import heartOutlined from "../../assets/icons/heart-icon-outlined.svg"
// import heartFilled from "../../assets/icons/heart-icon-filled.svg"
import "./styles.css"

export const Post = ({
  ownerData,
  descriptionData,
  likesData,
  timeData,
  commentsData,
}) => {
  const handleLikes = () => {
    fetchPosts()[0].likes.push("eu")
  }
  const handleComments = () => {
    console.log("Comments")
  }

  return (
    <div className="post">
      <header>
        <ProfilePicture
          image={fetchUsers()[1].profilePicture}
          alternative={fetchUsers()[1].username + "-picture"}
        />
        <p>
          {ownerData} <span>{timeData}</span>
        </p>
      </header>
      <main>
        <div className="post-content">
          {descriptionData}
          <div className="likes-comments">
            <button onClick={handleLikes}>
              <img src={heartOutlined} alt="like-icon" /> {likesData} Likes
            </button>
            <button onClick={handleComments}>
              <img src={comments} alt="comment-icon" /> {commentsData}{" "}
              Comentários
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
