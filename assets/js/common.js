import grid from './grid';
import event from './event';
import xs from './col-xs';

const BaseFont = '1.8rem';

let base = new Descartes({
  'html': {
    'font-size': '62.5%'
  },
  'body': {
    'padding': '0',
    'margin': '0',
    'font-size': '1.4rem'
  },
  '.header': {
    'width': '96%',
    'padding': '2%',
    'background-color': '#00acc1',
    'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
    'color': '#fff'
  },
  '.test': {
    'color': '#fff'
  },
  '.box': {
    'font-size': BaseFont
  },
  '.red': {
    'background': 'red'
  },
  '.yellow': {
    'background': 'yellow'
  },
  '.blue': {
    'background': 'blue'
  },
  '.green': {
    'background': 'green'
  }
})
