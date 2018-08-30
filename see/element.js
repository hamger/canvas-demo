let id = 0
export default class Element {
  constructor (
    opt = {
      zIndex: 0,
      from: {},
      duration: 1000,
      easing: 'Quadratic.Out'
    }
  ) {
    this.id = id++
    this.opt = opt
  }
  // 设置绘制属性
  attr (opt) {
    this.opt = Object.assign(this.opt, opt)
  }
  // 设置公共绘制样式
  generalAttr (ctx) {
    let opt = this.opt
    if (opt.stroke) ctx.strokeStyle = opt.stroke
    if (opt.fill) ctx.fillStyle = opt.fill
    if (opt.shadowColor) ctx.shadowColor = opt.shadowColor
    if (opt.shadowBlur) ctx.shadowBlur = opt.shadowBlur
    if (opt.shadowOffsetX) ctx.shadowOffsetX = opt.shadowOffsetX
    if (opt.shadowOffsetY) ctx.shadowOffsetY = opt.shadowOffsetY
    if (opt.opacity) ctx.globalAlpha = opt.opacity
    if (opt.globalCompositeOperation) { ctx.globalCompositeOperation = opt.globalCompositeOperation }
  }
}
