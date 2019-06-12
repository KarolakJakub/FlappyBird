const WIDTH = 288
const HEIGHT = 512
const BASE_HEIGHT = 112
const BASE_WIDTH = 336
const MESSAGE_WIDTH = 184
const MESSAGE_HEIGHT = 267

let backgroundImage
let baseImage
let messageImage

const canvas = document.createElement('canvas')
canvas.setAttribute('height', '512px')
canvas.setAttribute('width', '288px')

const body = document.querySelector('body')

body.append(canvas)

const ctx = canvas.getContext('2d')

backgroundImage = drawImage("background-day.png", 0, 0, WIDTH, HEIGHT, () => {
    baseImage = drawImage("base.png", 0, (HEIGHT - BASE_HEIGHT), BASE_WIDTH, BASE_HEIGHT, () => {
      messageImage = drawImage("message.png", (WIDTH - MESSAGE_WIDTH) / 2, (HEIGHT - MESSAGE_HEIGHT) / 2, MESSAGE_WIDTH, MESSAGE_HEIGHT)
    })
  })



// const backgroundImage = new Image()
// backgroundImage.src = 'assets/sprites/background-day.png'
// backgroundImage.onload = function() {

//     ctx.drawImage(backgroundImage, 0, 0)
// }

// const baseImage = new Image()
// baseImage.src = 'assets/sprites/base.png'
// baseImage.onload = function() {
//     ctx.drawImage(baseImage, 0, 512 - baseImage.height)
// }

// const mainMenu = new Image()
// baseImage.src = 'assets/sprites/message.png'
// baseImage.onload = function() {
//     ctx.drawImage(baseImage, 0, 512 - baseImage.height)
// }

function drawImage (imageUrl, x, y, w, h, onload = () => {}) {
    const image = new Image()
    image.src = `assets/sprites/${imageUrl}`
    image.onload = function() {
      ctx.drawImage(image, x, y, w, h)
      onload()
    }
    return image
  }

let isPlaying = false

canvas.addEventListener('click', () => {
    if (!isPlaying){
        isPlaying = true
        console.log('starting game')
        loop()
    }
})

let birdImageMid = drawImage('redbird-midflap.png')
let birdImageUp = drawImage('redbird-upflap.png')
let birdImageDown = drawImage('redbird-downflap.png')


function loop() {

    if (isPlaying){
        ctx.drawImage(backgroundImage, 0, 0)
        ctx.drawImage(baseImage, 0, HEIGHT - BASE_HEIGHT)
        ctx.drawImage(birdImageMid, 20, 20)
    }


    requestAnimationFrame(loop)
}