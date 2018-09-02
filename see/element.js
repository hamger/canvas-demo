let id = 0
export default class Element {
  constructor (opt) {
    this.id = id++
    if (opt.zIndex === undefined) opt.zIndex = 0
    Object.assign(this, opt)
  }
  // 设置绘制属性
  attr (opt) {
    Object.assign(this, opt)
  }
  addEventListener (eventType, callback) {
    this[eventType] = callback
  }
  removeEventListener (eventType) {
    this[eventType] = null
  }
  // 设置公共绘制样式
  generalAttr (ctx) {
    if (this.stroke) ctx.strokeStyle = this.stroke
    if (this.fill) ctx.fillStyle = this.fill
    if (this.shadowColor) ctx.shadowColor = this.shadowColor
    if (this.shadowBlur) ctx.shadowBlur = this.shadowBlur
    if (this.shadowOffsetX) ctx.shadowOffsetX = this.shadowOffsetX
    if (this.shadowOffsetY) ctx.shadowOffsetY = this.shadowOffsetY
    if (this.opacity) ctx.globalAlpha = this.opacity
    if (this.globalCompositeOperation) {
      ctx.globalCompositeOperation = this.globalCompositeOperation
    }
  }
}
