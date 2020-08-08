const page = document;
const parentURL = "{{ .Site.BaseURL }}";

function elem(selector, parent = document){
  let elem = document.querySelector(selector);
  return elem != false ? elem : false;
}

function elems(selector) {
  let elems = document.querySelectorAll(selector);
  return elems.length ? elems : false; 
}

function pushClass(el, targetClasses) {
  // equivalent to addClass
  if (el && typeof el == 'object' && targetClasses) {
    let targets = targetClasses.split(" ");
    targets.forEach(function(targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? false : elClass.add(targetClass);
    });
  }
}

function deleteClass(el, targetClass) {
  // equivalent to removeClass
  if (el && typeof el == 'object' && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}

function modifyClass(el, targetClass) {
  // equivalent to toggleClass
  if (el && typeof el == 'object' && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
  }
}

(function highlightLinks() {
  'use strict';
  const marker = ':bluebutton';
  const links = Array.from(elems('a')).filter(function(link) {
    return link.textContent.includes(marker);
  });
  
  if(links) {
    links.forEach(function(link){
      let linkText = link.textContent;
      link.textContent = linkText.replace(marker, '');
      pushClass(link, 'snip snip_blue');
    });
  }
  
  const smallmarker = ':small'
  const smalls = Array.from(elems('p')).filter(function(paragraph){
    const content = paragraph.textContent
    return content.includes(smallmarker)
  });
  
  if(smalls.length >= 1) {
    smalls.forEach(function(small){
      pushClass(small, 'small');
      small.textContent = small.textContent.replace(smallmarker, "");
    });
  }
  
})();


function supportsWebp() {
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    const docVersion = navigator.appVersion.toLowerCase();
    const isSafari14 = docVersion.includes("version/14");
    return isSafari14 ? true : false;
  }
  return true
}

