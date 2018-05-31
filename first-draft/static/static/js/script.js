$(document).ready(function(){

	$("#show-bibtex-btn").click(function(){
		$("#bibtex-dialog").dialog();
	});

	if(!parseInt($("#bibtex-available").val())){
		alert("No bibtex available!");
	}

});