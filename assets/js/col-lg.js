import method from './method';
import param from './baseParam';
let colLg = new method();

colLg.colIncrement('lg', 1, 13);
colLg.options('lg');

const lg = new Descartes({
  '.col-lg': {
    '_mixins': colLg.base(),
    'flex-grow': '1',
    'flex-basis': '0',
    'max-width': '100%'
  },
  '.col-lg-1': {
    '_mixins': colLg.default(1)
  },
  '.col-lg-2': {
    '_mixins': colLg.default(2)
  },
  '.col-lg-3': {
    '_mixins': colLg.default(3)
  },
  '.col-lg-4': {
    '_mixins': colLg.default(4)
  },
  '.col-lg-5': {
    '_mixins': colLg.default(5)
  },
  '.col-lg-6': {
    '_mixins': colLg.default(6)
  },
  '.col-lg-7': {
    '_mixins': colLg.default(7)
  },
  '.col-lg-8': {
    '_mixins': colLg.default(8)
  },
  '.col-lg-9': {
    '_mixins': colLg.default(9)
  },
  '.col-lg-10': {
    '_mixins': colLg.default(10)
  },
  '.col-lg-11': {
    '_mixins': colLg.default(11)
  },
  '.col-lg-12': {
    '_mixins': colLg.default(12)
  },
  '.col-lg-offset-0': {
    '_mixins': colLg.offset(0)
  },
  '.col-lg-offset-1': {
    '_mixins': colLg.offset(1)
  },
  '.col-lg-offset-2': {
    '_mixins': colLg.offset(2)
  },
  '.col-lg-offset-3': {
    '_mixins': colLg.offset(3)
  },
  '.col-lg-offset-4': {
    '_mixins': colLg.offset(4)
  },
  '.col-lg-offset-5': {
    '_mixins': colLg.offset(5)
  },
  '.col-lg-offset-6': {
    '_mixins': colLg.offset(6)
  },
  '.col-lg-offset-7': {
    '_mixins': colLg.offset(7)
  },
  '.col-lg-offset-8': {
    '_mixins': colLg.offset(8)
  },
  '.col-lg-offset-9': {
    '_mixins': colLg.offset(9)
  },
  '.col-lg-offset-10': {
    '_mixins': colLg.offset(10)
  },
  '.col-lg-offset-11': {
    '_mixins': colLg.offset(11)
  },
  '.start-lg': {
    'justify-content': 'flex-start',
    'text-align': 'start'
  },
  '.center-lg': {
    'justify-content': 'center',
    'text-align': 'center'
  },
  '.end-lg': {
    'justify-content': 'flex-end',
    'text-align': 'end'
  },
  '.top-lg': {
    'align-items': 'flex-start',
  },
  '.middle-lg': {
    'align-items': 'center',
  },
  '.bottom-lg': {
    'align-items': 'flex-end'
  },
  '.around-lg': {
    'justify-content': 'space-around'
  },
  '.between-lg': {
    'justify-content': 'space-between'
  },
  '.first-lg': {
    'order': '-1'
  },
  '.last-lg': {
    'order': '1'
  }
})
