import Element from '../element'
import { delBlank } from '../utils'

export default class Path extends Element {
  constructor (opt) {
    super(opt)
  }
  draw () {
    var ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    if (this.stroke) ctx.strokeStyle = this.stroke
    else ctx.fillStyle = this.fill
    let path = delBlank(this.path)
    let pathVal = path.split(/[A-z]/)
    let pathtype = path.match(/[A-z]/)
    pathtype.forEach((item, index) => {
      this.resolve(item, pathVal[index])
    })
    if (this.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
  resolve (type, val) {
    if (type === 'M') this.ctx.moveTo(val[0], val[1])
  }
}
