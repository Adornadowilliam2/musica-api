export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const musicaInfo = [
    {
      id:1,
      name:"Crazy",
      image:""
    }
  ]
  res.status(200).json([
    ok => true,
    message => "Retrieve sucessfully",
    data => musicaInfo
  ]);
}
