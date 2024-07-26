import "./styles.css"

export const Input = ({ labelText, id, type, placeholder }) => {
  return (
    <label htmlFor={id}>
      <p>{labelText}:</p>
      <input type={type} id={id} placeholder={placeholder} />
    </label>
  )
}
