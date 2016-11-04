$(function() {

	// Open file dialog when upload button is clicked.
	$(".tg-file-choser").on("click", function() {
		$(".tg-file-choser-input").trigger("click");
	});

	// Get callback when file is selected.
	$(".tg-file-choser-input").change(function (){
		if (this.files[0]) {
			var fileReader = new FileReader();
			fileReader.onload = function (e) {
				readXmlFile(e.target.result);
			}
			fileReader.readAsText(this.files[0]);
		}
	});
});

function readXmlFile(xmlFile) {
	xmlDoc = $.parseXML(xmlFile);
  	$xmlEnglish = $(xmlDoc).find("string");
  	$xmlEnglish.each(function(index){
  		console.log($($.parseHTML($(this).text())).text());
  		console.log($.type($($.parseHTML($(this).text()))));
  		$(".mdl-navigation").append('<a class="mdl-navigation__link" href="">' + $($.parseHTML($(this).text())).text() + '</a>');
  	});
}