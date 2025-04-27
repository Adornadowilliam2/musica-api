export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const musicInfo = [
    {
      id: 1,
      name: "Crazy",
      image: "https://github.com/Adornadowilliam2/album/blob/main/crazy_lesserafim.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'CRAZY'%20OFFICIAL%20MV%20%5Bn6B5gQXlB-0%5D.mp3?raw=true"
    },
    {
      id: 2,
      name: "1-800 hot n fun",
      image: "https://github.com/Adornadowilliam2/album/blob/main/1800_hot_n_fun.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/1-800-hot-n-fun%20%5BrGD5U8u1Dk0%5D.mp3?raw=true"
    },
    {
      id: 3,
      name: "Smart",
      image: "https://github.com/Adornadowilliam2/album/blob/main/smart.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Smart'%20OFFICIAL%20MV%20%5BKNexS61fjus%5D.mp3?raw=true"
    },



  ];

  res.status(200).json(musicInfo);
}
