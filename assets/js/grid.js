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
  }
})
