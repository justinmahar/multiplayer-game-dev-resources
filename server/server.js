"use strict";
var nodeStatic 	= require( './node_modules/node-static' );
var http			= require( 'http' );
var socketIO		= require( 'socket.io' );

// create our file server config
var file = new nodeStatic.Server( 'bin', { // bin is the folder containing our html, etc
	cache:0,	// don't cache
	gzip:true	// gzip our assets
});

// create our server
var httpServer = http.createServer( function( request, response ) {
	request.addListener( 'end', function() {
		file.serve( request, response );
	});
	request.resume();
}).listen(8080);

var sio = socketIO();
sio.serveClient(true); // the server will serve the client js file
sio.attach( httpServer );

//sio.set('origins', 'localhost:*')

var roomMap = new WeakMap();

class Entity {
  constructor(options) {
    this.name = "John Doe";
    this.x = "0"
    this.y = "0"
  }
}

var playerMap = new Map();

// listen for a connection
sio.on('connection', function(socket){
	console.log( 'User ' + socket.id + ' connected' );

  socket.on('playerJoinedRoom', function(msg){
    socket.join(msg);
    roomMap.set(socket, msg)
    console.log(socket.id, "playedJoinedRoom", msg)

    let player = new Entity()

    if (!playerMap.has(msg)) {
      playerMap.set(msg, []);
    }

    let playersInRoom = playerMap.get(msg)
    playersInRoom.push(player)
    playerMap.set(playersInRoom)

    socket.emit("players", playersInRoom)

  });

  socket.on('move', function(msg) {

    var sent = {"move": msg, "origin": socket.id};

    socket.to(roomMap.get(socket)).emit('move', sent);
    console.log(socket.id, "move", roomMap.get(socket), sent)
  });

  socket.on('disconnect', function() {
    roomMap.delete(socket)
    console.log(socket.id, "disconnected")
  })

});