(() => {

  let bgs = elems('.has_bg');

  if (bgs) {
    bgs.forEach(function name(bg) {
      let bgStr = bg.style.backgroundImage;

      if (!bgStr.includes("http")) {
        bgStr = bgStr
          .replace(".jpg", ".webp")
          .replace(".png", ".webp")
          .replace("/images/", "/webp/");

        if (supportsWebp()) {
          bg.style.backgroundImage = bgStr;
        }
      }
    });
  }
  const images = elems('img');

  const replaceableimages = Array.from(images).filter(function (image) {
    const imageSrc = image.src.toLowerCase();
    const isJPEG = imageSrc.includes('.jpg')
    const isPNG = imageSrc.includes('.png')
    let skipImage = imageSrc.includes("http");
    if(skipImage) {
      skipImage = imageSrc.includes(parentURL) ? false : true;
    }
    const isReplaceable = isJPEG || isPNG;
    if(isReplaceable && skipImage == false) {
      return  image;
    }
  });

  function wrapEl(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  function swapImageSource(image, src) {
    supportsWebp() ? (image.src = src) : false;
  }

  (function imagesWebp() {
    replaceableimages.forEach(function (image) {
      let imageSrc = image.src;
      imageSrc = imageSrc
        .replace('.jpg', '.webp')
        .replace('.png', '.webp')
        .replace('/images/', '/webp/');

      swapImageSource(image, imageSrc);
    })
  })();

  function searchResults(results = [], order = []) {
    let resultsFragment = new DocumentFragment();
    let showResults = elem('.search_results');
    emptyEl(showResults);
    let index = 0
    results.forEach(function (result) {
      let item = createEl('a');
      item.href = result.link;
      item.className = 'search_result';
      item.textContent = result.title;
      item.style.order = order[index];
      resultsFragment.appendChild(item);
      index += 1
    });

    showResults.appendChild(resultsFragment);
  }

  (function search() {
    const searchField = elem('.search_field');

    if (searchField) {
      searchField.addEventListener('input', function () {
        let rawResults = idx.search(`${this.value}`).slice(0, 6);
        let refs = rawResults.map(function (ref) {
          // return id and score in a single string
          return `${ref.ref}:${ref.score}`;
        });

        let ids = refs.map(function (id) {
          let positionOfSeparator = id.indexOf(":");
          id = id.substring(0, positionOfSeparator)
          return Number(id);
        });

        let scores = refs.map(function (score) {
          let positionOfSeparator = score.indexOf(":");
          score = score.substring((positionOfSeparator + 1), (score.length - 1));
          return (parseFloat(score) * 50).toFixed(0);
        });

        let matchedDocuments = simpleIndex.filter(function (doc) {
          return ids.includes(doc.id);
        });

        matchedDocuments.length >= 1 ? searchResults(matchedDocuments, scores) : false;
      });
    }

  })();

})();

// function videoMarkUp(id) {
//   return `
//   <div class = 'video'>
//   <iframe src='https://www.youtube.com/embed/${id}?controls=1&rel=0'></iframe>
//   </div>
//   `;
// }

// (function youtubeVideo(){
//   const videos = elems('.video');

//   if(videos) {
//     videos.forEach(function(video){
//       const id = video.dataset.video
//       const markup = videoMarkUp(id);
//       video.innerHTML = markup;
//     });
//   }
// })();

// Replaces bootstrap carousel
(function Slider() {
  function activateSlide(el, position, direction) {
    let allSlides = Array.from(el);
    let active = 'slide_active';
    let retire = 'slide_retire';
    let activeSlide = allSlides.filter((slide) => {
      return slide.classList.contains(active);
    })[0];
    
    let currentPosition = allSlides.indexOf(activeSlide);
    // number of slides 
    let size = allSlides.length;
    
    function switchDot(position) {
      let active = 'dot_active';
      let dots = Array.from(activeSlide.parentNode.nextElementSibling.children);
      let activeDot = dots[currentPosition]; 
      let targetDot = dots[position];
      deleteClass(activeDot, active);
      pushClass(targetDot, active);
    }
    
    function switchSlide (position) {
      let targetSlide = allSlides[position];
      switchDot(position);
      pushClass(activeSlide, retire);
      deleteClass(targetSlide, retire);
      deleteClass(activeSlide, active);
      pushClass(targetSlide, active);
    }
    
    function arrows() {
      // Get the position of the active Slide
      if(direction === 1) {
        if(currentPosition >= 0 && currentPosition !== (size - 1)) {
          let position = (currentPosition + 1);
          switchSlide(position);
        } else {
          let position = 0;
          switchSlide(position);
        }
      } else {
        if(currentPosition !== 0) {
          let position = (currentPosition - 1);
          switchSlide(position);
        } else {
          let position = (size - 1);
          switchSlide(position);
        }
      }
    }
    
    function dots() {
      switchSlide(position);
    }
    
    position === undefined ? arrows() : dots();
    
  }
  
  let mainSection = document.querySelector('.slides_container');
  
  function sliderHelpers(check) {
    check.addEventListener('click', function(event) {
      let dot = event.target.closest('.dot');
      let direction = event.target.closest('.direction');
      let left = event.target.closest('.slide_left');
      let right = event.target.closest('.slide_right');
      
      if (dot) {
        let dots = dot.parentNode.children;
        let slides = dot.parentNode.previousElementSibling.children;
        let position = Array.from(dots).indexOf(dot);
        activateSlide(slides, position, undefined);
      }
      
      if(left || right) {
        let slides = direction.previousElementSibling.previousElementSibling.children;
        left ? activateSlide(slides, undefined, 0) : right ? activateSlide(slides, undefined, 1) : false ;
      }
    });
    
    check.addEventListener('keydown', function(event) {
      let slides = Array.from(event.target.children);
      if(slides) {
        let direction = event.code.toLowerCase() === 'arrowleft' ?  0 : (event.code.toLowerCase()  === 'arrowright' ? 1 : undefined); 
        if (direction !== undefined ) {
          direction === 0 ? activateSlide(slides, undefined, 0) : activateSlide(slides, undefined, 1) ;
        }
      }
    });
  }
  
  mainSection ? sliderHelpers(mainSection) : false; 
  
  function autoPlaySlide (speed) {
    window.setInterval(function() {
      let sliders = Array.from(document.querySelectorAll('.slides'));
      if(sliders) {
        sliders.forEach((slider) => {
          activateSlide(slider.children, undefined, 1);
        });
      }
    }, speed);
  }
  
  autoPlaySlide(10000);  
  
})();

(function() {
  let items = elems('.share_item');
  
  (function shareItem() {
    const copyToClipboard = str => {
      const el = document.createElement('textarea');  // Create a <textarea> element
      el.value = str;                                 // Set its value to the string that you want copied
      el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
      el.style.position = 'absolute';                 
      el.style.left = '-9999px';                      // Move outside the screen to make it invisible
      document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
      const selected =            
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
      el.select();                                    // Select the <textarea> content
      document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el);                  // Remove the <textarea> element
      if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
      }
      const copyText = document.createElement('div');
      copyText.classList.add('share_copy');
      copyText.innerText = 'Link Copied';
      // check if there's another notification
      let shareItems = Array.from(elem('.share').children);
      let shareLength = shareItems.length;
      let lastIndex = shareLength - 1;
      let lastShareItem = shareItems[lastIndex];
      if(lastShareItem.classList.contains('share_copy') == false) {
        elem('.share').appendChild(copyText);
        setTimeout(function() { 
          elem('.share').removeChild(copyText)
        }, 4000);
      }
    };
    
    elem('main').addEventListener('click', function(event) {
      let shareTrigger = event.target.closest('.share_item');
      if(shareTrigger) {
        let copyclass = shareTrigger.classList.contains('copy') ? true : false;
        let shareSrc = shareTrigger.href;
        event.preventDefault();
        if(copyclass) {
          copyToClipboard(shareSrc);
        } else {
          window.open(shareSrc, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
        }
      }
    });
  })();
})();

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

