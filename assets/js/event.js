const windowXs = window.matchMedia('(max-width:767px)').matches;
const windowSm = window.matchMedia('(min-width:768px,max-width:1023px)').matches;
const windowMd = window.matchMedia('(min-width:1024px)').matches;
const windowLg = window.matchMedia('(min-width:1200px)').matches;

var reset = {"margin": 0,
  "padding": 0,
  "box-sizing": "border-box"
};
var rand_angle = function() {
  return Math.round(Math.random() * (180) - 90);
};
var rand_rgba = function() {
  return "rgba("+[255,255,255].map(function(x) {
    return Math.round(Math.random() * x);
  }).join()+", 1)"
};

let col6 = {
  "width": "50%"
}
let col12 = {
  "width": "100%"
}

new Descartes({ // Just put descartes.js in the <head> tag
  "html": {
    "_mixins": reset, // Reuse CSS rules with mixins
    "body": { // Nest selectors just like in Sass and Less
      //"_mixins": reset,
      "_listeners": [
        [window, "resize"]], // Bind events...
      "background": function() {
        return 'linear-gradient('
          + rand_angle().toString() + 'deg,'
          + rand_rgba() + ','
          + rand_rgba() + ')'
      }, // ...to set dynamic property values when they fire!
      '.box1': {
        "_listeners": [[window, "resize"]],
        'width': function() {
          if(window.innerWidth > 700) {
            return '30%'
          }
          return '80%'
        }
      },
      '.grid': function() {
        "_listeners": [[window, "resize"]],
        if(window.innerWidth < 768) {
          '.grid-col-12': {
            '_mixins': col12
          } else {
            '.grid-col-6': {
              '_mixins': col6
            }
          }
        }
      }
    }
  }
})
