const windowXs = window.matchMedia('(max-width:767px)').matches;
const windowSm = window.matchMedia('(min-width:768px,max-width:1023px)').matches;
const windowMd = window.matchMedia('(min-width:1024px)').matches;
const windowLg = window.matchMedia('(min-width:1200px)').matches;
if (windowSm) {
  $('body').addClass('red');
} else if(windowMd) {
  $('body').addClass('blue');
} else if(windowLg) {
  $('body').addClass('yellow');
} else if(windowXs){
  $('body').addClass('green');
}