(function simple() {
  let button = elem('.simple_button');
  if(button) {
    let modal = elem('.simple_modal');
    let shell = '.simple_modal';
    button.addEventListener('click', function() {
      toggleModal(shell);
    });
    hideModal(shell);
  } 
})();

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
  let img = modal.children[0].children[0].children[0];
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

(function lazy() {
  function lazyLoadMedia(element) {
    let mediaItems = elems(element);
    if(mediaItems) {
      Array.from(mediaItems).forEach(function(item, index) {
      item.loading = "lazy";
        // let src = image.src;
        // let webp = '.webp';
        // let jpg = '.jpg';
        // let new_src = src.replace(webp, jpg);
        // image.src = new_src;
      });
    }
  }

  lazyLoadMedia('iframe');
  lazyLoadMedia('img');

})();

function createComponent(content, classAttr = false) {
  let div = document.createElement('div');
  div.innerHTML = content;
  classAttr ? div.classList.add(classAttr) : false;
  return div;
}

function fuzu () {
  let board = document.querySelector('.job_board');
  function callFuzu() {
    $.get('https://www.fuzu.com/api/company/computech-limited/all_jobs',
    function(data, status) {
      let fuzuData = data.fuzu_api;
      if (data.fuzu_api.length >= 1) {
        fuzuData.forEach(function(jobItem) {
          let jobTitle = createComponent(jobItem.title, 'job_title');
          let jobLocation = createComponent(jobItem.location, 'job_location');
          let icon = document.createElement('img');
          icon.src = '/assets/icons/location.svg';
          icon.classList.add('job_icon');
          icon.alt = 'icon';
          jobLocation.insertBefore(icon, jobLocation.firstChild);
          let jobApply = createComponent('Apply', 'snip');
          let job = document.createElement('a');
          job.classList.add('job');
          job.setAttribute('href', jobItem.styled_flow_url);
          job.setAttribute('target', '_blank');
          job.appendChild(jobTitle);
          job.appendChild(jobLocation);
          job.appendChild(jobApply);
          board.appendChild(job);
        });
      } else {
        let message = `
        <h2>Thanks for checking!</h2>
        <p>There are no vacancies at the moment. We shall list new positions as they become available.</p>
        <a href = 'mailto:HRKenya@computechlimited.com' class='simple_button snip'>Contact HR</a>
        `
        let errorContainer = document.createElement('div');
        pushClass(errorContainer, "pt-3 pb-3 center");
        errorContainer.innerHTML = message;
        board.appendChild(errorContainer);
      }
    });
  }
  board ? callFuzu() : false;
}

$(window).resize(function() {
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);
});

$(document).ready(function(){
  
  $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1050);  
  (function initWebp() {
    serveNonWebp() ? switchToNonWebp() : false;
  })();
  
  $('.aniview').AniView();
  
  fuzu();
  
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

(function year(){
  var date = new Date();
  var year = date.getFullYear();
  document.querySelector('.year').innerHTML = year;
})();

(function autoResizeTextField() {
  let textarea = document.querySelector('textarea');
  textarea ? autosize(textarea) : false;
})();

(function tabs() {
  let dfn = elem('.definition_modal');
  if (dfn) {
    let tiles = elems('.tile');
    Array.from(tiles).map(function(tile,index){
      tile.addEventListener('click', function(e) {
        let id = tile.id;
        let activeTab = elem(`.${id}`);
        let hide = 'hide';
        let t_class = activeTab.classList;
        t_class.contains(hide) ? t_class.remove(hide) : false;
        Array.from(activeTab.parentNode.children).filter(function(child) {
          return child != activeTab;
        }).map(function(sibling) {
          let s_class = sibling.classList;
          s_class.contains(hide) ? false : s_class.add(hide);
        }); 
      });
    });
  }
})();

(function AltImage() {
  let post = document.querySelector('.post_body');
  let postImages = post ? post.querySelectorAll('img') : false;
  if(postImages) {
    postImages.forEach((image) => {
      let desc = document.createElement('p');
      desc.classList.add('thumb_alt');
      desc.textContent = image.alt;
      image.insertAdjacentHTML('afterend', desc.outerHTML);
    });
  }
})();

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
  let tabz = elem('#tabz');
  tabz ? tabs() : false;
})();

(function fancyInput(input, btn) {
  input = elem('.chimp_input');
  btn = elem('.chimp_submit');
  if(input && btn) {
    let btn_class = btn.classList;
    let hide = 'chimp_hide';
    let show = 'chimp_show';
    // input.addEventListener('keydown', function(event) {
    //   btn_class.contains(hide) ? btn_class.remove(show) : btn_class.add(hide);
    // });
    // input.addEventListener('keyup', function(event) {
    //   setTimeout(() => {
    //     btn_class.contains(hide) ? btn_class.remove(hide) : btn_class.add(show);
    //   }, 5000);
    // });
  }
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
