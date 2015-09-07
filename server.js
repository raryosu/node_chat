/*
 * Special Thanks! http://qiita.com/naga3/items/bdf6176537a5ac77a9b5
 */

// fsモジュールを用いてindex.htmlにアクセス
var html = require('fs').readFileSync('index.html');

// httpモジュールを用いてサーバをたてる
var http = require('http').createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
});

// Socket.ioのモジュールを読み込み、8000番ポートでまちうける
var io = require('socket.io')(http);
http.listen(1919);

// クライアントが接続してきたぞ！
io.on('connection', function(socket) {
  // メッセージを受けたときの処理
  socket.on('msg', function(data) {
    // クライアント全員に送信だ！
    io.emit('msg', data);
  });
});

