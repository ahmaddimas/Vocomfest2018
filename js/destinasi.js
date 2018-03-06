$('.nav-toggle-filter').click(function(event) {
  var target = $(this).attr('data-target');
  $(''+target).slideToggle();
  if ( $(this).attr("data-toggle") == 'collapse' ) {
    $(this).attr('data-toggle', 'collapsed');
    $(this).find('.icon-bar').addClass('clicked');
  } else {
    $(this).attr('data-toggle', 'collapse');
    $(this).find('.icon-bar').removeClass('clicked');
  }
  // changeHeader();
});