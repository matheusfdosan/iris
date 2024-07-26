export const fetchPosts = () => {
  const now = new Date()
  const date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()

  const posts = [
    {
      id: 1,
      owner: "danrod",
      description:
        "Bush rice positive eye few dry teacher cutting flew palace perhaps influence unknown main kids arrive case hidden against jar actual grabbed loud until",
      likes: ["maheusfdosan", "joaoVitor", "pedroCabral", "arielAriano"],
      time: date,
      comments: [
        {
          owner: "matheusfdosan",
          content: "Receive strong shorter fox air pilot tales high.",
          time: date,
        },
      ],
    },
    {
      id: 2,
      owner: "elonmusk",
      description:
        "Dropped sign hour piano husband believed shown solid coming government inside gas lesson principal machinery find wolf cast produce arrive silence regular job waste",
      likes: ["maheusfdosan", "joaoVitor", "pedroCabral", "arielAriano"],
      time: date,
      comments: [
        {
          owner: "matheusfdosan",
          content: "Receive strong shorter fox air pilot tales high.",
          time: date,
        },
      ],
    },
  ]

  return posts
}
