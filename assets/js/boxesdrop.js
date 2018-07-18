jQuery(function () {
    jQuery('.showSingle').click(function () {
        var index = $(this).parent().index(),
            newTarget = jQuery('.targetDiv').eq(index);
        jQuery('.targetDiv').not(newTarget).slideUp('fast')
        newTarget.delay('fast').slideToggle('fast')
        $(this).toggleClass('clicked')
        return false;
    })
//    For the second row
    jQuery('.showSingle1').click(function () {
        var index = $(this).parent().index(),
            newTarget = jQuery('.targetDiv1').eq(index);
        jQuery('.targetDiv1').not(newTarget).slideUp('fast')
        newTarget.delay('fast').slideToggle('fast')
        $(this).toggleClass('clicked')
        return false;
    })
//    End of the second row
    //    For the third row
    jQuery('.showSingle2').click(function () {
        var index = $(this).parent().index(),
            newTarget = jQuery('.targetDiv2').eq(index);
        jQuery('.targetDiv2').not(newTarget).slideUp('fast')
        newTarget.delay('fast').slideToggle('fast')
        $(this).toggleClass('clicked')
        return false;
    })
//    End of the third row
      //    For the third row
    jQuery('.showSingle3').click(function () {
        var index = $(this).parent().index(),
            newTarget = jQuery('.targetDiv3').eq(index);
        jQuery('.targetDiv3').not(newTarget).slideUp('fast')
        newTarget.delay('fast').slideToggle('fast')
        $(this).toggleClass('clicked')
        return false;
    })
//    End of the third row
      //    For the third row
    jQuery('.showSingle4').click(function () {
        var index = $(this).parent().index(),
            newTarget = jQuery('.targetDiv4').eq(index);
        jQuery('.targetDiv4').not(newTarget).slideUp('fast')
        newTarget.delay('fast').slideToggle('fast')
        $(this).toggleClass('clicked')
        return false;
    })
//    End of the third row
});