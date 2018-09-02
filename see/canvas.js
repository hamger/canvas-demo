import Element from './element'
import { arrSort, tap } from './utils'
import { getLocation } from '../src/util'
class Canvas {
  constructor (opt) {
    this.container = opt.container
    this.children = []
    this.clickChildren = []
    this.init()
    this.bind()
  }
  init () {
    var canvas = document.createElement('canvas')
    this.canvas = canvas
    this.container.appendChild(canvas)
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    this.resize()
    window.onresize = this.resize.bind(this)
    this.ctx = canvas.getContext('2d')
  }
  resize () {
    this.width = this.canvas.width = this.container.clientWidth
    this.height = this.canvas.height = this.container.clientHeight
  }
  bind () {
    this.canvas.addEventListener('click', e => {
      let temp = null
      var location = getLocation(this.canvas, e)
      // 根据 zIndex 降序排列，因为只触发最前面元素的点击事件
      arrSort(this.clickChildren, 'zIndex', true).some(child => {
        this.clear()
        child.draw(this.ctx)
        if (this.ctx.isPointInPath(location.x, location.y)) {
          temp = child
          return true
        }
      })
      this.draw()
      if (temp) temp.click(e)
    })
    this.canvas.addEventListener(tap.start, e => {
    })
  }
  addElement (element) {
    if (element instanceof Element) {
      element.ctx = this.ctx
      element.canvas = this.canvas
      this.children.push(element)
      if (element.click) this.clickChildren.push(element)
    } else {
      throw Error('Function addElement only accept the instance of Element.')
    }
  }
  removeElement (element) {
    if (element) {
      this.children.some((item, index) => {
        if (item.id === element.id) {
          this.children.splice(index, 1)
          return true
        }
      })
      if (element.click) {
        this.clickChildren.some((item, index) => {
          if (item.id === element.id) {
            this.children.splice(index, 1)
            return true
          }
        })
      }
    } else {
      this.children = []
      this.clickChildren = []
    }
  }
  draw () {
    this.clear()
    arrSort(this.children, 'zIndex').forEach(child => {
      child.draw()
    })
  }
  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  animate (func) {
    requestAnimationFrame(func)
  }
}
export default Canvas
