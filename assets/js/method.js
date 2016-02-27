import param from './baseParam';

export default class col {
  constructor(xs, sm, md, lg) {
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
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
    for (let i = min; i < max; i++) {
      colInc[`.col-${ type }-${ i }`] = {'_mixins': this.default(i)}
      colInc[`.col-${ type }-offset-${ i - 1 }`] = {'_mixins': this.offset(i - 1)}
    }
    console.log(colInc)
  }

  options(type) {
    let option = new Object();
    option[`.start-${ type }`] = {'justify-content': 'flex-start', 'text-align': 'start'},
    option[`.center-${ type }`] = {'justify-content': 'center', 'text-align': 'center'},
    option[`.end-${type}`] = {'justify-content': 'flex-end', 'text-align': 'end'},
    option[`.top-${type}`] = {'align-items': 'flex-start'},
    option[`.middle-${type}`] = {'align-items': 'center'},
    option[`.bottom-${type}`] = {'align-items': 'flex-end'},
    option[`.around-${type}`] = {'justify-content': 'space-around'},
    option[`.between-${type}`] = {'justify-content': 'space-between'},
    option[`.first-${type}`] = {'order': '-1'},
    option[`.last-${type}`] = {'order': '1'}
    console.log(option);
  }
}
