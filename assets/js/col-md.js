import method from './method';
import param from './baseParam';

let colMd = new method();

const md = new Descartes({
  '.col-md': {
    '_mixins': colMd.base(),
    'flex-grow': '1',
    'flex-basis': '0',
    'max-width': '100%'
  },
  '.col-md-1': {
    '_mixins': colMd.default(1)
  },
  '.col-md-2': {
    '_mixins': colMd.default(2)
  },
  '.col-md-3': {
    '_mixins': colMd.default(3)
  },
  '.col-md-4': {
    '_mixins': colMd.default(4)
  },
  '.col-md-5': {
    '_mixins': colMd.default(5)
  },
  '.col-md-6': {
    '_mixins': colMd.default(6)
  },
  '.col-md-7': {
    '_mixins': colMd.default(7)
  },
  '.col-md-8': {
    '_mixins': colMd.default(8)
  },
  '.col-md-9': {
    '_mixins': colMd.default(9)
  },
  '.col-md-10': {
    '_mixins': colMd.default(10)
  },
  '.col-md-11': {
    '_mixins': colMd.default(11)
  },
  '.col-md-12': {
    '_mixins': colMd.default(12)
  },
  '.col-md-offset-0': {
    '_mixins': colMd.offset(0)
  },
  '.col-md-offset-1': {
    '_mixins': colMd.offset(1)
  },
  '.col-md-offset-2': {
    '_mixins': colMd.offset(2)
  },
  '.col-md-offset-3': {
    '_mixins': colMd.offset(3)
  },
  '.col-md-offset-4': {
    '_mixins': colMd.offset(4)
  },
  '.col-md-offset-5': {
    '_mixins': colMd.offset(5)
  },
  '.col-md-offset-6': {
    '_mixins': colMd.offset(6)
  },
  '.col-md-offset-7': {
    '_mixins': colMd.offset(7)
  },
  '.col-md-offset-8': {
    '_mixins': colMd.offset(8)
  },
  '.col-md-offset-9': {
    '_mixins': colMd.offset(9)
  },
  '.col-md-offset-10': {
    '_mixins': colMd.offset(10)
  },
  '.col-md-offset-11': {
    '_mixins': colMd.offset(11)
  },
  '.start-md': {
    'justify-content': 'flex-start',
    'text-align': 'start'
  },
  '.center-md': {
    'justify-content': 'center',
    'text-align': 'center'
  },
  '.end-md': {
    'justify-content': 'flex-end',
    'text-align': 'end'
  },
  '.top-md': {
    'align-items': 'flex-start',
  },
  '.middle-md': {
    'align-items': 'center',
  },
  '.bottom-md': {
    'align-items': 'flex-end'
  },
  '.around-md': {
    'justify-content': 'space-around'
  },
  '.between-md': {
    'justify-content': 'space-between'
  },
  '.first-md': {
    'order': '-1'
  },
  '.last-md': {
    'order': '1'
  }
})
