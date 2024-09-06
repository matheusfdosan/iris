import { Button } from "../Button"
import "./styles.css"

const LikesModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-content">{children}</div>
        <div className="modal-footer">
         
        </div>
      </div>
    </div>
  );
};

export default LikesModal;

