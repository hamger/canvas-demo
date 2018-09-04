import Element from '../element'
import { delBlank } from '../utils'

export default class Path extends Element {
  constructor (opt) {
    super(opt)
    this.curPoint = []
  }
  draw () {
    var ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    if (this.stroke) ctx.strokeStyle = this.stroke
    else ctx.fillStyle = this.fill
    let path = delBlank(this.path)
    let pathType = path.match(/[A-z]/g)
    let pathVal = path
      .split(/[A-z]/)
      .filter(function (item) {
        // 过滤掉空的项
        return item !== ''
      })
      .map(function (item) {
        // 去除多余的空格
        return delBlank(item)
      })

    pathType.forEach((item, index) => {
      let arr = []
      if (pathVal[index]) {
        arr = pathVal[index].split(' ').map(item => {
          return Number(item)
        })
      }
      this.resolve(item, arr)
    })
    if (this.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
  resolve (type, val) {
    if (type === 'M') {
      this.curPoint = val
      this.ctx.moveTo(this.curPoint[0], this.curPoint[1])
    }
    if (type === 'L' || type === 'l') {
      if (type === 'l') {
        val.forEach((item, index) => {
          this.curPoint[index] += item
        })
      } else this.curPoint = val
      this.ctx.lineTo(this.curPoint[0], this.curPoint[1])
    }
    if (type === 'Z' || type === 'z') {
      this.ctx.closePath()
    }
  }
}
