$(document).ready(function(){

	$("#show-bibtex-btn").click(function(){
		$("#bibtex-dialog").dialog();
	});

	if(!parseInt($("#bibtex-available").val())){
		var author = $("#author-field").val();
		var title = $("#title-field").val();
		var year = $("#year-field").val();

		var bibtex_string = 
						"@inproceedings{{0},<br>\
						title={{1}},<br>\
						author={{2}},<br>\
						booktitle={Need to fill in},<br>\
						year={{3}} }".format(generateBibtexKey(title, author, year),title, author, year);

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