$(window).resize(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);
});

$(document).ready(function(){
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);
  // (function initWebp() {
  //   serveNonWebp() ? switchToNonWebp() : false;
  // })();

  $('.aniview').AniView();

});

//For the contact form sub
$("#contactForm").submit(function(event){
  event.preventDefault();
  submitForm();
});


$("a[href*='#']:not([href='#'])").click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(function(){
  let tab = 'tab_active'
  let content = 'tab_item_active' 
  $('.tab').each(function(item){
    $(this).click(function(){
      $(this).addClass(tab).siblings().removeClass(tab);
      $($('.tab_item')[item]).addClass(content).siblings().removeClass(content);
    });
  });
});


( function( window ) {
  'use strict';
  // class helper functions from bonzo https://github.com/ded/bonzo
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple t_class at once
  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }

})( window );


(function tabz(){
  function tabs() {
    $('.tab-content').not('.active').hide();
    $('.tile').on('click', function(e) {
      e.preventDefault();
      $('.tile').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();
      $($.attr(this, 'href')).fadeIn(300);
    });
  }
  let tabz = $('#tabz');
  tabz ? tabs() : false;
})();

(function ($) {
  var $comments = $('.js-comments');
  let $form = $('#comments-form');
  $form.submit(function () {
    let form = this;
    $(this).addClass('form-loading');
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Comment submitted', 'Your comment will show on the site once it has been approved.');
        $(this).removeClass('form-loading');
        $("form").trigger("reset");
      },
      error: function (err) {
        showModal('Error', 'Sorry, there was an error with the submission!');
        $(this).removeClass('form-loading');
        $("form").trigger("reset");
      }
    });
    return false;
  });

  $('.modal_close').click(function () {
    $('body').removeClass('modal_show');
    $('form').removeClass('form-loading').removeClass('form-open');
    $('.form_toggle').removeClass('toggled');
  });

  function showModal(title, message) {
    $('.modal_title').text(title);
    $('.modal_text').html(message);

    $('body').addClass('modal_show');
  }
})(jQuery);
