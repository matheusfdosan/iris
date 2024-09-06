import { ProfilePicture } from "../ProfilePicture"
import comments from "../../assets/icons/message-icon.svg"
import heartOutlined from "../../assets/icons/heart-icon-outlined.svg"
// import heartFilled from "../../assets/icons/heart-icon-filled.svg"
import "./styles.css"
import LikesModal from "../LikesModal"
import CommentsModal from "../CommentsModal"
import { useState } from "react"
import { Input } from "../Input"
import { Button } from "../Button"

export const Post = ({
  ownerName,
  descriptionData,
  ownerProfilePicture,
  likesData,
  timeData,
  commentsData,
}) => {
  const [showLikesModal, setShowLikesModal] = useState(false)
  const [showCommentsModal, setShowCommentsModal] = useState(false)

  const handleOpenLikesModal = () => {
    setShowLikesModal(true)
  }

  const handleCloseLikesModal = () => {
    setShowLikesModal(false)
  }

  const handleOpenCommentsModal = () => {
    setShowCommentsModal(true)
  }

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false)
  }

  const handleSendComment = () => {
    console.log("commentário enviado")
  }

  return (
    <div className="post">
      <header>
        <ProfilePicture
          image={ownerProfilePicture}
          alternative={ownerName + "-picture"}
        />
        <p>
          {ownerName} <span>{timeData}</span>
        </p>
      </header>
      <main>
        <div className="post-content">
          {descriptionData}
          <div className="likes-comments">
            <button onClick={handleOpenLikesModal}>
              <img src={heartOutlined} alt="like-icon" /> {likesData} Likes
            </button>
            <button onClick={handleOpenCommentsModal}>
              <img src={comments} alt="comment-icon" /> {commentsData}{" "}
              Comentários
            </button>
          </div>
        </div>
      </main>
      <LikesModal show={showLikesModal} onClose={handleCloseLikesModal}>
        <div className="modal-header">
          <h2>Likes nessa postagem</h2>
          

        </div>
        <ul>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
          <li>
            <ProfilePicture
              image={
                "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              }
              alternative={"person-img"}
            />
            <a href="MaeBowen">Mae Bowen</a>
          </li>
        </ul>
      </LikesModal>
      <CommentsModal
        show={showCommentsModal}
        onClose={handleCloseCommentsModal}
      >
        <h2>Comentários nessa postagem</h2>
        <div className="your-comment">
          <Input
            labelText="Escreva seu comentário"
            id="commentary-input"
            type="text"
            placeholder="O que você acha?"
          />
          <Button
            title="Enviar"
            type="submit"
            clickButton={handleSendComment}
            color="white"
          />
        </div>
        <ul>
          <li>
            <div className="comment-body">
              <ProfilePicture
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiEEOffG5jtEMQxgsXv4JNfH95NRto0onBth7Wcm3mYmzXmzLs0d_LkLsGfB3LyW2MViWg_FoRq_F2F7rrOQZF5ldq5H2p_yYy6JsUJQ"
                alternative="Leonard Hofstadter"
              />
              <div>
                <h3>Leonard Hofstadter</h3>
                <p>
                  bad enjoy typical crowd gray steady kill these written merely
                  ability plate diameter answer toward satisfied box exist
                  officer sharp plural apple involved flies
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="comment-body">
              <ProfilePicture
                image="https://rollingstone.com.br/media/_versions/howard-the-big-bang-theory-reproducao-cbs_widelg.jpg"
                alternative="Howard Wolowitz"
              />
              <div>
                <h3>Howard Wolowitz</h3>
                <p>
                  travel clean
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="comment-body">
              <ProfilePicture
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiEEOffG5jtEMQxgsXv4JNfH95NRto0onBth7Wcm3mYmzXmzLs0d_LkLsGfB3LyW2MViWg_FoRq_F2F7rrOQZF5ldq5H2p_yYy6JsUJQ"
                alternative="Leonard Hofstadter"
              />
              <div>
                <h3>Bobby Mack</h3>
                <p>
                  claws picture dirty stream chicken cotton already value element engine empty purpose my daily rest zoo stage stop situation familiar straw pencil happy interior
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="comment-body">
              <ProfilePicture
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiEEOffG5jtEMQxgsXv4JNfH95NRto0onBth7Wcm3mYmzXmzLs0d_LkLsGfB3LyW2MViWg_FoRq_F2F7rrOQZF5ldq5H2p_yYy6JsUJQ"
                alternative="Leonard Hofstadter"
              />
              <div>
                <h3>Eula Phillips</h3>
                <p>
                  government pie belong cross scared usually least count supply wait gift slept snake nearby similar whole higher rear failed alive wool central he desk
                </p>
              </div>
            </div>
          </li>
        </ul>
      </CommentsModal>
    </div>
  )
}
