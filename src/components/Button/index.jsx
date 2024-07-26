import "./styles.css"

export const Button = ({ title, type, clickButton, color }) => {
  return (
    <button type={type} className={[`${color}-button button-component`]} onClick={clickButton} >
      {title}
    </button>
  )
}
