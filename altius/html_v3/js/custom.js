$(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})

$('.nav-tabs').on('shown.bs.tab', 'a', function (e) {
    if (e.relatedTarget) {
        $(e.relatedTarget).removeClass('active');
    }
})

