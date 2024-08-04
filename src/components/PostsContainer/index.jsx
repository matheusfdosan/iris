import { Post } from "../Post"
import "./styles.css"

export const PostsContainer = () => {
  return (
    <div className="post-container">
      <Post
        key={1}
        ownerName={"Matheus Faustino"}
        ownerProfilePicture={
          "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg"
        }
        descriptionData={
          "ancient distant glass foreign all then kept built party slide examine he skill serve bean floating fierce negative trade within tent smoke speak hurried"
        }
        likesData={32}
        timeData={new Date().toLocaleDateString("pt-br")}
        commentsData={2}
      ></Post>
      <Post
        key={2}
        ownerName={"Daniel Rodrigues"}
        ownerProfilePicture={
          "https://s2.glbimg.com/Ds5qBNuEIfW38uAbmEDlNPgXxfc=/smart/e.glbimg.com/og/ed/f/original/2016/09/23/sheldon.jpg"
        }
        descriptionData={
          "throw till area flies variety pride wonderful dangerous build leather herself heat mood truck suppose angry likely silly chair bag pile verb take earlier"
        }
        likesData={12}
        timeData={new Date().toLocaleDateString("pt-br")}
        commentsData={6}
      ></Post>
    </div>
  )
}
