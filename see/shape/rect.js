import Element from '../element'

export default class Rect extends Element {
  constructor (opt) {
    super(opt)
  }
  draw () {
    var ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    if (this.stroke) ctx.strokeStyle = this.stroke
    else ctx.fillStyle = this.fill
    ctx.rect(this.x, this.y, this.w, this.h)
    if (this.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
}
