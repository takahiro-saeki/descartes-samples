import method from './method';
import param from './baseParam';

let colSm = new method();

const sm = new Descartes({
  '.col-sm': {
    '_mixins': colSm.base(),
    'flex-grow': '1',
    'flex-basis': '0',
    'max-width': '100%'
  },
  '.col-sm-1': {
    '_mixins': colSm.default(1)
  },
  '.col-sm-2': {
    '_mixins': colSm.default(2)
  },
  '.col-sm-3': {
    '_mixins': colSm.default(3)
  },
  '.col-sm-4': {
    '_mixins': colSm.default(4)
  },
  '.col-sm-5': {
    '_mixins': colSm.default(5)
  },
  '.col-sm-6': {
    '_mixins': colSm.default(6)
  },
  '.col-sm-7': {
    '_mixins': colSm.default(7)
  },
  '.col-sm-8': {
    '_mixins': colSm.default(8)
  },
  '.col-sm-9': {
    '_mixins': colSm.default(9)
  },
  '.col-sm-10': {
    '_mixins': colSm.default(10)
  },
  '.col-sm-11': {
    '_mixins': colSm.default(11)
  },
  '.col-sm-12': {
    '_mixins': colSm.default(12)
  },
  '.col-sm-offset-0': {
    '_mixins': colSm.offset(0)
  },
  '.col-sm-offset-1': {
    '_mixins': colSm.offset(1)
  },
  '.col-sm-offset-2': {
    '_mixins': colSm.offset(2)
  },
  '.col-sm-offset-3': {
    '_mixins': colSm.offset(3)
  },
  '.col-sm-offset-4': {
    '_mixins': colSm.offset(4)
  },
  '.col-sm-offset-5': {
    '_mixins': colSm.offset(5)
  },
  '.col-sm-offset-6': {
    '_mixins': colSm.offset(6)
  },
  '.col-sm-offset-7': {
    '_mixins': colSm.offset(7)
  },
  '.col-sm-offset-8': {
    '_mixins': colSm.offset(8)
  },
  '.col-sm-offset-9': {
    '_mixins': colSm.offset(9)
  },
  '.col-sm-offset-10': {
    '_mixins': colSm.offset(10)
  },
  '.col-sm-offset-11': {
    '_mixins': colSm.offset(11)
  },
  '.start-sm': {
    'justify-content': 'flex-start',
    'text-align': 'start'
  },
  '.center-sm': {
    'justify-content': 'center',
    'text-align': 'center'
  },
  '.end-sm': {
    'justify-content': 'flex-end',
    'text-align': 'end'
  },
  '.top-sm': {
    'align-items': 'flex-start',
  },
  '.middle-sm': {
    'align-items': 'center',
  },
  '.bottom-sm': {
    'align-items': 'flex-end'
  },
  '.around-sm': {
    'justify-content': 'space-around'
  },
  '.between-sm': {
    'justify-content': 'space-between'
  },
  '.first-sm': {
    'order': '-1'
  },
  '.last-sm': {
    'order': '1'
  }
})
