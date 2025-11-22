export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const musicInfo = [
    {
      id: 1,
      name: "Jane Doe",
      image:
        "https://images.genius.com/28e8b5e4393cc1f69b1c234ae5826c68.1000x1000x1.png",
      music:
        "https://github.com/Adornadowilliam2/csmplaylist/blob/main/janedoe.mp3?raw=true",
    },
    {
        id: 2,
        name:"Iris Out",
        image:"https://images.genius.com/e1dbc1133c5d2568e4250fab2412e9fb.1000x1000x1.png",
        music:
         "https://github.com/Adornadowilliam2/csmplaylist/blob/main/irisout.mp3?raw=true",
    },
    {
        id: 3,
        name: "Kick Back",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/4e/a8/75/4ea875d1-bdb6-9b83-185a-646391cbffbd/4547366589849.jpg/1200x1200bf-60.jpg",
        music:
           "https://github.com/Adornadowilliam2/csmplaylist/blob/main/kickback.mp3?raw=true",
    }

 
  ];

  res.status(200).json(musicInfo);
}