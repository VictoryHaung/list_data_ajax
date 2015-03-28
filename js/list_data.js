$(document).ready(function(){
	$( "#page" ).on( "click","#page_list #page_button",  function() {
		if($(this).attr('data-page')){
			alert($(this).attr('data-page'));
		}
	});

	$('#button_page').on('click',function() {
		var input_page  = $('#input_page').val();
		if(isNaN(input_page)){
			alert('error');
			return;
		}
		$.ajax({
			url:'php/demo.php',
			type: 'POST',
			data: 'page='+input_page,
			dataType: 'json',
			success: function(data) {
				$("#page_list").html(html_page_view(data.page));
			},error: function (data){
				alert('error');
			}
		});
	});
});
function html_page_view(data){
	var html_view = '';
	for (var i = 1; i <= data; i++) {
		html_view += '<input data-page="'+i+'" type="button" id="page_button" value="'+i+'">';
	}
    return html_view;
}
