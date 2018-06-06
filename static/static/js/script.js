$(document).ready(function(){

	$(".toggle-summary-btn").click(function(){
		var $that = $(this);
		$(this).parent().siblings(".toggle-summary").slideToggle(function(){
			if(!$that.parent().siblings(".toggle-summary").is(":hidden")){
				$that.removeClass("fa-plus").addClass("fa-minus");
			}
			else{
				$that.removeClass("fa-minus").addClass("fa-plus");	
			}
		});
	});

	$("#show-bibtex-btn").click(function(){
		$("#bibtex-dialog").dialog();
	});

	if(!parseInt($("#bibtex-available").val())){
		var author = $("#author-field").val();
		var title = $("#title-field").val();
		var year = $("#year-field").val();
		var booktitle = $("#booktitle-field").val();

		var bibtex_string = 
						"@inproceedings{{0},<br>\
						title={{1}},<br>\
						author={{2}},<br>\
						booktitle={{3}},<br>\
						year={{4}} }".format(generateBibtexKey(title, author, year),title, author, booktitle, year);

		$("#bibtex-dialog").html(bibtex_string);
	}

});

function generateBibtexKey(title, author, year){
	return (author.split(",")[0] + year + title.split(":")[0]).toLowerCase();
}

String.prototype.format = function() {
	a = this;
	for (k in arguments) {
		a = a.replace("{" + k + "}", arguments[k]);
	}
	return a;
}