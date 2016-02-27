import method from './method';
import param from './baseParam';

const test123 = new method();
let gridAll = () => Object.assign(test123.generate(), {
  '.container': {
    'margin': '0 auto'
  },
  '.container-fluid': {
    'margin': '0 auto',
    'padding': '0 2rem'
  },
  '.row': {
    'box-sizing': 'border-box',
    'display': 'flex',
    'flex': '0 1 auto',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'margin': '0 -1rem'
  },
  '.row.reverse': {
    'flex-direction': 'row-reverse'
  },
  '.col.reverse': {
    'flex-direction': 'column-reverse'
  }
});

let bases = new Descartes(gridAll())
