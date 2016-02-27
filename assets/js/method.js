import param from './baseParam';

export default class col {
  constructor() {
    this.xs = 'xs';
    this.sm = 'sm';
    this.md = 'md';
    this.lg = 'lg';
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

  colIncrement(type, min, max) {
    let colInc = new Object();
    colInc[`.col-${ type }`] = {'_mixins': this.base(), 'flex-grow': '1', 'flex-basis': '0', 'max-width': '100%'}
    for (let i = min; i < max; i++) {
      colInc[`.col-${ type }-${ i }`] = {'_mixins': this.default(i)}
      colInc[`.col-${ type }-offset-${ i - 1 }`] = {'_mixins': this.offset(i - 1)}
    }
    return colInc;
  }

  options(type) {
    let option = new Object();
    option[`.start-${ type }`] = {'justify-content': 'flex-start', 'text-align': 'start'}
    option[`.center-${ type }`] = {'justify-content': 'center', 'text-align': 'center'}
    option[`.end-${type}`] = {'justify-content': 'flex-end', 'text-align': 'end'}
    option[`.top-${type}`] = {'align-items': 'flex-start'}
    option[`.middle-${type}`] = {'align-items': 'center'}
    option[`.bottom-${type}`] = {'align-items': 'flex-end'}
    option[`.around-${type}`] = {'justify-content': 'space-around'}
    option[`.between-${type}`] = {'justify-content': 'space-between'}
    option[`.first-${type}`] = {'order': '-1'}
    option[`.last-${type}`] = {'order': '1'}
    return option;
  }

  generate() {
    let element = [this.xs, this.sm, this.md, this.lg];
    let generate = new Object();
    for (let i = 0; i < element.length; i++) {
      let inc = this.colIncrement(element[i], 1, 13);
      let opt = this.options(element[i])
      let mix = () => Object.assign(generate, inc, opt);
      mix()
    }
    return generate;
  }
}
