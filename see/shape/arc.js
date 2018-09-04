import Element from '../element'

export default class Arc extends Element {
  constructor (opt) {
    super(opt)
  }
  draw () {
    var ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    this.setGeneral()
    this.setLine()
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.anticlockwise)
    if (this.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
}
