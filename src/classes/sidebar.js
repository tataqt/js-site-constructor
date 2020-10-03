import {TextBlock, TitleBlock} from './blocks'
import {block} from '../utils'

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector)
    this.update = update

    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  addBlock(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    const Constructor = type === 'text' ? TextBlock : TitleBlock

    const newBlock = new Constructor(value, {styles})
    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}
