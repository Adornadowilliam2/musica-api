export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const musicaInfo = [
    {
      id:1,
      name:"Crazy",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/crazy-lesserafim.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'CRAZY'%20OFFICIAL%20MV%20%5Bn6B5gQXlB-0%5D.mp3?raw=true"
    },
    {
      id:2,
      name: "1-800 hot n fun",
      image: "https://github.com/Adornadowilliam2/shuffle-react/blob/main/1800%20hot%20n%20fun.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/1-800-hot-n-fun%20%5BrGD5U8u1Dk0%5D.mp3?raw=true"
    },
    {
      id:3,
      name: "Smart",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/smart.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Smart'%20OFFICIAL%20MV%20%5BKNexS61fjus%5D.mp3?raw=true"
    },
    {
      id:4,
      name:"Antifragile",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/antifragile.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'ANTIFRAGILE'%20OFFICIAL%20M%E2%A7%B8V%20%5Bpyf8cbqyfPs%5D.mp3?raw=true"
    },
    {
      id:5,
      name:"Perfect Night",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/perfectnight.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Perfect%20Night'%20OFFICIAL%20M%E2%A7%B8V%20with%20OVERWATCH%202%20(Choreography%20ver.)%20%5BoKBwWQI-IoI%5D.mp3?raw=true"
    },
    {
      id:6,
      name:"Whiplash",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/whiplash.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/aespa%20%EC%97%90%EC%8A%A4%ED%8C%8C%20'Whiplash'%20MV%20%5BjWQx2f-CErU%5D.mp3?raw=true"
    },
    {
      id:6,
      name:"Drama",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/drama.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/aespa(%EC%97%90%EC%8A%A4%ED%8C%8C)%20-%20Drama%20%40%EC%9D%B8%EA%B8%B0%EA%B0%80%EC%9A%94%20inkigayo%2020231112%20%5B1c_3pK15yWg%5D.mp3?raw=true"
    },
    {
      id:7,
      name:"Strategy",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/strategy-twice.png?raw=true",
      music:"https://github.com/Adornadowilliam2/kpop-song/blob/main/TWICE%20%E2%80%9CStrategy%20(feat.%20Megan%20Thee%20Stallion)%E2%80%9D%20M%E2%A7%B8V%20%5BSz_wWzgh-vQ%5D.mp3?raw=true"
    },
    {
      id:8,
      name:"Nobody",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/nobody-onerepublic.png?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/OneRepublic%20-%20Nobody%20(from%20Kaiju%20No.%208)%20%5BOfficial%20Lyric%20Video%5D%20%5BChukpOHfAI8%5D.mp3?raw=true"
    },
    {
      id:9,
      name:"Marilag",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/marilag.png?raw=true",
      music:"https://github.com/Adornadowilliam2/opm-song/blob/main/Marilag%20(Live%20at%20The%20Cozy%20Cove)%20-%20Dionela%20%5BbD9whtdq7dw%5D.mp3?raw=true"
    },
    {
      id:10,
      name:"Sining",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/sining.png?raw=true",
      music:"https://github.com/Adornadowilliam2/opm-song/blob/main/Dionela%20-%20sining%20ft.%20Jay%20R%20%5BLLqDfGFMJbk%5D.mp3?raw=true"
    },
    {
      id:11,
      name:"Universe",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/universe.png?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Official%E9%AB%AD%E7%94%B7dism%20-%20Universe%EF%BC%BBOfficial%20Live%20Video%EF%BC%BD%20%5BRvwc5_PpLuY%5D.mp3?raw=true"
    },
    {
      id:12,
      name:"Geronimo",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/geronimo.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Sheppard%20-%20Geronimo%20(Official%20Music%20Video)%20%5BUL_EXAyGCkw%5D.mp3?raw=true"
    },
    {
      id:13,
      name:"Fresh eyes",
      image:"https://github.com/Adornadowilliam2/shuffle-react/blob/main/fresheyes-andy.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Andy%20Grammer%20-%20Fresh%20Eyes%20(Official%20Music%20Video)%20%5B5bgemCaaQkU%5D.mp3?raw=true"
    },
    {
      id:14,
      name:"Run sakamoto run",
      image:'https://github.com/Adornadowilliam2/shuffle-react/blob/main/runsakamotorun-vaundy.png?raw=true',
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/%E8%B5%B0%E3%82%8CSAKAMOTO%20%E2%80%93%20RUN%20SAKAMOTO%20RUN%20%E2%80%93%20Opening%20theme%20to%20SAKAMOTO%20DAYS%20%5Buj1DkgXSR4w%5D.mp3?raw=true"
    }
  ]
  res.status(200).json(musicaInfo);
}
