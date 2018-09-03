var container = document.getElementById('container')
var canvas = document.createElement('canvas')
container.appendChild(canvas)
// 当屏幕被伸缩时，使画布依然充满整个元素
canvas.style.width = '100%'
canvas.style.height = '100%'
canvas.width = container.clientWidth
canvas.height = container.clientHeight
var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(10, 50)
ctx.quadraticCurveTo(30, 100, 100, 50)
ctx.bezierCurveTo(170, 0, 170, 100, 250, 50)
ctx.stroke()
