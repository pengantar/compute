////Tabs in the Tanzania page
///* Tabs */
$('.tab-content').not('.active').hide();

$('.tab-nav a').click(function(e) {
  e.preventDefault();
  $('.tab-nav a').removeClass('active');
  $(this).addClass('active');

  $('.tab-content').hide();
  $($.attr(this, 'href')).fadeIn(300);
});