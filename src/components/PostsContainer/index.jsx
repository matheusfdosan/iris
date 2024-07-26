import { fetchUsers } from "../../utils/fetchUsers"
import { Post } from "../Post"
import "./styles.css"

export const PostsContainer = ({ posts }) => {
  const discoverOwner = () => {
    return fetchUsers().filter((postOwner) =>
      postOwner.username = (posts.map((post) => post.owner))
    )
  }

  console.log(discoverOwner())

  return (
    <div className="post-container">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            ownerData={post.owner}
            ownerProfilePicture={discoverOwner()}
            descriptionData={post.description}
            likesData={post.likes.length}
            timeData={post.time}
            commentsData={post.comments.length}
          ></Post>
        )
      })}
    </div>
  )
}
