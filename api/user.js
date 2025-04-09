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
      image: "https://github.com/Adornadowilliam2/album/blob/main/strategy_twice.png?raw=true",
      music: "https://github.com/Adornadowilliam2/kpop-song/blob/main/TWICE%20%E2%80%9CStrategy%20(feat.%20Megan%20Thee%20Stallion)%E2%80%9D%20M%E2%A7%B8V%20%5BSz_wWzgh-vQ%5D.mp3?raw=true"
    },
    {
      id: 9,
      name: "Nobody",
      image: "https://github.com/Adornadowilliam2/album/blob/main/nobody_onerepublic.png?raw=true",
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
      image:"https://github.com/Adornadowilliam2/album/blob/main/goo_goo_iris.png?raw=true",
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
      image: "https://github.com/Adornadowilliam2/album/blob/main/fresheyes_andy.png?raw=true",
      music: "https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Andy%20Grammer%20-%20Fresh%20Eyes%20(Official%20Music%20Video)%20%5B5bgemCaaQkU%5D.mp3?raw=true"
    },
    {
      id: 17,
      name: "Run sakamoto run",
      image: "https://github.com/Adornadowilliam2/album/blob/main/runsakamotorun_vaundy.png?raw=true",
      music: "https://github.com/Adornadowilliam2/anime-song/blob/main/%E8%B5%B0%E3%82%8CSAKAMOTO%20%E2%80%93%20RUN%20SAKAMOTO%20RUN%20%E2%80%93%20Opening%20theme%20to%20SAKAMOTO%20DAYS%20%5Buj1DkgXSR4w%5D.mp3?raw=true"
    },
    {
      id:18,
      name:"Be a flower",
      image:"https://github.com/Adornadowilliam2/album/blob/main/be_a_flower.jpg?raw=true",
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
      image:"https://github.com/Adornadowilliam2/album/blob/main/mono_no_aware.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/%E3%80%90%E3%83%8F%E3%82%AF%E3%80%82Cover%E4%BC%81%E7%94%BB%E3%80%91MONO%20NO%20AWARE%20%EF%BC%82%E3%81%8B%E3%82%80%E3%81%8B%E3%82%82%E3%81%97%E3%81%8B%E3%82%82%E3%81%AB%E3%81%A9%E3%82%82%E3%81%8B%E3%82%82%EF%BC%81%EF%BC%82%20%5BJ76S5q_ETfo%5D.mp3?raw=true"
    },
    {
      id:23,
      name:"Without any words",
      image:"https://github.com/Adornadowilliam2/album/blob/main/wihtout_any_words.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/SIX%20LOUNGE%E3%80%8C%E8%A8%80%E8%91%89%E3%81%AB%E3%81%9B%E3%81%9A%E3%81%A8%E3%82%82%E3%80%8DMusic%20Video%20%5BJP2m2eZ9aLc%5D.mp3?raw=true",
     
    },
    {
      id:24,
      name:"Never meant to Belong",
      image:"https://github.com/Adornadowilliam2/album/blob/main/never_meant.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Never%20Meant%20To%20Belong%20-%20Bleach%20(Intermediate%20Tutorial)%20%5Bb9-Ci_D2n5c%5D.mp3?raw=true"
    },
    {
      id:25,
      name:"You found me",
      image:"https://github.com/Adornadowilliam2/album/blob/main/you_found_me.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/The%20Fray%20-%20You%20Found%20Me%20%5BjFg_8u87zT0%5D.mp3?raw=true"
    },
    {
      id:26,
      name:"Whatever you will you go",
      image:"https://github.com/Adornadowilliam2/album/blob/main/the_calling_wherever_you.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/The%20Calling%20-%20Wherever%20You%20Will%20Go%20(First%20Video-%20in%20Tijuana)%20%5BiAP9AF6DCu4%5D.mp3?raw=true"
    },
    {
      id:27,
      name:"Bad day",
      image:"https://github.com/Adornadowilliam2/album/blob/main/bad_day.jpg?raw=true",
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
      image:"https://github.com/Adornadowilliam2/album/blob/main/light_is_a_highway.jpg?raw=true",
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
      image:"https://github.com/Adornadowilliam2/album/blob/main/mambo_no_5.jpg?raw=true",
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
      image:"https://github.com/Adornadowilliam2/album/blob/main/glimpse_of_us.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Joji%20-%20Glimpse%20Of%20Us%20%5B_x3UltzBxjw%5D.mp3?raw=true"
    },
    {
      id:36,
      name:"Rasputin",
      image:"https://github.com/Adornadowilliam2/album/blob/main/rasputin.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Boney%20M.%20-%20Rasputin%20(Sopot%20Festival%201979)%20%5B16y1AkoZkmQ%5D.mp3?raw=true"
    },
    {
      id:37,
      name:"Feel it",
      image:"https://github.com/Adornadowilliam2/album/blob/main/feel_it.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/d4vd%20-%20Feel%20It%20(Official%20Music%20Video)%20%5BvZi8ET9k11g%5D.mp3?raw=true"
    },
    {
      id:38,
      name:"Luther",
      image:"https://github.com/Adornadowilliam2/album/blob/main/luther.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Kendrick%20Lamar%20-%20luther%20(Official%20Audio)%20%5BHfWLgELllZs%5D.mp3?raw=true"
    },
    {
      id:39,
      name:"All the stars",
      image:"https://github.com/Adornadowilliam2/album/blob/main/all_the_stars.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Kendrick%20Lamar%2C%20SZA%20-%20All%20The%20Stars%20%5BJQbjS0_ZfJ0%5D.mp3?raw=true"
    },
    {
      id:40,
      name:"Fly",
      image:"https://github.com/Adornadowilliam2/album/blob/main/fly.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Spectrum%20%5B%E3%82%B9%E3%83%9A%E3%82%AF%E3%83%88%E3%83%A9%E3%83%A0%5D%20%20-%20%20F-L-Y%20(1980)%20%5BDopBUv0ZV2w%5D.mp3?raw=true"
    },
    {
      id:41,
      name:"Wonder of you",
      image:"https://github.com/Adornadowilliam2/album/blob/main/wou.png?raw=true",
      music:'https://github.com/Adornadowilliam2/vibing-song/blob/main/Elvis%20Presley%20-%20The%20Wonder%20of%20You%20(Official%20Audio)%20%5BF5eEvfOyb7k%5D.mp3?raw=true'
    },
    {
      id:42,
      name:"Stand up be strong",
      image:"https://github.com/Adornadowilliam2/album/blob/main/stand_up_be_strong.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/STAND%20UP%20BE%20STRONG%20(Complete%20Version)%20-%20BLEACH%20Movie%203%EF%BC%9A%20Fade%20To%20Black%20OST%20%5B4ZSp8CJLZg8%5D.mp3?raw=true"

    },
    {
      id:43,
      name:"Treachery",
      image:"https://github.com/Adornadowilliam2/album/blob/main/treachery.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Treachery%20%5B0kYq-E8BJgU%5D.mp3?raw=true"
    },
    {
      id:44,
      name:"I was made loving you",
      image:"https://github.com/Adornadowilliam2/album/blob/main/kiss.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Kiss%20-%20I%20Was%20Made%20For%20Lovin'%20You%20%5BZhIsAZO5gl0%5D.mp3?raw=true"
    },
    {
      id:45,
      name:"Dark Aria",
      image:"https://github.com/Adornadowilliam2/album/blob/main/dark.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/SawanoHiroyuki%5BnZk%5D%EF%BC%9AXAI%20%E3%80%8EDARK%20ARIA%20%EF%BC%9CLV2%EF%BC%9E%E3%80%8F%20Music%20Video%20%5BZGXOWPZ64DA%5D.mp3?raw=true"
    },
    {
      id:46,
      name:"Makes me wonder",
      image:"https://github.com/Adornadowilliam2/album/blob/main/makes_me_wonder.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Maroon%205%20-%20Makes%20Me%20Wonder%20(Official%20Music%20Video)%20%5BsAebYQgy4n4%5D.mp3?raw=true"
    },
    {
      id:47,
      name:"Shots",
      image:"https://github.com/Adornadowilliam2/album/blob/main/shots.png?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Imagine%20Dragons%20-%20Shots%20%5BqQrgto184Tk%5D.mp3?raw=true"
    },
    {
      id:48,
      name:"Trap Royalty",
      image:"https://github.com/Adornadowilliam2/album/blob/main/trap_royalty.png?raw=true",
      music:"https://github.com/Adornadowilliam2/vibing-song/blob/main/Fatty%20Wap%20-%20Trap%20Queen%20(Royalty%20Remix)%20TikTok%20trap%20royalty%20orchestra%20%5BauhVPOuOaKc%5D.mp3?raw=true"
    },
    {
      id:49,
      name:"Happy Xmas (War is over)",
      image:"https://github.com/Adornadowilliam2/album/blob/main/war_is_over.png?raw=true",
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/Happy%20Xmas%20(War%20Is%20Over)%20%5BflA5ndOyZbI%5D.mp3?raw=true"
    },
    {
      id:50,
      name:"Rubble",
      image:'https://github.com/Adornadowilliam2/album/blob/main/mauler.jpg?raw=true',
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/Run%20The%20Jewels%20-%20Rubble%20Kings%20Theme%20(Dynamite)%20%5B0XboRkCEqKo%5D.mp3?raw=true"
    },

    {
      id:51,
      name:'Timeless  ',
      image:"https://github.com/Adornadowilliam2/album/blob/main/timeless.png?raw=true",
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/The%20Weeknd%2C%20Playboi%20Carti%20-%20Timeless%20%5B5EpyN_6dqyk%5D.mp3?raw=true"
    },
    {
      id:52,
      name:"Do I wanna Know?",
      image:"https://github.com/Adornadowilliam2/album/blob/main/do_i_wanna_know.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/Arctic%20Monkeys%20-%20Do%20I%20Wanna%20Know%EF%BC%9F%20(Official%20Video)%20%5BbpOSxM0rNPM%5D.mp3?raw=true"
    },
    {
      id:53,
      name:"No. 1 Party Anthem",
      image:"https://github.com/Adornadowilliam2/album/blob/main/no_1_party_anthem.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/jap-song/blob/main/No.%201%20Party%20Anthem%20%5BmGUjVbsYG6E%5D.mp3?raw=true"
    },
    {
      id:54,
      name:"Ransom",
      image:"https://github.com/Adornadowilliam2/album/blob/main/ransom.png?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Ransom%20%5BAALQwjjk85Y%5D.mp3?raw=true"
    },
    {
      id:55,
      name:"Shibuya ost",
      image:"https://github.com/Adornadowilliam2/album/blob/main/shibuya.jpeg?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Jujutsu%20Kaisen%20Season%202%20OST%20-%20Malevolent%20Shrine%20(Sukuna%20vs%20Mahoraga)%20%5Bjm5rqq_SP8Q%5D.mp3?raw=true"
    },
    {
      id:56,
      name:"Purle hollow ost",
      image:"https://github.com/Adornadowilliam2/album/blob/main/hollowpurple.png?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Hollow%20Purple%20%5BzcQvAy3oi0E%5D.mp3?raw=true"
    },
    {
      id:57,
      name:'Six days',
      image:"https://github.com/Adornadowilliam2/album/blob/main/six_days.jpg?raw=true",
      music:'https://github.com/Adornadowilliam2/riding-song/blob/main/Six%20days%20-%20Tokyo%20drift%20soundtrack%20%5BeCHN32-ksoA%5D.mp3?raw=true'
    },
    {
      id:58,
      name:"Swim",
      image:"https://github.com/Adornadowilliam2/album/blob/main/swim.png?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Chase%20Atlantic%20-%20SWIM%20(Official%20Music%20Video)%20%5BmC9v5FaLt84%5D.mp3?raw=true"
    },
    {
      id:59,
      name:"Highest",
      image:"https://github.com/Adornadowilliam2/album/blob/main/highest.png?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/HIGHEST%20%5BT9MLjIsfUOU%5D.mp3?raw=true"
    },
    {
      id:60,
      name:"Tom tom",
      image:"https://github.com/Adornadowilliam2/album/blob/main/tomtom.png?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Holy%20Fuck%20-%20%EF%BC%82Tom%20Tom%EF%BC%82%20(Official%20Music%20Video)%20%5BNfGw8crLcDw%5D.mp3?raw=true"
    },
    {
      id:61,
      name:"Lebron favorite song",
      image:"https://github.com/Adornadowilliam2/album/blob/main/lebron.jpg?raw=true",
      music:'https://github.com/Adornadowilliam2/riding-song/blob/main/Kamisama%20Hajimemashita%20%5BCpDpUewAgpE%5D.mp3?raw=true'
    },
    {
      id:62,
      name:"All coutries in the world",
      image:"https://github.com/Adornadowilliam2/album/blob/main/animamaniacs.jpg?raw=true",
      music:"https://github.com/Adornadowilliam2/riding-song/blob/main/Animaniacs%20SING-ALONG%20%F0%9F%8E%A4%20%EF%BD%9C%20Yakko%E2%80%99s%20World%20%EF%BD%9C%20WB%20Kids%20%5BV1508wboZXk%5D.mp3?raw=true"
    },
    {
      id:63,
      name:"You lied in April",
      image:"https://github.com/Adornadowilliam2/album/blob/main/youliedinapril.png?raw=true",
      music:"https://github.com/Adornadowilliam2/anime-song/blob/main/Hikaru%20Nara%20-%20Goose%20House%20%5BRomaji%2C%20Espa%C3%B1ol%2C%20English%2C%20Color%20Coded%5D%20%5BcWtgGTCAjYY%5D.mp3?raw=true"
    },
    {
      id:64,
      name:"Aishite",
      image:"https://github.com/Adornadowilliam2/album/blob/main/ado.png?raw=true",
      music:'https://github.com/Adornadowilliam2/ado-song/blob/main/Aishite%20Aishite%20Aishite%20%5BU8BlNEKq0r8%5D.mp3?raw=true'
    },
    {
      id:65,
      name:"Show",
      image:"https://github.com/Adornadowilliam2/album/blob/main/show.png?raw=true",
      music:'https://github.com/Adornadowilliam2/ado-song/blob/main/%E3%80%90Ado%E3%80%91%20%E5%94%B1%20%5BpgXpM4l_MwI%5D.mp3?raw=true'
    },
    {
      id:66,
      name:"Sorairo days",
      image:"https://github.com/Adornadowilliam2/album/blob/main/tenggentoppa.png?raw=true",
      music: "https://github.com/Adornadowilliam2/anime-song/blob/main/Shoko%20Nakagawa%20-%20Sorairo%20Days%20%5BPKRUKalbx3s%5D.mp3?raw=true"
    },
    {
      id:67,
      name:"My way",
      image:"https://github.com/Adornadowilliam2/album/blob/main/myway.png?raw=true",
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Frank%20Sinatra%20-%20My%20Way%20(Lyrics)%20%5B6pcwq2usV7Y%5D.mp3?raw=true"
    },
    {
      id:68,
      name:'New genesis',
      image:"https://github.com/Adornadowilliam2/album/blob/main/ado.png?raw=true",
      music:'https://github.com/Adornadowilliam2/ado-song/blob/main/Ado%20-%20New%20Genesis%20(UTA%20from%20ONE%20PIECE%20FILM%20RED)%20%5B6lnnPnr_0SU%5D.mp3?raw=true'
    },
    {
      id: 69,
      name:'Tot Musica',
      image:"https://github.com/Adornadowilliam2/album/blob/main/ado.png?raw=true",
      music:'https://github.com/Adornadowilliam2/ado-song/blob/main/%E3%80%90Ado%E3%80%91Tot%20Musica%20-%20LIVE%20%E3%80%90Best%20Artist%202023.12.02%E3%80%91%20%5BkCTgRjhdrs0%5D.mp3?raw=true'
    },
    {
      id:69,
      name:'Backlight',
      image:"https://github.com/Adornadowilliam2/album/blob/main/ado.png?raw=true",
      music:'https://github.com/Adornadowilliam2/ado-song/blob/main/%E3%80%90Ado%E3%80%91%E9%80%86%E5%85%89%EF%BC%88%E3%82%A6%E3%82%BF%20from%20ONE%20PIECE%20FILM%20RED%EF%BC%89%20%5Bgt-v_YCkaMY%5D.mp3?raw=true'
    },
    {
      id:70,
      name:'Weekend for the weekend',
      image:'https://github.com/Adornadowilliam2/album/blob/main/weekend.jpg?raw=true',
      music:"https://github.com/Adornadowilliam2/nostalgic-song/blob/main/Loverboy%20-%20Working%20for%20the%20Weekend%20(Official%20Remastered%20HD%20Video)%20%5BdsgBpsNPQ50%5D.mp3?raw=true"
    }


  ];

  res.status(200).json(musicInfo);
}
