
const page = document;
const parentURL = "{{ .Site.BaseURL }}";

function elem(selector, parent = document){
  let elem = parent.querySelector(selector);
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
    const isSafari14 = docVersion.includes("version/15");
    return isSafari14 ? true : false;
  }
  return true
}

function markTappableImages() {
  const postContent = elem('.post_content');
  if(postContent) {
    const links = elems('a', postContent);
    if(links.length) {
      links.forEach(function(link){
        const linkChildren = link.firstElementChild;
        if(linkChildren) {
          const isImageWrapper = linkChildren.tagName.toLowerCase() === 'img' ? true : false;
          if(isImageWrapper) {
            pushClass(link, 'nounderline');
          }
        }
      })
    }
  }
}

function wrapEl(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}


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

function filterReplaceableImages() {
  if(images.length) {
    const replaceableimages = Array.from(images).filter(function (image) {
      const imageSrc = image.src.toLowerCase();
      const isJPEG = imageSrc.includes('.jpg')
      const isPNG = imageSrc.includes('.png')
      let skipImage = imageSrc.includes("http") && !imageSrc.includes(parentURL);
      const isReplaceable = isJPEG || isPNG;
      if (isReplaceable) {
        if(!skipImage) {
          return image;
        }
      }
    });
    return replaceableimages;
  } else {
    return null
  }
}


function swapImageSource(image, src) {
  supportsWebp() ? (image.src = src) : false;
}

(function imagesWebp() {
  const replaceableimages = filterReplaceableImages();
  if(replaceableimages) {
    replaceableimages.forEach(function (image) {
      let imageSrc = image.src;
      imageSrc = imageSrc
      .replace('.jpg', '.webp')
      .replace('.png', '.webp')
      .replace('/images/', '/webp/');
      swapImageSource(image, imageSrc);
    })
  }
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
  autoPlaySlide(7500);
})();

(function() {
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
   const mainEl = elem('main');
   if(mainEl) {
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
   }
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
      });
    }
  }
  lazyLoadMedia('img');
  setTimeout(function(){
    lazyLoadMedia('iframe');
  }, 1000)
})();

// function createComponent(content, classAttr = false) {
//   let div = document.createElement('div');
//   div.innerHTML = content;
//   classAttr ? div.classList.add(classAttr) : false;
//   return div;
// }

// function fuzu () {
//   let board = document.querySelector('.job_board');
// }

(function AltImage() {
  let post = document.querySelector('.post_body');
  let postImages = post ? post.querySelectorAll('img') : false;
  if(postImages) {
    postImages.forEach((image) => {
      let desc = document.createElement('p');
      desc.classList.add('thumb_alt');
      let caption = image.alt;
      const inline = ":inline";
      if(caption.includes(inline)) {
        caption = caption.replace(inline, "");
        pushClass(image, 'image_inline');
      }
      desc.textContent = caption;
      image.insertAdjacentHTML('afterend', desc.outerHTML);

      markTappableImages();
    });
  }
})();

(function year(){
  const date = new Date();
  const year = date.getFullYear();
  const yearEl = elem('.year');
  yearEl ? (yearEl.innerHTML = `${year} `) : false;
})();

(function bricks(){
  const bricks = elems('.bricks_image');
  if(bricks.length) {
    const viewport = bricks[0].closest('.post').offsetWidth;
    bricks.forEach(function(brick){
      const brickWidth = brick.offsetWidth;
      const scaler = (viewport / brickWidth).toPrecision(2);
      // brick.addEventListener('mouseenter', function(event){
      //   const target = event.target;
      //   target.style.transform = `scale(${scaler})`;
      // });
      // brick.addEventListener('mouseleave', function(event){
      //   const target = event.target;
      //   target.style.transform = `scale(1)`;
      // });
    });

  }
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