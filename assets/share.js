(function() {
  // select a single element
  function elem(selector) {
    let elem = document.querySelector(selector);
    return elem != false ? elem : false;
  }
  
  // select multiple elements
  function elems(selector) {
    let elems = document.querySelectorAll(selector);
    return elems != false ? elems : false;
  }
  
  (function toggleShare() {
    let items = elems('.share_item');
    let trigger = elem('.share_toggle');
    let buttons = Array.from(items).filter(function(button) {
      return button != trigger;
    });
    trigger.addEventListener('click', function() {
      let t_class = this.classList;
      let toggled = 'share_toggled';
      t_class.contains(toggled) ? t_class.remove(toggled) : t_class.add(toggled);
      buttons.map(function(button, index){
        let b_class = button.classList;
        let active = 'share_wobble';
        b_class.contains(active) ? b_class.remove(active) : b_class.add(active);
      });
    });
  })();
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
        showModal('Review submitted', 'Thanks for your review! It will show on the site once it has been approved.');
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

(function toggleForm() {
  $('.form_toggle').on('click', function() {
    $('.form-comments').toggleClass('form-open');
    $(this).toggleClass('toggled');
    $(this).hasClass('toggled') ? $(this).text('Cancel') : $(this).text('Comment');
  });
})();