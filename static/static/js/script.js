$(document).ready(function(){

	togglePublicationContent();

	generateBibTexForPublication();

	if(document.URL.includes("generate_bibtex_file")){
		generateBibTexFile();
	}

});

function generateBibTexFile(){
	var all_bibtex_strings = "";

	$("#all-bibtex-information .bibtex-link").each(function(index){
		if(!parseInt($(this).data("bibtex-available"))){
			var author = $(this).data("author-field");
			var title = $(this).data("title-field");
			var year = $(this).data("year-field");
			var booktitle = $(this).data("booktitle-field");

			var bibtex_string = 
			"@inproceedings{{0},\ntitle={{1}},\nauthor={{2}},\nbooktitle={{3}},\nyear={{4}} }".format(generateBibTexKey(title, author, year),title, author, booktitle, year);

			all_bibtex_strings += bibtex_string + "\n\n";
		}
		else{
			all_bibtex_strings += $(this).data("bibtex-customized") + "\n\n";
		}
	});

	all_bibtex_strings = handleBibTexUmlauts(all_bibtex_strings);
	$("#display-all-bibtex-information").val(all_bibtex_strings.trim());

}

function generateBibTexKey(title, author, year){
	return camelize(author.split(",")[0].replace(".", "") + year + title.split(":")[0]);
}

function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index == 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

function handleBibTexUmlauts(bibtex_string){
	return bibtex_string.replace('ä', '{\\"a}').replace('ü', '{\\"u}').replace('ö', '{\\"o}');
}

function generateBibTexForPublication(){
	$(".bibtex-link").click(function(e){
		e.preventDefault();
		e.stopPropagation();

		$("#bibtex-dialog").dialog();
		var bibtex_string = "";
		if(!parseInt($(this).data("bibtex-available"))){
			var author = $(this).data("author-field");
			var title = $(this).data("title-field");
			var year = $(this).data("year-field");
			var booktitle = $(this).data("booktitle-field");

			bibtex_string = 
							"@inproceedings{{0},<br>\
							title={{1}},<br>\
							author={{2}},<br>\
							booktitle={{3}},<br>\
							year={{4}} }".format(generateBibTexKey(title, author, year),title, author, booktitle, year);

			bibtex_string = handleBibTexUmlauts(bibtex_string);
		}
		else{
			bibtex_string = $(this).data("bibtex-customized");
		}

		$("#bibtex-dialog").html(bibtex_string);

		return false;
	});
}

String.prototype.format = function() {
	a = this;
	for (k in arguments) {
		a = a.replace("{" + k + "}", arguments[k]);
	}
	return a;
}