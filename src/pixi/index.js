import * as PIXI from 'pixi.js'

// Aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite

// Create a Pixi Application
let app = new Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1
})
app.renderer.backgroundColor = 0x061639
app.renderer.autoResize = true
app.renderer.resize(512, 512)

loader
  .add([require('../assets/car1.png'), require('../assets/car2.png')])
  .load(setup)

function setup () {
  let sprite = new Sprite(resources[require('../assets/car1.png')].texture)
  app.stage.addChild(sprite)
  sprite.texture = PIXI.utils.TextureCache[require('../assets/car2.png')]
}

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)
