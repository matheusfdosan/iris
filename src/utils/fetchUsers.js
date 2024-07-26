export const fetchUsers = () => {
  const users = [
    {
      id: 1,
      username: "matheusfdosan",
      name: "Matheus Faustino",
      gender: "Masculino",
      email: "matheusfdosan@email.com",
      password: "40028922",
      profilePicture:
        "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg",
      followed: 1,
      followers: 1,
    },
    {
      id: 2,
      username: "danrod",
      name: "Daniel Rodrigues",
      gender: "Masculino",
      email: "danrod@email.com",
      password: "w1mDnliVhNSW5yEL",
      profilePicture:
        "https://s2.glbimg.com/Ds5qBNuEIfW38uAbmEDlNPgXxfc=/smart/e.glbimg.com/og/ed/f/original/2016/09/23/sheldon.jpg",
      followed: 1,
      followers: 1,
    },
  ]

  return users
}
