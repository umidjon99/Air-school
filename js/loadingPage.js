$(window).on('load', function () {
    setInterval(function(){
        $('#windowLoadTag').css('opacity',0);
        $('.continer').css('opacity',1);
        $('#windowLoadTag').remove();
    },1000)
    
});
