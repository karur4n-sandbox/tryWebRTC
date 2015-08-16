var port = 9000;
var html = require('fs').readFileSync(__dirname + '/index.html'); // 任意のHTMLファイル
var js = require('fs').readFileSync(__dirname + '/app.js'); // 任意のHTMLファイル
var server = require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length});
  res.end(html);
  res.writeHead(200, {'Content-Type': 'text/js', 'Content-Length': js.length});
  res.end(js);
}).listen(port);
