const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = process.argv[2] || 'dist';
const PREFIX = '/arquimedes';
const PORT = Number(process.argv[3] || 4190);
const types = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.json':'application/json' };
http.createServer((req,res)=>{
  let url = decodeURIComponent(req.url.split('?')[0]);
  if(!url.startsWith(PREFIX)){ res.writeHead(404); return res.end('fora da base'); }
  let rel = url.slice(PREFIX.length) || '/';
  if(rel === '/') rel = '/index.html';
  const f = path.join(ROOT, rel);
  fs.readFile(f,(e,b)=>{
    if(e){ res.writeHead(404,{'content-type':'text/plain'}); return res.end('404 '+rel); }
    res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});
    res.end(b);
  });
}).listen(PORT,()=>console.log('http://localhost:'+PORT+PREFIX+'/'));
