function elem(selector){
  let elem = document.querySelector(selector);
  return elem != false ? elem : false;
}

function isObj(obj) {
  return (obj && typeof obj === 'object' && obj !== null) ? true : false;
}

function createEl(element = 'div') {
  return document.createElement(element);
}

function elems(selector, parent = document) {
  let elems = parent.querySelectorAll(selector);
  return elems.length ? elems : false;
}

function pushClass(el, targetClass) {
  // equivalent to addClass
  if (el && typeof el == 'object' && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? false : elClass.add(targetClass);
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

function containsClass(el, targetClass) {
  if (el && typeof el == 'object' && targetClass) {
    return el.classList.contains(targetClass) ? true : false;
  }
}

function emptyEl(el) {
  while(el.firstChild)
  el.removeChild(el.firstChild);
}

function wrapEl(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

function wrapText(text, context, wrapper = 'mark') {
  let open = `<${wrapper}>`;
  let close = `</${wrapper}>`;
  function wrap(context) {
    let c = context.innerHTML;
    let pattern = new RegExp(text, "gi");
    let matches = text.length ? c.match(pattern) : null;

    if(matches) {
      matches.forEach(function(matchStr){
        c = c.replaceAll(matchStr, `${open}${matchStr}${close}`);
        context.innerHTML = c;
      });
    }
  }

  const contents = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "code", "td"];

  contents.forEach(function(c){
    const cs = elems(c, context);
    if(cs.length) {
      cs.forEach(function(cx){
        if(cx.children.length >= 1) {
          Array.from(cx.children).forEach(function(child){
            wrap(child);
          })
          wrap(cx);
        } else {
          wrap(cx);
        }
        // sanitize urls and ids
      });
    }
  });

  const hyperLinks = elems('a');
  if(hyperLinks) {
    hyperLinks.forEach(function(link){
      const href = link.href.replaceAll(encodeURI(open), "").replaceAll(encodeURI(close), "");
      link.href = href;
    });
  }
}