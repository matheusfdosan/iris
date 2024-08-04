import "./Home.css"
import { LateralBar } from "../../components/LateralBar"
import { Header } from "../../components/Header"
import { PostsContainer } from "../../components/PostsContainer"
import { greetings } from "../../utils/greetings"

export const Home = () => {
  return (
    <div className="home-container">
      <LateralBar />

      <div className="posts-view">
        <Header user={["https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg", "Matheus Faustino"]} greetings={greetings()} />
        <main>
          <h1>Postagens</h1>
          <div className="posts-container">
            <PostsContainer />
          </div>
        </main>
      </div>
    </div>
  )
}
