const http = require("http");
const server = http.createServer((req, res) =>{
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("향마루");
  res.end();
});
server.listen(3500, (err) => {
  if(!err){
    console.error("서버 작동 X");
  } else {
    console.log("3500포트에서 서버 작동 O, http://localhost:3500");
  }
})