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
- [Real Time Multiplayer](http://buildnewgames.com/real-time-multiplayer/)
- [Valve: Latency Compensating Methods in Client/Server In-game Protocol Design and Optimization](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization)
- [Valve: Source Multiplayer Networking](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking) - Check out the "See also" links at the bottom, too.
- [Isogenic Game Engine](http://www.isogenicengine.com/) - Promising looking game engine that was abandoned in 2013. It has the exact realtime multiplayer functionality we're looking to create. Worth a look.

### Procedural Gen
- [The Book of Shaders](http://patriciogonzalezvivo.com/2015/thebookofshaders/11/) - Shading algorithms, useful for procedural generation.
- [Building an Infinite Procedurally-Generated World](https://spin.atomicobject.com/2015/05/03/infinite-procedurally-generated-world/) - Example of using gradient noise to generate a top-down minecraft-like world with chunks.
- [Javascript Canvas Terrain Generator](https://github.com/loktar00/Javascript-Canvas-Terrain-Generator)
- [Procedural Generation Subreddit](https://www.reddit.com/r/proceduralgeneration)

### Physics
- [Continuous Collision Detection](http://www.stencyl.com/help/view/continuous-collision-detection/)
- [Phaser + P2 Physics Examples](http://phaser.io/examples/v2/category/p2-physics)
  - Looks promising: [P2 + Phaser + Tilemap collisions demo](http://phaser.io/examples/v2/p2-physics/tilemap)

### Rendering
- [Phaser](http://phaser.io/) A fast, free and fun open source framework for Canvas and WebGL powered browser games
- [Pixi.js](http://www.pixijs.com/) - 2D webGL renderer with canvas fallback
- [Oryx Design Lab](http://oryxdesignlab.com/) - Affordable tilesets. Maybe we'll use one of these?

### Reference

- [Multiplayer Game Servers](https://github.com/topics/multiplayer-game-server) - Sorted by popularity
- [Nakama](https://github.com/heroiclabs/nakama) - Distributed server for social and realtime games and apps. [https://heroiclabs.com](https://heroiclabs.com)
- [Colyseus](https://github.com/colyseus/colyseus) - ⚔ Multiplayer Game Server for Node.js [http://colyseus.io](http://colyseus.io)
- [Lance](https://github.com/lance-gg/lance) - Multiplayer game server based on Node.JS
- [Popularity of Nakama, Colyseus, and Lance over time](https://star-history.t9t.io/#lance-gg/lance&colyseus/colyseus&heroiclabs/nakama)
- [Awesome Game Networking](https://github.com/MFatihMAR/Awesome-Game-Networking) - A Curated List of Game Network Programming Resources