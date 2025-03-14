export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const musicInfo = [
    {
      id: 1,
      name: "Crazy",
      image: "https://github.com/Adornadowilliam2/album/blob/main/crazy-lesserafim.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'CRAZY'%20OFFICIAL%20MV%20%5Bn6B5gQXlB-0%5D.mp3?raw=true"
    },
    {
      id: 2,
      name: "1-800 hot n fun",
      image: "https://github.com/Adornadowilliam2/album/blob/main/1800%20hot%20n%20fun.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/1-800-hot-n-fun%20%5BrGD5U8u1Dk0%5D.mp3?raw=true"
    },
    {
      id: 3,
      name: "Smart",
      image: "https://github.com/Adornadowilliam2/album/blob/main/smart.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Smart'%20OFFICIAL%20MV%20%5BKNexS61fjus%5D.mp3?raw=true"
    },
    {
      id: 4,
      name: "Antifragile",
      image: "https://github.com/Adornadowilliam2/album/blob/main/antifragile.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'ANTIFRAGILE'%20OFFICIAL%20M%E2%A7%B8V%20%5Bpyf8cbqyfPs%5D.mp3?raw=true"
    },
    {
      id: 5,
      name: "Perfect Night",
      image: "https://github.com/Adornadowilliam2/album/blob/main/perfectnight.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/LE%20SSERAFIM%20(%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C)%20'Perfect%20Night'%20OFFICIAL%20M%E2%A7%B8V%20with%20OVERWATCH%202%20(Choreography%20ver.)%20%5BoKBwWQI-IoI%5D.mp3?raw=true"
    },
    {
      id: 6,
      name: "Whiplash",
      image: "https://github.com/Adornadowilliam2/album/blob/main/whiplash.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/aespa%20%EC%97%90%EC%8A%A4%ED%8C%8C%20'Whiplash'%20MV%20%5BjWQx2f-CErU%5D.mp3?raw=true"
    },
    {
      id: 7,
      name: "Drama",
      image: "https://github.com/Adornadowilliam2/album/blob/main/drama.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/aespa(%EC%97%90%EC%8A%A4%ED%8C%8C)%20-%20Drama%20%40%EC%9D%B8%EA%B8%B0%EA%B0%80%EC%9A%94%20inkigayo%2020231112%20%5B1c_3pK15yWg%5D.mp3?raw=true"
    },
    {
      id: 8,
      name: "Strategy",
      image: "https://github.com/Adornadowilliam2/album/blob/main/strategy-twice.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/TWICE%20%E2%80%9CStrategy%20(feat.%20Megan%20Thee%20Stallion)%E2%80%9D%20M%E2%A7%B8V%20%5BSz_wWzgh-vQ%5D.mp3?raw=true"
    },
    {
      id: 9,
      name: "Nobody",
      image: "https://github.com/Adornadowilliam2/album/blob/main/nobody-onerepublic.png?raw=true",
      music: "https://github.com/Adornadowilliam2/anime-song/blob/main/OneRepublic%20-%20Nobody%20(from%20Kaiju%20No.%208)%20%5BOfficial%20Lyric%20Video%5D%20%5BChukpOHfAI8%5D.mp3?raw=true"
    },
    {
      id: 10,
      name: "Marilag",
      image: "https://github.com/Adornadowilliam2/album/blob/main/marilag.png?raw=true",
      music: "https://github.com/Adornadowilliam2/opm-song/blob/main/Marilag%20(Live%20at%20The%20Cozy%20Cove)%20-%20Dionela%20%5BbD9whtdq7dw%5D.mp3?raw=true"
    },
    {
      id: 11,
      name: "Sining",
      image: "https://github.com/Adornadowilliam2/album/blob/main/sining.png?raw=true",
      music: "https://github.com/Adornadowilliam2/opm-song/blob/main/Dionela%20-%20sining%20ft.%20Jay%20R%20%5BLLqDfGFMJbk%5D.mp3?raw=true"
    },
    {
      id: 12,
      name: "Universe",
      image: "https://github.com/Adornadowilliam2/album/blob/main/universe.png?raw=true",
      music: "https://github.com/Adornadowilliam2/anime-song/blob/main/Official%E9%AB%AD%E7%94%B7dism%20-%20Universe%EF%BC%BBOfficial%20Live%20Video%EF%BC%BD%20%5BRvwc5_PpLuY%5D.mp3?raw=true"
    },
    {
      id: 13,
      name: "Geronimo",
      image: "https://github.com/Adornadowilliam2/album/blob/main/geronimo.png?raw=true",
      music: "https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Sheppard%20-%20Geronimo%20(Official%20Music%20Video)%20%5BUL_EXAyGCkw%5D.mp3?raw=true"
    },
    {
      id:14,
      name:"Goo goo dolls",
      image:"https://github.com/Adornadowilliam2/album/blob/main/goo-goo-iris.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Goo%20Goo%20Dolls%20-%20Iris%20(Lyrics)%20%5BnYrEL9ecAWA%5D.mp3?raw=true"
    },
    {
      id: 15,
      name: "Viva la vida",
      image: "https://github.com/Adornadowilliam2/album/blob/main/vivalavida.png?raw=true",
      music: "https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Coldplay%20-%20Viva%20La%20Vida%20(Official%20Video)%20%5BdvgZkm1xWPE%5D.mp3?raw=true"
    },
    {
      id: 16,
      name: "Fresh eyes",
      image: "https://github.com/Adornadowilliam2/album/blob/main/fresheyes-andy.png?raw=true",
      music: "https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Andy%20Grammer%20-%20Fresh%20Eyes%20(Official%20Music%20Video)%20%5B5bgemCaaQkU%5D.mp3?raw=true"
    },
    {
      id: 17,
      name: "Run sakamoto run",
      image: "https://github.com/Adornadowilliam2/album/blob/main/runsakamotorun-vaundy.png?raw=true",
      music: "https://github.com/Adornadowilliam2/anime-song/blob/main/%E8%B5%B0%E3%82%8CSAKAMOTO%20%E2%80%93%20RUN%20SAKAMOTO%20RUN%20%E2%80%93%20Opening%20theme%20to%20SAKAMOTO%20DAYS%20%5Buj1DkgXSR4w%5D.mp3?raw=true"
    },
    {
      id:18,
      name:"Be a flower",
      image:"https://github.com/Adornadowilliam2/album/blob/main/be-a-flower.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Be%20a%20flower%20%5BvoAu0YRWUNE%5D.mp3?raw=true"
    },
    {
      id:19,
      name:"I really want to stay at your house",
      image:"https://github.com/Adornadowilliam2/album/blob/main/cyberpunk.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/CYBERPUNK%202077%20SOUNDTRACK%20-%20I%20REALLY%20WANT%20TO%20STAY%20AT%20YOUR%20HOUSE%20by%20Rosa%20Walton%20%26%20Hallie%20Coggins%20%5BgzbLODUb1sA%5D.mp3?raw=true"
    },
    {
      id:20,
      name:"I hate everything about you",
      image:"https://github.com/Adornadowilliam2/album/blob/main/ihateeverythingaboutyou.png?raw=true",
      music:"https://github.com/Adornadowilliam2/rock-song/blob/main/Three%20Days%20Grace%20-%20I%20Hate%20Everything%20About%20You%20(Official%20Video)%20%5Bd8ekz_CSBVg%5D.mp3?raw=true"
    },
    {
      id:21,
      name:"Killing my love",
      image:"https://github.com/Adornadowilliam2/album/blob/main/killingmylove.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Leslie%20Parrish%20-%20Killing%20My%20Love%20(Lyrics%20and%20Visualizer)%20%5B0V11r3GOfYk%5D.mp3?raw=true"
    },
    {
      id:22,
      name:"Haku",
      image:"https://github.com/Adornadowilliam2/album/blob/main/mono-no-aware.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/%E3%80%90%E3%83%8F%E3%82%AF%E3%80%82Cover%E4%BC%81%E7%94%BB%E3%80%91MONO%20NO%20AWARE%20%EF%BC%82%E3%81%8B%E3%82%80%E3%81%8B%E3%82%82%E3%81%97%E3%81%8B%E3%82%82%E3%81%AB%E3%81%A9%E3%82%82%E3%81%8B%E3%82%82%EF%BC%81%EF%BC%82%20%5BJ76S5q_ETfo%5D.mp3?raw=true"
    },
    {
      id:23,
      name:"Without any words",
      image:"https://github.com/Adornadowilliam2/album/blob/main/wihtout-any-words.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/SIX%20LOUNGE%E3%80%8C%E8%A8%80%E8%91%89%E3%81%AB%E3%81%9B%E3%81%9A%E3%81%A8%E3%82%82%E3%80%8DMusic%20Video%20%5BJP2m2eZ9aLc%5D.mp3?raw=true",
     
    },
    {
      id:24,
      name:"Never meant to Belong",
      image:"https://github.com/Adornadowilliam2/album/blob/main/never-meant.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Never%20Meant%20To%20Belong%20-%20Bleach%20(Intermediate%20Tutorial)%20%5Bb9-Ci_D2n5c%5D.mp3?raw=true"
    },
    {
      id:25,
      name:"You found me",
      image:"https://github.com/Adornadowilliam2/album/blob/main/you-found-me.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/The%20Fray%20-%20You%20Found%20Me%20%5BjFg_8u87zT0%5D.mp3?raw=true"
    },
    {
      id:26,
      name:"Whatever you will you go",
      image:"https://github.com/Adornadowilliam2/album/blob/main/The_calling_wherever_you.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/The%20Calling%20-%20Wherever%20You%20Will%20Go%20(First%20Video-%20in%20Tijuana)%20%5BiAP9AF6DCu4%5D.mp3?raw=true"
    },
    {
      id:27,
      name:"Bad day",
      image:"https://github.com/Adornadowilliam2/album/blob/main/bad-day.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Daniel%20Powter%20-%20Bad%20Day%20(Official%20Music%20Video)%20%5BHD%5D%20%5BgH476CxJxfg%5D.mp3?raw=true"
    },
    {
      id:28,
      name:"The fold",
      image:"https://github.com/Adornadowilliam2/album/blob/main/ninjago.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/LEGO%20NINJAGO%20%EF%BD%9C%20The%20Fold%20%EF%BD%9C%20The%20Weekend%20Whip%20(Official%20Theme%20Song)%20%5BIl7y6VwDrrw%5D.mp3?raw=true"
    },
    {
      id:29,
      name:"Life is highway",
      image:"https://github.com/Adornadowilliam2/album/blob/main/light-is-a-highway.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Rascal%20Flatts%20-%20Life%20Is%20a%20Highway%20(From%20%EF%BC%82Cars%EF%BC%82%E2%A7%B8Official%20Video)%20%5B5tXh_MfrMe0%5D.mp3?raw=true"
    },
    {
      id:30,
      name:"Complicated",
      image:"https://github.com/Adornadowilliam2/album/blob/main/complicated.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Avril%20Lavigne%20-%20Complicated%20(Official%20Video)%20%5B5NPBIwQyPWE%5D.mp3?raw=true"
    },
    {
      id:31,
      name:"Mambo no 5",
      image:"https://github.com/Adornadowilliam2/album/blob/main/mambo-no-5.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Lou%20Bega%20-%20Mambo%20No.%205%20(A%20Little%20Bit%20of...)%20%5BEK_LN3XEcnw%5D.mp3?raw=true"
    },
    {
      id:32,
      name:"4:00 am",
      image:"https://github.com/Adornadowilliam2/album/blob/main/four_am.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/Taeko%20%C5%8Cnuki%20(%E5%A4%A7%E8%B2%AB%E5%A6%99%E5%AD%90)%20-%204_00%20AM%20%5BLyrics%20Kan%E2%A7%B8Rom%E2%A7%B8Eng%5D%20%5Bd76F_B8wxZ4%5D.mp3?raw=true"
    },
    {
      id:33,
      name:"Duvet",
      image:"https://github.com/Adornadowilliam2/album/blob/main/duvet.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/B%C3%B4a%20-%20%20Duvet%20(Official%20Video)%20%5BUoox9fpmDP0%5D.mp3?raw=true"
    },
    {
      id:34,
      name:"505",
      image:"https://github.com/Adornadowilliam2/album/blob/main/505.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/505%20%5BqU9mHegkTc4%5D.mp3?raw=true"
    },
    {
      id:35,
      name:"Glimpse of us",
      image:"https://github.com/Adornadowilliam2/album/blob/main/Joji_-_Glimpse_of_Us.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Joji%20-%20Glimpse%20Of%20Us%20%5B_x3UltzBxjw%5D.mp3?raw=true"
    },
    {
      id:36,
      name:"Rasputin",
      image:"https://github.com/Adornadowilliam2/album/blob/main/rasputin.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Boney%20M.%20-%20Rasputin%20(Sopot%20Festival%201979)%20%5B16y1AkoZkmQ%5D.mp3?raw=true"
    }


  ];

  res.status(200).json(musicInfo);
}
