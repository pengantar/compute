/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,s,o){return jQuery.easing[jQuery.easing.def](t,e,i,s,o)},easeInQuad:function(t,e,i,s,o){return s*(e/=o)*e+i},easeOutQuad:function(t,e,i,s,o){return-s*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e+i:-s/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,s,o){return s*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,s,o){return s*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e+i:s/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,s,o){return s*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,s,o){return-s*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e*e+i:-s/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,s,o){return s*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,s,o){return s*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,s,o){return(e/=o/2)<1?s/2*e*e*e*e*e+i:s/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,s,o){return-s*Math.cos(e/o*(Math.PI/2))+s+i},easeOutSine:function(t,e,i,s,o){return s*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,s,o){return-s/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,s,o){return 0==e?i:s*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,s,o){return e==o?i+s:s*(1-Math.pow(2,-10*e/o))+i},easeInOutExpo:function(t,e,i,s,o){return 0==e?i:e==o?i+s:(e/=o/2)<1?s/2*Math.pow(2,10*(e-1))+i:s/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,s,o){return-s*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,s,o){return s*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,s,o){return(e/=o/2)<1?-s/2*(Math.sqrt(1-e*e)-1)+i:s/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(1==(e/=o))return i+s;if(a||(a=.3*o),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return-r*Math.pow(2,10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)+i},easeOutElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(1==(e/=o))return i+s;if(a||(a=.3*o),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return r*Math.pow(2,-10*e)*Math.sin((e*o-n)*(2*Math.PI)/a)+s+i},easeInOutElastic:function(t,e,i,s,o){var n=1.70158,a=0,r=s;if(0==e)return i;if(2==(e/=o/2))return i+s;if(a||(a=o*(.3*1.5)),r<Math.abs(s)){r=s;n=a/4}else n=a/(2*Math.PI)*Math.asin(s/r);return e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/a)*.5+s+i},easeInBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),s*(e/=o)*e*((n+1)*e-n)+i},easeOutBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),s*((e=e/o-1)*e*((n+1)*e+n)+1)+i},easeInOutBack:function(t,e,i,s,o,n){return void 0==n&&(n=1.70158),(e/=o/2)<1?s/2*(e*e*((1+(n*=1.525))*e-n))+i:s/2*((e-=2)*e*((1+(n*=1.525))*e+n)+2)+i},easeInBounce:function(t,e,i,s,o){return s-jQuery.easing.easeOutBounce(t,o-e,0,s,o)+i},easeOutBounce:function(t,e,i,s,o){return(e/=o)<1/2.75?s*(7.5625*e*e)+i:e<2/2.75?s*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?s*(7.5625*(e-=2.25/2.75)*e+.9375)+i:s*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,s,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,s,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,s,o)+.5*s+i}}),function(t){t.bootstrapDropdownOnHover=function(e,i){var s={mouseOutDelay:500,responsiveThreshold:992,hideBackdrop:!0},o=this;o.settings={};var n=t(e),a=t(window),r=-1;o.init=function(){o.settings=t.extend({},s,i),n.find("[data-toggle='dropdown']").each(function(e,i){var s=t(i),n=s.parent().find(".dropdown-menu"),a=s.parent();s.on("mouseenter.bnoh",function(){u()||(clearTimeout(r),a.hasClass("open")||(s.dropdown("toggle"),o.settings.hideBackdrop&&a.find(".dropdown-backdrop").remove()))}),s.on("mouseleave.bnoh",function(){u()||(r=setTimeout(function(){a.hasClass("open")&&0===a.find(".dropdown-backdrop").length&&(s.dropdown("toggle"),s.blur())},o.settings.mouseOutDelay))}),n.on("mouseenter.bnoh",function(){u()||clearTimeout(r)}),n.on("mouseleave.bnoh",function(){u()||(r=setTimeout(function(){a.hasClass("open")&&(s.dropdown("toggle"),s.blur())},o.settings.mouseOutDelay))})})},o.destroy=function(){n.find("[data-toggle='dropdown']").unbind(".bnoh"),n.find(".dropdown-menu").unbind(".bnoh"),n.removeData("bootstrapDropdownOnHover")};var u=function(){return a.width()<=o.settings.responsiveThreshold};o.init()},t.fn.bootstrapDropdownOnHover=function(e){return this.each(function(){if(void 0===t(this).data("bootstrapDropdownOnHover")){var i=new t.bootstrapDropdownOnHover(this,e);t(this).data("bootstrapDropdownOnHover",i)}})}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)}(function($){var menuTrees=[],IE=!!window.createPopup,mouse=!1,touchEvents="ontouchstart"in window,mouseDetectionEnabled=!1,requestAnimationFrame=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},cancelAnimationFrame=window.cancelAnimationFrame||function(t){clearTimeout(t)};function initMouseDetection(t){var e=".smartmenus_mouse";if(mouseDetectionEnabled||t)mouseDetectionEnabled&&t&&($(document).unbind(e),mouseDetectionEnabled=!1);else{var i=!0,s=null;$(document).bind(getEventsNS([["mousemove",function(t){var e={x:t.pageX,y:t.pageY,timeStamp:(new Date).getTime()};if(s){var o=Math.abs(s.x-e.x),n=Math.abs(s.y-e.y);if((o>0||n>0)&&o<=2&&n<=2&&e.timeStamp-s.timeStamp<=300&&(mouse=!0,i)){var a=$(t.target).closest("a");a.is("a")&&$.each(menuTrees,function(){if($.contains(this.$root[0],a[0]))return this.itemEnter({currentTarget:a[0]}),!1}),i=!1}}s=e}],[touchEvents?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(t){isTouchEvent(t.originalEvent)&&(mouse=!1)}]],e)),mouseDetectionEnabled=!0}}function isTouchEvent(t){return!/^(4|mouse)$/.test(t.pointerType)}function getEventsNS(t,e){e||(e="");var i={};return $.each(t,function(t,s){i[s[0].split(" ").join(e+" ")+e]=s[1]}),i}return $.SmartMenus=function(t,e){this.$root=$(t),this.opts=e,this.rootId="",this.accessIdPrefix="",this.$subArrow=null,this.activatedItems=[],this.visibleSubMenus=[],this.showTimeout=0,this.hideTimeout=0,this.scrollTimeout=0,this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.idInc=0,this.$firstLink=null,this.$firstSub=null,this.disabled=!1,this.$disableOverlay=null,this.$touchScrollingSub=null,this.cssTransforms3d="perspective"in t.style||"webkitPerspective"in t.style,this.wasCollapsible=!1,this.init()},$.extend($.SmartMenus,{hideAll:function(){$.each(menuTrees,function(){this.menuHideAll()})},destroy:function(){for(;menuTrees.length;)menuTrees[0].destroy();initMouseDetection(!0)},prototype:{init:function(t){var e=this;if(!t){menuTrees.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.accessIdPrefix="sm-"+this.rootId+"-",this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=!0);var i=".smartmenus";this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(getEventsNS([["mouseover focusin",$.proxy(this.rootOver,this)],["mouseout focusout",$.proxy(this.rootOut,this)],["keydown",$.proxy(this.rootKeyDown,this)]],i)).delegate("a",getEventsNS([["mouseenter",$.proxy(this.itemEnter,this)],["mouseleave",$.proxy(this.itemLeave,this)],["mousedown",$.proxy(this.itemDown,this)],["focus",$.proxy(this.itemFocus,this)],["blur",$.proxy(this.itemBlur,this)],["click",$.proxy(this.itemClick,this)]],i)),i+=this.rootId,this.opts.hideOnClick&&$(document).bind(getEventsNS([["touchstart",$.proxy(this.docTouchStart,this)],["touchmove",$.proxy(this.docTouchMove,this)],["touchend",$.proxy(this.docTouchEnd,this)],["click",$.proxy(this.docClick,this)]],i)),$(window).bind(getEventsNS([["resize orientationchange",$.proxy(this.winResize,this)]],i)),this.opts.subIndicators&&(this.$subArrow=$("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),initMouseDetection()}if(this.$firstSub=this.$root.find("ul").each(function(){e.menuInit($(this))}).eq(0),this.$firstLink=this.$root.find("a").eq(0),this.opts.markCurrentItem){var s=/(index|default)\.[^#\?\/]*/i,o=window.location.href.replace(s,""),n=o.replace(/#.*/,"");this.$root.find("a").each(function(){var t=this.href.replace(s,""),i=$(this);t!=o&&t!=n||(i.addClass("current"),e.opts.markCurrentTree&&i.parentsUntil("[data-smartmenus-id]","ul").each(function(){$(this).dataSM("parent-a").addClass("current")}))})}this.wasCollapsible=this.isCollapsible()},destroy:function(t){if(!t){var e=".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(e).undelegate(e),e+=this.rootId,$(document).unbind(e),$(window).unbind(e),this.opts.subIndicators&&(this.$subArrow=null)}this.menuHideAll();var i=this;this.$root.find("ul").each(function(){var t=$(this);t.dataSM("scroll-arrows")&&t.dataSM("scroll-arrows").remove(),t.dataSM("shown-before")&&((i.opts.subMenusMinWidth||i.opts.subMenusMaxWidth)&&t.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap"),t.dataSM("scroll-arrows")&&t.dataSM("scroll-arrows").remove(),t.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})),0==(t.attr("id")||"").indexOf(i.accessIdPrefix)&&t.removeAttr("id")}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"),this.$root.find("a.has-submenu").each(function(){var t=$(this);0==t.attr("id").indexOf(i.accessIdPrefix)&&t.removeAttr("id")}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"),this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove(),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),t||(this.$root=null,this.$firstLink=null,this.$firstSub=null,this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),menuTrees.splice($.inArray(this,menuTrees),1))},disable:function(t){if(!this.disabled){if(this.menuHideAll(),!t&&!this.opts.isPopup&&this.$root.is(":visible")){var e=this.$root.offset();this.$disableOverlay=$('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(!0),opacity:0}).appendTo(document.body)}this.disabled=!0}},docClick:function(t){this.$touchScrollingSub?this.$touchScrollingSub=null:(this.visibleSubMenus.length&&!$.contains(this.$root[0],t.target)||$(t.target).is("a"))&&this.menuHideAll()},docTouchEnd:function(t){if(this.lastTouch){if(this.visibleSubMenus.length&&(void 0===this.lastTouch.x2||this.lastTouch.x1==this.lastTouch.x2)&&(void 0===this.lastTouch.y2||this.lastTouch.y1==this.lastTouch.y2)&&(!this.lastTouch.target||!$.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},350)}this.lastTouch=null}},docTouchMove:function(t){if(this.lastTouch){var e=t.originalEvent.touches[0];this.lastTouch.x2=e.pageX,this.lastTouch.y2=e.pageY}},docTouchStart:function(t){var e=t.originalEvent.touches[0];this.lastTouch={x1:e.pageX,y1:e.pageY,target:e.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getClosestMenu:function(t){for(var e=$(t).closest("ul");e.dataSM("in-mega");)e=e.parent().closest("ul");return e[0]||null},getHeight:function(t){return this.getOffset(t,!0)},getOffset:function(t,e){var i;"none"==t.css("display")&&(i={position:t[0].style.position,visibility:t[0].style.visibility},t.css({position:"absolute",visibility:"hidden"}).show());var s=t[0].getBoundingClientRect&&t[0].getBoundingClientRect(),o=s&&(e?s.height||s.bottom-s.top:s.width||s.right-s.left);return o||0===o||(o=e?t[0].offsetHeight:t[0].offsetWidth),i&&t.hide().css(i),o},getStartZIndex:function(t){var e=parseInt(this[t?"$root":"$firstSub"].css("z-index"));return!t&&isNaN(e)&&(e=parseInt(this.$root.css("z-index"))),isNaN(e)?1:e},getTouchPoint:function(t){return t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0]||t},getViewport:function(t){var e=t?"Height":"Width",i=document.documentElement["client"+e],s=window["inner"+e];return s&&(i=Math.min(i,s)),i},getViewportHeight:function(){return this.getViewport(!0)},getViewportWidth:function(){return this.getViewport()},getWidth:function(t){return this.getOffset(t)},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(t){return this.handleEvents()&&!this.isLinkInMegaMenu(t)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){var t="fixed"==this.$root.css("position");return t||this.$root.parentsUntil("body").each(function(){if("fixed"==$(this).css("position"))return t=!0,!1}),t},isLinkInMegaMenu:function(t){return $(this.getClosestMenu(t[0])).hasClass("mega-menu")},isTouchMode:function(){return!mouse||this.opts.noMouseOver||this.isCollapsible()},itemActivate:function(t,e){var i=t.closest("ul"),s=i.dataSM("level");if(s>1&&(!this.activatedItems[s-2]||this.activatedItems[s-2][0]!=i.dataSM("parent-a")[0])){var o=this;$(i.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(i).each(function(){o.itemActivate($(this).dataSM("parent-a"))})}if(this.isCollapsible()&&!e||this.menuHideSubMenus(this.activatedItems[s-1]&&this.activatedItems[s-1][0]==t[0]?s:s-1),this.activatedItems[s-1]=t,!1!==this.$root.triggerHandler("activate.smapi",t[0])){var n=t.dataSM("sub");n&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(n)}},itemBlur:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&this.$root.triggerHandler("blur.smapi",e[0])},itemClick:function(t){var e=$(t.currentTarget);if(this.handleItemEvents(e)){if(this.$touchScrollingSub&&this.$touchScrollingSub[0]==e.closest("ul")[0])return this.$touchScrollingSub=null,t.stopPropagation(),!1;if(!1===this.$root.triggerHandler("click.smapi",e[0]))return!1;var i=$(t.target).is("span.sub-arrow"),s=e.dataSM("sub"),o=!!s&&2==s.dataSM("level");if(s&&!s.is(":visible")){if(this.opts.showOnClick&&o&&(this.clickActivated=!0),this.itemActivate(e),s.is(":visible"))return this.focusActivated=!0,!1}else if(this.isCollapsible()&&i)return this.itemActivate(e),this.menuHide(s),!1;return!(this.opts.showOnClick&&o||e.hasClass("disabled")||!1===this.$root.triggerHandler("select.smapi",e[0]))&&void 0}},itemDown:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&e.dataSM("mousedown",!0)},itemEnter:function(t){var e=$(t.currentTarget);if(this.handleItemEvents(e)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var i=this;this.showTimeout=setTimeout(function(){i.itemActivate(e)},this.opts.showOnClick&&1==e.closest("ul").dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",e[0])}},itemFocus:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&(!this.focusActivated||this.isTouchMode()&&e.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==e[0]||this.itemActivate(e,!0),this.$root.triggerHandler("focus.smapi",e[0]))},itemLeave:function(t){var e=$(t.currentTarget);this.handleItemEvents(e)&&(this.isTouchMode()||(e[0].blur(),this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0)),e.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",e[0]))},menuHide:function(t){if(!1!==this.$root.triggerHandler("beforehide.smapi",t[0])&&(t.stop(!0,!0),"none"!=t.css("display"))){var e=function(){t.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?this.opts.collapsibleHideFunction.call(this,t,e):t.hide(this.opts.collapsibleHideDuration,e):this.opts.hideFunction?this.opts.hideFunction.call(this,t,e):t.hide(this.opts.hideDuration,e),t.dataSM("ie-shim")&&t.dataSM("ie-shim").remove().css({"-webkit-transform":"",transform:""}),t.dataSM("scroll")&&(this.menuScrollStop(t),t.css({"touch-action":"","-ms-touch-action":"","-webkit-transform":"",transform:""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()),t.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded","false"),t.attr({"aria-expanded":"false","aria-hidden":"true"});var i=t.dataSM("level");this.activatedItems.splice(i-1,1),this.visibleSubMenus.splice($.inArray(t,this.visibleSubMenus),1),this.$root.triggerHandler("hide.smapi",t[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);for(var t=this.opts.isPopup?1:0,e=this.visibleSubMenus.length-1;e>=t;e--)this.menuHide(this.visibleSubMenus[e]);this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove())),this.activatedItems=[],this.visibleSubMenus=[],this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.$root.triggerHandler("hideAll.smapi")},menuHideSubMenus:function(t){for(var e=this.activatedItems.length-1;e>=t;e--){var i=this.activatedItems[e].dataSM("sub");i&&this.menuHide(i)}},menuIframeShim:function(t){IE&&this.opts.overlapControlsInIE&&!t.dataSM("ie-shim")&&t.dataSM("ie-shim",$("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(t){if(!t.dataSM("in-mega")){t.hasClass("mega-menu")&&t.find("ul").dataSM("in-mega",!0);for(var e=2,i=t[0];(i=i.parentNode.parentNode)!=this.$root[0];)e++;var s=t.prevAll("a").eq(-1);s.length||(s=t.prevAll().find("a").eq(-1)),s.addClass("has-submenu").dataSM("sub",t),t.dataSM("parent-a",s).dataSM("level",e).parent().dataSM("sub",t);var o=s.attr("id")||this.accessIdPrefix+ ++this.idInc,n=t.attr("id")||this.accessIdPrefix+ ++this.idInc;s.attr({id:o,"aria-haspopup":"true","aria-controls":n,"aria-expanded":"false"}),t.attr({id:n,role:"group","aria-hidden":"true","aria-labelledby":o,"aria-expanded":"false"}),this.opts.subIndicators&&s[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(t){var e,i,s=t.dataSM("parent-a"),o=s.closest("li"),n=o.parent(),a=t.dataSM("level"),r=this.getWidth(t),u=this.getHeight(t),h=s.offset(),l=h.left,d=h.top,c=this.getWidth(s),m=this.getHeight(s),p=$(window),f=p.scrollLeft(),v=p.scrollTop(),b=this.getViewportWidth(),w=this.getViewportHeight(),g=n.parent().is("[data-sm-horizontal-sub]")||2==a&&!n.hasClass("sm-vertical"),S=this.opts.rightToLeftSubMenus&&!o.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&o.is("[data-sm-reverse]"),M=2==a?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,T=2==a?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;if(g?(e=S?c-r-M:M,i=this.opts.bottomToTopSubMenus?-u-T:m+T):(e=S?M-r:c-M,i=this.opts.bottomToTopSubMenus?m-T-u:T),this.opts.keepInViewport){var y=l+e,I=d+i;if(S&&y<f?e=g?f-y+e:c-M:!S&&y+r>f+b&&(e=g?f+b-r-y+e:M-r),g||(u<w&&I+u>v+w?i+=v+w-u-I:(u>=w||I<v)&&(i+=v-I)),g&&(I+u>v+w+.49||I<v)||!g&&u>w+.49){var x=this;t.dataSM("scroll-arrows")||t.dataSM("scroll-arrows",$([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],$('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){t.dataSM("scroll").up=$(this).hasClass("scroll-up"),x.menuScroll(t)},mouseleave:function(e){x.menuScrollStop(t),x.menuScrollOut(t,e)},"mousewheel DOMMouseScroll":function(t){t.preventDefault()}}).insertAfter(t));var C=".smartmenus_scroll";t.dataSM("scroll",{y:this.cssTransforms3d?0:i-m,step:1,itemH:m,subH:u,arrowDownH:this.getHeight(t.dataSM("scroll-arrows").eq(1))}).bind(getEventsNS([["mouseover",function(e){x.menuScrollOver(t,e)}],["mouseout",function(e){x.menuScrollOut(t,e)}],["mousewheel DOMMouseScroll",function(e){x.menuScrollMousewheel(t,e)}]],C)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:e+(parseInt(t.css("border-left-width"))||0),width:r-(parseInt(t.css("border-left-width"))||0)-(parseInt(t.css("border-right-width"))||0),zIndex:t.css("z-index")}).eq(g&&this.opts.bottomToTopSubMenus?0:1).show(),this.isFixed()&&t.css({"touch-action":"none","-ms-touch-action":"none"}).bind(getEventsNS([[touchEvents?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(e){x.menuScrollTouch(t,e)}]],C))}}t.css({top:"auto",left:"0",marginLeft:e,marginTop:i-m}),this.menuIframeShim(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").css({zIndex:t.css("z-index"),width:r,height:u,marginLeft:e,marginTop:i-m})},menuScroll:function(t,e,i){var s,o=t.dataSM("scroll"),n=t.dataSM("scroll-arrows"),a=o.up?o.upEnd:o.downEnd;if(!e&&o.momentum){if(o.momentum*=.92,(s=o.momentum)<.5)return void this.menuScrollStop(t)}else s=i||(e||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(o.step));var r=t.dataSM("level");if(this.activatedItems[r-1]&&this.activatedItems[r-1].dataSM("sub")&&this.activatedItems[r-1].dataSM("sub").is(":visible")&&this.menuHideSubMenus(r-1),o.y=o.up&&a<=o.y||!o.up&&a>=o.y?o.y:Math.abs(a-o.y)>s?o.y+(o.up?s:-s):a,t.add(t.dataSM("ie-shim")).css(this.cssTransforms3d?{"-webkit-transform":"translate3d(0, "+o.y+"px, 0)",transform:"translate3d(0, "+o.y+"px, 0)"}:{marginTop:o.y}),mouse&&(o.up&&o.y>o.downEnd||!o.up&&o.y<o.upEnd)&&n.eq(o.up?1:0).show(),o.y==a)mouse&&n.eq(o.up?0:1).hide(),this.menuScrollStop(t);else if(!e){this.opts.scrollAccelerate&&o.step<this.opts.scrollStep&&(o.step+=.2);var u=this;this.scrollTimeout=requestAnimationFrame(function(){u.menuScroll(t)})}},menuScrollMousewheel:function(t,e){if(this.getClosestMenu(e.target)==t[0]){var i=((e=e.originalEvent).wheelDelta||-e.detail)>0;t.dataSM("scroll-arrows").eq(i?0:1).is(":visible")&&(t.dataSM("scroll").up=i,this.menuScroll(t,!0))}e.preventDefault()},menuScrollOut:function(t,e){mouse&&(/^scroll-(up|down)/.test((e.relatedTarget||"").className)||(t[0]==e.relatedTarget||$.contains(t[0],e.relatedTarget))&&this.getClosestMenu(e.relatedTarget)==t[0]||t.dataSM("scroll-arrows").css("visibility","hidden"))},menuScrollOver:function(t,e){if(mouse&&!/^scroll-(up|down)/.test(e.target.className)&&this.getClosestMenu(e.target)==t[0]){this.menuScrollRefreshData(t);var i=t.dataSM("scroll"),s=$(window).scrollTop()-t.dataSM("parent-a").offset().top-i.itemH;t.dataSM("scroll-arrows").eq(0).css("margin-top",s).end().eq(1).css("margin-top",s+this.getViewportHeight()-i.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function(t){var e=t.dataSM("scroll"),i=$(window).scrollTop()-t.dataSM("parent-a").offset().top-e.itemH;this.cssTransforms3d&&(i=-(parseFloat(t.css("margin-top"))-i)),$.extend(e,{upEnd:i,downEnd:i+this.getViewportHeight()-e.subH})},menuScrollStop:function(t){if(this.scrollTimeout)return cancelAnimationFrame(this.scrollTimeout),this.scrollTimeout=0,t.dataSM("scroll").step=1,!0},menuScrollTouch:function(t,e){if(isTouchEvent(e=e.originalEvent)){var i=this.getTouchPoint(e);if(this.getClosestMenu(i.target)==t[0]){var s=t.dataSM("scroll");if(/(start|down)$/i.test(e.type))this.menuScrollStop(t)?(e.preventDefault(),this.$touchScrollingSub=t):this.$touchScrollingSub=null,this.menuScrollRefreshData(t),$.extend(s,{touchStartY:i.pageY,touchStartTime:e.timeStamp});else if(/move$/i.test(e.type)){var o=void 0!==s.touchY?s.touchY:s.touchStartY;if(void 0!==o&&o!=i.pageY){this.$touchScrollingSub=t;var n=o<i.pageY;void 0!==s.up&&s.up!=n&&$.extend(s,{touchStartY:i.pageY,touchStartTime:e.timeStamp}),$.extend(s,{up:n,touchY:i.pageY}),this.menuScroll(t,!0,Math.abs(i.pageY-o))}e.preventDefault()}else void 0!==s.touchY&&((s.momentum=15*Math.pow(Math.abs(i.pageY-s.touchStartY)/(e.timeStamp-s.touchStartTime),2))&&(this.menuScrollStop(t),this.menuScroll(t),e.preventDefault()),delete s.touchY)}}},menuShow:function(t){if((t.dataSM("beforefirstshowfired")||(t.dataSM("beforefirstshowfired",!0),!1!==this.$root.triggerHandler("beforefirstshow.smapi",t[0])))&&!1!==this.$root.triggerHandler("beforeshow.smapi",t[0])&&(t.dataSM("shown-before",!0).stop(!0,!0),!t.is(":visible"))){var e=t.dataSM("parent-a");if((this.opts.keepHighlighted||this.isCollapsible())&&e.addClass("highlighted"),this.isCollapsible())t.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""});else{if(t.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1),(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)&&(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth)){var i=this.getWidth(t);t.css("max-width",this.opts.subMenusMaxWidth),i>this.getWidth(t)&&t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").insertBefore(t)}var s=function(){t.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,t,s):t.show(this.opts.collapsibleShowDuration,s):this.opts.showFunction?this.opts.showFunction.call(this,t,s):t.show(this.opts.showDuration,s),e.attr("aria-expanded","true"),t.attr({"aria-expanded":"true","aria-hidden":"false"}),this.visibleSubMenus.push(t),this.$root.triggerHandler("show.smapi",t[0])}},popupHide:function(t){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},t?1:this.opts.hideTimeout)},popupShow:function(t,e){if(this.opts.isPopup){if(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.$root.dataSM("shown-before",!0).stop(!0,!0),!this.$root.is(":visible")){this.$root.css({left:t,top:e}),this.menuIframeShim(this.$root),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:t,top:e}).insertBefore(this.$root);var i=this,s=function(){i.$root.css("overflow","")};this.opts.showFunction?this.opts.showFunction.call(this,this.$root,s):this.$root.show(this.opts.showDuration,s),this.visibleSubMenus[0]=this.$root}}else alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.')},refresh:function(){this.destroy(!0),this.init(!0)},rootKeyDown:function(t){if(this.handleEvents())switch(t.keyCode){case 27:var e=this.activatedItems[0];e&&(this.menuHideAll(),e[0].focus(),(i=e.dataSM("sub"))&&this.menuHide(i));break;case 32:var i,s=$(t.target);s.is("a")&&this.handleItemEvents(s)&&(i=s.dataSM("sub"))&&!i.is(":visible")&&(this.itemClick({currentTarget:t.target}),t.preventDefault())}},rootOut:function(t){if(this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var e=this;this.hideTimeout=setTimeout(function(){e.menuHideAll()},this.opts.hideTimeout)}},rootOver:function(t){this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(t){if(this.handleEvents()){if(!("onorientationchange"in window)||"orientationchange"==t.type){var e=this.isCollapsible();this.wasCollapsible&&e||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll()),this.wasCollapsible=e}}else if(this.$disableOverlay){var i=this.$root.offset();this.$disableOverlay.css({top:i.top,left:i.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}}}}),$.fn.dataSM=function(t,e){return e?this.data(t+"_smartmenus",e):this.data(t+"_smartmenus")},$.fn.removeDataSM=function(t){return this.removeData(t+"_smartmenus")},$.fn.smartmenus=function(options){if("string"==typeof options){var args=arguments,method=options;return Array.prototype.shift.call(args),this.each(function(){var t=$(this).data("smartmenus");t&&t[method]&&t[method].apply(t,args)})}var dataOpts=this.data("sm-options")||null;if(dataOpts)try{dataOpts=eval("("+dataOpts+")")}catch(t){dataOpts=null,alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.')}return this.each(function(){new $.SmartMenus(this,$.extend({},$.fn.smartmenus.defaults,options,dataOpts))})},$.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(t,e){t.fadeOut(200,e)},collapsibleShowDuration:0,collapsibleShowFunction:function(t,e){t.slideDown(200,e)},collapsibleHideDuration:0,collapsibleHideFunction:function(t,e){t.slideUp(200,e)},showOnClick:!1,hideOnClick:!0,noMouseOver:!1,keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0},$}),function(t){"function"==typeof define&&define.amd?define(["jquery","jquery.smartmenus"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){return t.extend(t.SmartMenus.Bootstrap={},{keydownFix:!1,init:function(){var e=t("ul.navbar-nav:not([data-sm-skip])");e.each(function(){function e(){o.find("a.current").parent().addClass("active"),o.find("a.has-submenu").each(function(){var e=t(this);e.is('[data-toggle="dropdown"]')&&e.dataSM("bs-data-toggle-dropdown",!0).removeAttr("data-toggle"),e.is('[role="button"]')&&e.dataSM("bs-role-button",!0).removeAttr("role")})}function i(t){var e=n.getViewportWidth();if(e!=s||t){var i=o.find(".caret");n.isCollapsible()?(o.addClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||i.addClass("navbar-toggle sub-arrow")):(o.removeClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||i.removeClass("navbar-toggle sub-arrow")),s=e}}var s,o=t(this),n=o.data("smartmenus");n||(o.smartmenus({subMenusSubOffsetX:2,subMenusSubOffsetY:-6,subIndicators:!1,collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:o.hasClass("navbar-right"),bottomToTopSubMenus:o.closest(".navbar").hasClass("navbar-fixed-bottom")}).bind({"show.smapi":function(e,i){var s=t(i),o=s.dataSM("scroll-arrows");o&&o.css("background-color",t(document.body).css("background-color")),s.parent().addClass("open")},"hide.smapi":function(e,i){t(i).parent().removeClass("open")}}),e(),(n=o.data("smartmenus")).isCollapsible=function(){return!/^(left|right)$/.test(this.$firstLink.parent().css("float"))},n.refresh=function(){t.SmartMenus.prototype.refresh.call(this),e(),i(!0)},n.destroy=function(e){o.find("a.current").parent().removeClass("active"),o.find("a.has-submenu").each(function(){var e=t(this);e.dataSM("bs-data-toggle-dropdown")&&e.attr("data-toggle","dropdown").removeDataSM("bs-data-toggle-dropdown"),e.dataSM("bs-role-button")&&e.attr("role","button").removeDataSM("bs-role-button")}),t.SmartMenus.prototype.destroy.call(this,e)},o.is("[data-sm-skip-collapsible-behavior]")&&o.bind({"click.smapi":function(e,i){if(n.isCollapsible()){var s=t(i),o=s.parent().dataSM("sub");if(o&&o.dataSM("shown-before")&&o.is(":visible"))return n.itemActivate(s),n.menuHide(o),!1}}}),i(),t(window).bind("resize.smartmenus"+n.rootId,i))}),e.length&&!t.SmartMenus.Bootstrap.keydownFix&&(t(document).off("keydown.bs.dropdown.data-api",".dropdown-menu"),t.fn.dropdown&&t.fn.dropdown.Constructor&&t(document).on("keydown.bs.dropdown.data-api",'.dropdown-menu:not([id^="sm-"])',t.fn.dropdown.Constructor.prototype.keydown),t.SmartMenus.Bootstrap.keydownFix=!0)}}),t(t.SmartMenus.Bootstrap.init),t}),function(t){var e=0;t.fn.scrolled=function(i,s){"function"==typeof i&&(s=i,i=200);var o="scrollTimer"+e++;this.scroll(function(){var e=t(this),n=e.data(o);n&&clearTimeout(n),n=setTimeout(function(){e.removeData(o),s.call(e[0])},i),e.data(o,n)})},t.fn.AniView=function(e){var i=t.extend({animateThreshold:0,scrollPollInterval:20},e),s=this;function o(e){t(e).each(function(e,s){var o,n,a,r=t(s).parent(".av-container");t(s).is("[data-av-animation]")&&!t(r).hasClass("av-visible")&&(a=(n=t(o=r).offset()).top+t(o).scrollTop(),n.top,t(o).scrollTop(),t(o).height(),a<t(window).scrollTop()+t(window).height()-i.animateThreshold)&&(t(s).css("opacity",1),t(r).addClass("av-visible"),t(s).addClass("animated "+t(s).attr("data-av-animation")))})}t(s).each(function(e,i){t(i).wrap('<div class="av-container"></div>'),t(i).css("opacity",0)}),o(s),t(window).scrolled(i.scrollPollInterval,function(){o(s)})}}(jQuery),function(){function t(t){var e=null,i=null,s=$(t),o=$(".dropdown-menu",t),n=s.parents("ul.nav");return n.size()>0&&(e=n.data("dropdown-in")||null,i=n.data("dropdown-out")||null),{target:t,dropdown:s,dropdownMenu:o,effectIn:o.data("dropdown-in")||e,effectOut:o.data("dropdown-out")||i}}function e(t,e){e&&(t.dropdown.addClass("dropdown-animating"),t.dropdownMenu.addClass("animated"),t.dropdownMenu.addClass(e))}function i(t,e){t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.dropdown.removeClass("dropdown-animating"),t.dropdownMenu.removeClass("animated"),t.dropdownMenu.removeClass(t.effectIn),t.dropdownMenu.removeClass(t.effectOut),"function"==typeof e&&e()})}$(".dropdown, .dropup").on({"show.bs.dropdown":function(){var i=t(this);e(i,i.effectIn)},"shown.bs.dropdown":function(){var e=t(this);e.effectIn&&e.effectOut&&i(e,function(){})},"hide.bs.dropdown":function(s){var o=t(this);o.effectOut&&(s.preventDefault(),e(o,o.effectOut),i(o,function(){o.dropdown.removeClass("open")}))}})}();
;
var pJS=function(e,t){var a=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:a,w:a.offsetWidth,h:a.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;t&&Object.deepExtend(i,t),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,t,a){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=a?a.x:Math.random()*i.canvas.w,this.y=a?a.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,a),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){var e=this;if(void 0!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(void 0!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(i.canvas.ctx.fillStyle=s,i.canvas.ctx.beginPath(),e.shape){case"circle":i.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,e.x-t/(i.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,e.x-2*t/(i.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":;if("svg"==i.tmp.img_type)var n=e.img.obj;else n=i.tmp.img_obj;n&&i.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var t=i.particles.array[e];if(i.particles.move.enable){var a=i.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(i.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=i.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=i.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),i.particles.size.anim.enable&&(1==t.size_status?(t.radius>=i.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=i.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:t.radius,x_right:i.canvas.w,y_top:t.radius,y_bottom:i.canvas.h};else s={x_left:-t.radius,x_right:i.canvas.w+t.radius,y_top:-t.radius,y_bottom:i.canvas.h+t.radius};switch(t.x-t.radius>i.canvas.w?(t.x=s.x_left,t.y=Math.random()*i.canvas.h):t.x+t.radius<0&&(t.x=s.x_right,t.y=Math.random()*i.canvas.h),t.y-t.radius>i.canvas.h?(t.y=s.y_top,t.x=Math.random()*i.canvas.w):t.y+t.radius<0&&(t.y=s.y_bottom,t.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":t.x+t.radius>i.canvas.w?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>i.canvas.h?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(t),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(t),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(t),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(t,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(t,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(t,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){i.particles.array[e].draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,s=e.y-t.y,n=Math.sqrt(a*a+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(t.x,t.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,s=e.y-t.y;if(Math.sqrt(a*a+s*s)<=i.particles.line_linked.distance){var n=a/(1e3*i.particles.move.attract.rotateX),r=s/(1e3*i.particles.move.attract.rotateY);e.vx-=n,e.vy-=r,t.vx+=n,t.vy+=r}},i.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},i.fn.modes.pushParticles=function(e,t){i.tmp.pushing=!0;for(var a=0;a<e;a++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:t?t.pos_x:Math.random()*i.canvas.w,y:t?t.pos_y:Math.random()*i.canvas.h})),a==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var t=e.x-i.interactivity.mouse.pos_x,a=e.y-i.interactivity.mouse.pos_y,s=1-(l=Math.sqrt(t*t+a*a))/i.interactivity.modes.bubble.distance;function n(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}if(l<=i.interactivity.modes.bubble.distance){if(s>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){(c=e.radius+i.interactivity.modes.bubble.size*s)>=0&&(e.radius_bubble=c)}else{var r=e.radius-i.interactivity.modes.bubble.size,c=e.radius-r*s;e.radius_bubble=c>0?c:0}var o;if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value)(o=i.interactivity.modes.bubble.opacity*s)>e.opacity&&o<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=o);else(o=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*s)<e.opacity&&o>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=o)}}else n();"mouseleave"==i.interactivity.status&&n()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){t=e.x-i.interactivity.mouse.click_pos_x,a=e.y-i.interactivity.mouse.click_pos_y;var l=Math.sqrt(t*t+a*a),v=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;v>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),v>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}function p(t,a,s,n,r){if(t!=a)if(i.tmp.bubble_duration_end)void 0!=s&&(o=t+(t-(n-v*(n-t)/i.interactivity.modes.bubble.duration)),"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o));else if(l<=i.interactivity.modes.bubble.distance){if(void 0!=s)var c=s;else c=n;if(c!=t){var o=n-v*(n-t)/i.interactivity.modes.bubble.duration;"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o)}}else"size"==r&&(e.radius_bubble=void 0),"opacity"==r&&(e.opacity_bubble=void 0)}i.tmp.bubble_clicking&&(p(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),p(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,a=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(t*t+a*a),n=t/s,r=a/s,c=clamp(1/(l=i.interactivity.modes.repulse.distance)*(-1*Math.pow(s/l,2)+1)*l*100,0,50),o={x:e.x+n*c,y:e.y+r*c};"bounce"==i.particles.move.out_mode?(o.x-e.radius>0&&o.x+e.radius<i.canvas.w&&(e.x=o.x),o.y-e.radius>0&&o.y+e.radius<i.canvas.h&&(e.y=o.y)):(e.x=o.x,e.y=o.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var l=Math.pow(i.interactivity.modes.repulse.distance/6,3),v=i.interactivity.mouse.click_pos_x-e.x,p=i.interactivity.mouse.click_pos_y-e.y,d=v*v+p*p,m=-l/d*1;d<=l&&function(){var t=Math.atan2(p,v);if(e.vx=m*Math.cos(t),e.vy=m*Math.sin(t),"bounce"==i.particles.move.out_mode){var a=e.x+e.vx,s=e.y+e.vy;a+e.radius>i.canvas.w?e.vx=-e.vx:a-e.radius<0&&(e.vx=-e.vx),s+e.radius>i.canvas.h?e.vy=-e.vy:s-e.radius<0&&(e.vy=-e.vy)}}()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,a=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(t*t+a*a);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=t,i.interactivity.mouse.pos_y=a,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var t=e*i.particles.number.value/i.particles.number.density.value_area,a=i.particles.array.length-t;a<0?i.fn.modes.pushParticles(Math.abs(a)):i.fn.modes.removeParticles(a)}},i.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<i.particles.array.length;a++){var s=i.particles.array[a],n=e.x-s.x,r=e.y-s.y;Math.sqrt(n*n+r*r)<=e.radius+s.radius&&(e.x=t?t.x:Math.random()*i.canvas.w,e.y=t?t.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var t=i.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(t,a,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),a=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),s=window.URL||window.webkitURL||window,n=s.createObjectURL(a),r=new Image;r.addEventListener("load",function(){e.img.obj=r,e.img.loaded=!0,s.revokeObjectURL(n),i.tmp.count_svg++}),r.src=n},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),a.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,t,a,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var v=0;v<r;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",i.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",function(){i.tmp.img_obj=a,i.fn.vendors.checkBeforeDraw()}),a.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,a,i){return t+t+a+a+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,t,a){return Math.min(Math.max(e,t),a)}function isInArray(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var a=document.getElementById(e),i="particles-js-canvas-el",s=a.getElementsByClassName(i);if(s.length)for(;s.length>0;)a.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%",null!=document.getElementById(e).appendChild(n)&&pJSDom.push(new pJS(e,t))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var s=JSON.parse(t.currentTarget.response);window.particlesJS(e,s),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};
;
if (document.querySelector('#particles-js')) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 750
        }
      },
      "color": {
        "value": "#fff"
      },
  
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "move": {
        "speed": 5            
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 80,
        "color": "#ffffff",
        "opacity": 0.2,
        "width": 0.5
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}
;
const page = document;
const parentURL = "https://www.computechlimited.com";

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

(function switchToNonWebp () {
  let images = elems('img');
  Array.from(images).forEach(function(image, index) {
    image.loading = "lazy";
    // let src = image.src;
    // let webp = '.webp';
    // let jpg = '.jpg';
    // let new_src = src.replace(webp, jpg);
    // image.src = new_src;
  });
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