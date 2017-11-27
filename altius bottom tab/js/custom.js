('#nav-tabs a').click(function (e) {
	 e.preventDefault();
	 $(this).tab('show');
});

	$(function (tab) {
	$('#nav-tabs a:last').tab('show');
	});