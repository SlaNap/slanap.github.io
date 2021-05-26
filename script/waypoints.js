function onScrollInit( items, trigger) {
  items.each( function() {
    var osElement = $(this),
        osAnimationBiClass = osElement.attr('data-osa-bi'),
        osAnimationBoClass = 'fadeOut'
        osAnimationDelay = osElement.attr('data-osa-delay');
    var attr = osElement.attr('data-osa-ofset');
        if (typeof attr !== typeof undefined && attr !== false){
            osAnimationOfset = attr;
        } else {
            osAnimationOfset = '80%';
        }
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osElement.removeClass('animated').removeClass(osAnimationBoClass);
    osElement.removeClass('animated').removeClass(osAnimationBiClass);
 
    osTrigger.waypoint(function(direction) {
        if (direction == 'down') {
            osElement.removeClass('animated').removeClass(osAnimationBoClass);
            osElement.addClass('animated').addClass(osAnimationBiClass);
        } else {
            osElement.removeClass('animated').removeClass(osAnimationBiClass);
            osElement.addClass('animated').addClass(osAnimationBoClass);
        }
        
    },{
        //triggerOnce: true,
        offset: osAnimationOfset
    });
  });
}


$(document).ready(function(){
    onScrollInit($('.os-animation'));
});