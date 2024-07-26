export const greetings = () => {
  const now = new Date()
  const hour = now.getHours()
  let greetings = "Boa Noite!"

  if (hour >= 0 && hour < 6) {
    greetings = "Boa Madrugada!"
  } else if (hour >= 6 && hour < 12) {
    greetings = "Bom Dia!"
  } else if (hour >= 12 && hour <= 18) {
    greetings = "Boa Tarde!"
  }

  return greetings
}
