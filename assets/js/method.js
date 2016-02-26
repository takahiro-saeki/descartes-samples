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

  colIncrement() {
    let hogee = new Object();
    for (let i = 1; i < 11; i++) {
      hogee[`.col-lg-${ i }`] = {'_mixins': this.default(i)}
    }
    console.log(hogee)
  }
}
