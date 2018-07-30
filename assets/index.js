function elem(selector, parent = document){
  return parent.querySelector(selector);
}

function elems(selector) {
  let elems = document.querySelectorAll(selector);
  return elems.length ? elems : false; 
}

function findText(parent, child) {
  return parent.querySelector(child).innerHTML;
}

function setText(el, text) {
  el.innerHTML = text;
}

function modal(shell) {
  let modal = elem(shell);
  if(modal) {
    let modal_class = modal.classList;
    let overlay = modal.parentNode;
    let overlay_class = overlay.classList;
    return [modal_class, overlay_class];
  }
}

function toggleModal(shell, hide = 'hide') {
  let open = shell.replace('.','').concat('-open');
  let attr = modal(shell);
  attr[0].contains(open) ? attr[0].remove(open) : attr[0].add(open);
  attr[1].contains(hide) ? attr[1].remove(hide) : attr[1].add(hide);
}

function hideModal(shell) {
  let triggers = ['.modal_close','.modal_overlay'];
  triggers.map(function(trigger) {
    let button = elem(trigger);
    if (button) {
    button.addEventListener('click', function(e) {
        button == e.target ? toggleModal(shell) : false;
      });
    }
  });
};

(function definition() {
  let shell = '.definition_modal';
  let definitions = elems('.definition');
  if(definitions) {
    Array.from(definitions).map(function(definition, index) {
      definition.addEventListener('click', function() {
        let term = findText(definition, '.definition_title');
        let description = findText(definition, '.definition_desc');
        let new_term = elem('.definition_term');
        let new_description = elem('.definition_body');
        setText(new_term, term);
        setText(new_description, description);
        toggleModal(shell);
      }); 
    });
    hideModal(shell);
  }
})();

function fillModal(name, title, description, url) {
  let modal = elem('.member_modal');
  let new_name = elem('.modal_name', modal);
  let new_title = elem('.modal_title', modal);
  let new_description = elem('.modal_description', modal);
  let img = elem('img', modal);
  setText(new_name, name);
  setText(new_description, description);
  setText(new_title, title);
  img.src = url;
}

(function teamModal() {
  let shell = '.member_modal';
  let members = elems('.member');
  if(members) {
    Array.from(members).map(function(member, index) {
      member.addEventListener('click', function() {
        let name = findText(member, '.member_name');
        let title = findText(member, '.member_title');
        let description = findText(member, '.member_description');
        let imgUrl = member.querySelector('img').src;
        fillModal(name, title, description, imgUrl);
        toggleModal(shell);
      }); 
    }); 
    hideModal(shell);
  }
})();

function serveNonWebp() {
  let non_webp = document.documentElement.classList.contains('no-webp');
  return non_webp;
}

function switchToNonWebp () {
  let images = elems('img');
  Array.from(images).map(function(image, index) {
    let src = image.src;
    let webp = '.webp';
    let jpg = '.jpg';
    let new_src = src.replace(webp, jpg);
    image.src = new_src;
  });
};

$(document).ready(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);  
  (function initWebp() {
    serveNonWebp() ? switchToNonWebp() : false;
  })();
});

$(window).resize(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);
});

$(document).ready(function(){
  $('.aniview').AniView();
});

//For the contact form sub
$("#contactForm").submit(function(event){
  event.preventDefault();
  submitForm();
});

//Initializing tab layout
$('.nav-tabs a').click(function(){
  $(this).tab('show');
})


// $('.tab-content').not('.active').hide();

// $('.tab-nav a').click(function(e) {
//   e.preventDefault();
//   $('.tab-nav a').removeClass('active');
//   $(this).addClass('active');

//   $('.tab-content').hide();
//   $($.attr(this, 'href')).fadeIn(300);
// });

$('a[href*=#]:not([href=#])').click(function() {
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

// sea.tabs.js

$(function(){
  $('.seaTabs_tab').each(function(item){
    $(this).click(function(){
      $(this).addClass('seaTabs_switch_active').siblings().removeClass('seaTabs_switch_active');
      $($('.seaTabs_item')[item]).addClass('seaTabs_content_active').siblings().removeClass('seaTabs_content_active');
    });
  });
});


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

/*!
* classie v1.0.1
*/

( function( window ) {
  
  'use strict';
  
  // class helper functions from bonzo https://github.com/ded/bonzo
  
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  
  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
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

(function year(){
  var date = new Date();
  var year = date.getFullYear();
  document.querySelector('.year').innerHTML = year;
})();

(function autoResizeTextField() {
  let textarea = document.querySelector('textarea');
  textarea ? autosize(textarea) : false;
})();