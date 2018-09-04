import Element from '../element'

export default class Polyline extends Element {
  constructor (opt) {
    super(opt)
  }
  draw () {
    var ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.stroke
    this.setLine(ctx)
    this.points.forEach((item, index) => {
      if (index === 0) ctx.moveTo(item[0], item[1])
      else ctx.lineTo(item[0], item[1])
    })
    ctx.stroke()
    ctx.restore()
  }
}
