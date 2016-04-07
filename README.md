# Netshooter

A top-down multiplayer 2D shooter that uses simple game maps designed in notepad. These maps reside amongst a procedurally generated ether, allowing players to travel between them.

## Project Layout

- [Client](https://github.com/justinmahar/netshooter/tree/master/client) - Front-end Angular client.
- [Common](https://github.com/justinmahar/netshooter/tree/master/common) - Libs shared by front- and back-end, such as scripts.
- [Server](https://github.com/justinmahar/netshooter/tree/master/server) - Back-end node.js server.

## Resources

### Game Programming
- [How to Build an Entity Component System Game in Javascript](http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript)
- [Game Programming Patterns](http://gameprogrammingpatterns.com/contents.html)
- [Refactoring Game Entities with Components](http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/)

### Networking
- [RAFT](http://thesecretlivesofdata.com/raft/) - Visual demonstration of Raft: Understandable Distributed Consensus
- [Fast-Paced Multiplayer](http://www.gabrielgambetta.com/fpm1.html) - Article discussing client-side prediction, dead reckoning, entity interpolation, and lag compensation.
- [Latency Compensating Methods in Client/Server In-game Protocol Design and Optimization](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization)

### Procedural Gen
- [The Book of Shaders](http://patriciogonzalezvivo.com/2015/thebookofshaders/11/) - Shading algorithms, useful for procedural generation.
- [Building an Infinite Procedurally-Generated World](https://spin.atomicobject.com/2015/05/03/infinite-procedurally-generated-world/) - Example of using gradient noise to generate a top-down minecraft-like world with chunks.
- [Javascript Canvas Terrain Generator](https://github.com/loktar00/Javascript-Canvas-Terrain-Generator)
- [Procedural Generation Subreddit](https://www.reddit.com/r/proceduralgeneration)

### Rendering
- [Phaser](http://phaser.io/) A fast, free and fun open source framework for Canvas and WebGL powered browser games
- [Pixi.js](http://www.pixijs.com/) - 2D webGL renderer with canvas fallback
- [Oryx Design Lab](http://oryxdesignlab.com/) - Affordable tilesets. Maybe we'll use one of these?
