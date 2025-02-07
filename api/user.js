export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const musicaInfo = [
    {
      id:1,
      name:"Crazy",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/crazy-lesserafim.png?raw=true",
      music:"https://github.com/Adornadowilliam2/songs/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'CRAZY'%20OFFICIAL%20MV%20%5Bn6B5gQXlB-0%5D.mp3?raw=true"
    },
    {
      id:2,
      name: "1-800 hot n fun",
      image: "https://github.com/Adornadowilliam2/shuffle-react/blob/main/1800%20hot%20n%20fun.png?raw=true",
      music:"https://github.com/Adornadowilliam2/songs/blob/main/1-800-hot-n-fun%20%5BrGD5U8u1Dk0%5D.mp3?raw=true"
    },
    {
      id:3,
      name: "Smart",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/smart.png?raw=true",
      music:"https://github.com/Adornadowilliam2/songs/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Smart'%20OFFICIAL%20MV%20%5BKNexS61fjus%5D.mp3?raw=true"
    },
    {
      id:4,
      name:"Whiplash",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/whiplash.png?raw=true",
      music:"https://github.com/Adornadowilliam2/songs/blob/main/aespa%20%EC%97%90%EC%8A%A4%ED%8C%8C%20'Whiplash'%20MV%20%5BjWQx2f-CErU%5D.mp3?raw=true"
    },
    {
      id:5,
      name:"Antifragile",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/antifragile.png?raw=true",
      music: "https://github.com/Adornadowilliam2/songs/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'ANTIFRAGILE'%20OFFICIAL%20M%E2%A7%B8V%20%5Bpyf8cbqyfPs%5D.mp3?raw=true"
    },
    {
      id:6,
      name:"Perfect Night",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/perfectnight.png?raw=true",
      music:"https://github.com/Adornadowilliam2/songs/blob/main/LE SSERAFIM (르세라핌) 'Perfect Night' OFFICIAL M⧸V with OVERWATCH 2 (Choreography ver.) [oKBwWQI-IoI].mp3?raw=true"
  ]
  res.status(200).json(musicaInfo);
}
