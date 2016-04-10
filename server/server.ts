import nodeStatic 	= require( 'node-static' );
import http			= require( 'http' );
import socketIO		= require( 'socket.io' );

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
sio.serveClient( true ); // the server will serve the client js file
sio.attach( httpServer );

sio.set('origins', 'localhost:*')

// listen for a connection
sio.on( 'connection', function( socket ){
	console.log( 'User ' + socket.id + ' connected' );
});
