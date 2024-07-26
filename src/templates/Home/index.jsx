import "./Home.css"
import { LateralBar } from "../../components/LateralBar"
import { Header } from "../../components/Header"
import { PostsContainer } from "../../components/PostsContainer"
import { greetings } from "../../utils/greetings"
import { fetchPosts } from "../../utils/fetchPosts"
import { fetchUsers } from "../../utils/fetchUsers"

export const Home = () => {
  return (
    <div className="home-container">
      <LateralBar />

      <div className="posts-view">
        <Header
          url={fetchUsers()[0].profilePicture}
          username={"Matheus Faustino"}
          greetings={greetings()}
        />
        <main>
          <h1>Postagens de quem você segue</h1>
          <div className="posts-container">
            <PostsContainer posts={fetchPosts()} />
          </div>
        </main>
      </div>
    </div>
  )
}
