import method from './method';
import param from './baseParam';

let colParam = new method();

const xs = new Descartes({
  '.col-xs': {
    '_mixins': colParam.base(),
    'flex-grow': '1',
    'flex-basis': '0',
    'max-width': '100%'
  },
  '.col-xs-1': {
    '_mixins': colParam.default(1)
  },
  '.col-xs-2': {
    '_mixins': colParam.default(2)
  },
  '.col-xs-3': {
    '_mixins': colParam.default(3)
  },
  '.col-xs-4': {
    '_mixins': colParam.default(4)
  },
  '.col-xs-5': {
    '_mixins': colParam.default(5)
  },
  '.col-xs-6': {
    '_mixins': colParam.default(6)
  },
  '.col-xs-7': {
    '_mixins': colParam.default(7)
  },
  '.col-xs-8': {
    '_mixins': colParam.default(8)
  },
  '.col-xs-9': {
    '_mixins': colParam.default(9)
  },
  '.col-xs-10': {
    '_mixins': colParam.default(10)
  },
  '.col-xs-11': {
    '_mixins': colParam.default(11)
  },
  '.col-xs-12': {
    '_mixins': colParam.default(12)
  },
  '.col-xs-offset-0': {
    '_mixins': colParam.offset(0)
  },
  '.col-xs-offset-1': {
    '_mixins': colParam.offset(1)
  },
  '.col-xs-offset-2': {
    '_mixins': colParam.offset(2)
  },
  '.col-xs-offset-3': {
    '_mixins': colParam.offset(3)
  },
  '.col-xs-offset-4': {
    '_mixins': colParam.offset(4)
  },
  '.col-xs-offset-5': {
    '_mixins': colParam.offset(5)
  },
  '.col-xs-offset-6': {
    '_mixins': colParam.offset(6)
  },
  '.col-xs-offset-7': {
    '_mixins': colParam.offset(7)
  },
  '.col-xs-offset-8': {
    '_mixins': colParam.offset(8)
  },
  '.col-xs-offset-9': {
    '_mixins': colParam.offset(9)
  },
  '.col-xs-offset-10': {
    '_mixins': colParam.offset(10)
  },
  '.col-xs-offset-11': {
    '_mixins': colParam.offset(11)
  },
  '.start-xs': {
    'justify-content': 'flex-start',
    'text-align': 'start'
  },
  '.center-xs': {
    'justify-content': 'center',
    'text-align': 'center'
  },
  '.end-xs': {
    'justify-content': 'flex-end',
    'text-align': 'end'
  },
  '.top-xs': {
    'align-items': 'flex-start',
  },
  '.middle-xs': {
    'align-items': 'center',
  },
  '.bottom-xs': {
    'align-items': 'flex-end'
  },
  '.around-xs': {
    'justify-content': 'space-around'
  },
  '.between-xs': {
    'justify-content': 'space-between'
  },
  '.first-xs': {
    'order': '-1'
  },
  '.last-xs': {
    'order': '1'
  }
})
