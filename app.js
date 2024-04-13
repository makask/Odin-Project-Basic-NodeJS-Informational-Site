var http = require('http');
var fs = require('fs');
var path = require('path');
const { error } = require('console');

const PORT = 8080;

const index = fs.readFileSync('./views/index.html', 'utf-8');
const errorPage = fs.readFileSync('./views/404.html', 'utf-8');

const server = http.createServer((req, res) => {
  let url = req.url;
  let path = url.slice(1).toLowerCase();
 
  if(url === '/' && url.length === 1){
    res.end(index);
  }else if(url.length > 1) {
    try{
      let html = fs.readFileSync(`./views/${path}.html`, 'utf-8');
      res.end(html);
    }catch(err){
      console.error(err);
      res.end(errorPage);
    }
  }
});

server.listen(PORT , '127.0.0.1', ()=>{
  console.log(`Server running at: ${PORT}`);
});




