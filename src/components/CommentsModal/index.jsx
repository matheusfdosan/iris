import { Button } from "../Button"
import "./styles.css"

const CommentsModal = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <Button
            title={"Close"}
            type="button"
            clickButton={onClose}
            color={"dark"}
          />
        </div>
      </div>
    </div>
  )
}

export default CommentsModal
