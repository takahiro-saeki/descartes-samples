import param from './baseParam';

export default class col {
  constructor() {

  }
  default(colNum) {
    return Object.assign(this.base(), {
      'flex-basis': param[colNum],
      'max-width': param[colNum]
    });
  }

  base() {
    return {
      'box-sizing': 'border-box',
      'flex': '0 0 auto',
      'padding': '0 1rem'
    }
  }

  offset(colNum) {
    return Object.assign(this.base(), {
      'margin-left': param[colNum]
    })
  }

  resize() {

  }
}
