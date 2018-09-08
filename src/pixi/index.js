import * as PIXI from 'pixi.js'

// var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb })
// document.body.appendChild(app.view)

// // create a new Sprite from an image path
// var bunny = PIXI.Sprite.fromImage(require('../assets/car1.png'))

// // center the sprite's anchor point
// bunny.anchor.set(0.5)

// // move the sprite to the center of the screen
// bunny.x = app.screen.width / 2
// bunny.y = app.screen.height / 2

// app.stage.addChild(bunny)

// // Listen for animate update
// app.ticker.add(function (delta) {
//   // just for fun, let's rotate mr rabbit a little
//   // delta is 1 if running at 100% performance
//   // creates frame-independent transformation
//   bunny.rotation += 0.1 * delta
// })

var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb })
document.body.appendChild(app.view)

var container = new PIXI.Container()

app.stage.addChild(container)

var texture = PIXI.Texture.fromImage(require('../assets/car1.png'))

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
  var bunny = new PIXI.Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.x = (i % 5) * 40
  bunny.y = Math.floor(i / 5) * 40
  container.addChild(bunny)
}

// Center on the screen
container.x = (app.screen.width - container.width) / 2
container.y = (app.screen.height - container.height) / 2
