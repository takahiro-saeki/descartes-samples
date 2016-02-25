const sample = { 1: '8.333%', 2: '16.666%', 3: '25%', 4: '33.333%', 5: '41.667%', 6: '50%', 7: '58.333%', 8: '66.667%', 9: '75%', 10: '83.333%', 11: '91.667%', 12: '100%' }
class col {
  constructor() {

  }
  default(colNum) {
    let param =  {
      'box-sizing': 'border-box',
      'flex': '0 0 auto',
      'padding': '0 1rem',
      'flex-basis': sample.colNum + '%',
      'max-width': sample.colNum + '%'
    }
  }
}

const baseCol = {
  'box-sizing': 'border-box',
  'flex': '0 0 auto',
  'padding': '0 1rem'
}

new Descartes({
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
  },
  '.col-xs': {
    '_mixin': baseCol,
    'flex-grow': '1',
    'flex-basis': '0',
    'max-width': '100%'
  },
  '.col-xs-1': {
    '_mixin': baseCol,
    'flex-basis': '8.333%',
    'max-width': '8.333%'
  },
  '.col-xs-2': {
    '_mixin': baseCol,
    'flex-basis': '16.666%',
    'max-width': '16.666%'
  },
  '.col-xs-3': {
    '_mixin': baseCol,
    'flex-basis': '25%',
    'max-width': '25%'
  },
  '.col-xs-4': {
    '_mixin': baseCol,
    'flex-basis': '33.333%',
    'max-width': '33.333%'
  },
  '.col-xs-5': {
    '_mixin': baseCol,
    'flex-basis': '41.667%',
    'max-width': '41.667%'
  },
  '.col-xs-6': {
    '_mixin': baseCol,
    'flex-basis': '50%',
    'max-width': '50%'
  },
  '.col-xs-7': {
    '_mixin': baseCol,
    'flex-basis': '58.333%',
    'max-width': '58.333%'
  },
  '.col-xs-8': {
    '_mixin': baseCol,
    'flex-basis': '66.667%',
    'max-width': '66.667%'
  },
  '.col-xs-9': {
    '_mixin': baseCol,
    'flex-basis': '75%',
    'max-width': '75%'
  },
  '.col-xs-10': {
    '_mixin': baseCol,
    'flex-basis': '83.333%',
    'max-width': '83.333%'
  },
  '.col-xs-11': {
    '_mixin': baseCol,
    'flex-basis': '91.667%',
    'max-width': '91.667%'
  },
  '.col-xs-12': {
    '_mixin': baseCol,
    'flex-basis': '100%',
    'max-width': '100%'
  },
  '.col-xs-offset-0': {
    '_mixin': baseCol,
    'margin-left': '0'
  },
  '.col-xs-offset-1': {
    '_mixin': baseCol,
    'margin-left': '8.333%'
  },
  '.col-xs-offset-2': {
    '_mixin': baseCol,
    'margin-left': '16.667%'
  },
  '.col-xs-offset-3': {
    '_mixin': baseCol,
    'margin-left': '25%'
  },
  '.col-xs-offset-4': {
    '_mixin': baseCol,
    'margin-left': '33.333%'
  },
  '.col-xs-offset-5': {
    '_mixin': baseCol,
    'margin-left': '41.667%'
  },
  '.col-xs-offset-6': {
    '_mixin': baseCol,
    'margin-left': '50%'
  },
  '.col-xs-offset-7': {
    '_mixin': baseCol,
    'margin-left': '58.333%'
  },
  '.col-xs-offset-8': {
    '_mixin': baseCol,
    'margin-left': '66.667%'
  },
  '.col-xs-offset-9': {
    '_mixin': baseCol,
    'margin-left': '75%'
  },
  '.col-xs-offset-10': {
    '_mixin': baseCol,
    'margin-left': '83.333%'
  },
  '.col-xs-offset-11': {
    '_mixin': baseCol,
    'margin-left': '91.667%'
  },
  '.start-xs' {
    'justify-content': 'flex-start',
    'text-align': 'start'
  },
  '.center-xs' {
    'justify-content': 'center'
    'text-align': 'center'
  },
  '.end-xs' {
    'justify-content': 'flex-end'
    'text-align': 'end'
  },
  '.top-xs' {
    'align-items': 'flex-start'
  },
  '.middle-xs' {
    'align-items': 'center'
  },
  '.bottom-xs' {
    'align-items': 'flex-end'
  },
  '.around-xs' {
    'justify-content': 'space-around'
  },
  '.between-xs' {
    'justify-content': 'space-between'
  },
  '.first-xs' {
    'order': '-1'
  },
  '.last-xs' {
    'order': '1'
  }
})
