export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const musicaInfo = [
    {
      id:1,
      name:"Crazy",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/crazy-lesserafim.png?raw=true"
    },
    {
      id:2,
      name: "1-800 hot n fun",
      image: "https://github.com/Adornadowilliam2/shuffle-react/blob/main/1800%20hot%20n%20fun.png?raw=true"
    },
    {
      id:3,
      name: "Smart",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/smart.png?raw=true"
    },
    {
      id:4,
      name:"Whiplash",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/whiplash.png?raw=true"
    }
  ]
  res.status(200).json(musicaInfo);
}
