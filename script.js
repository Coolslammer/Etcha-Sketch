$(document).ready(function(){
	var numOfSqaures = 16;
	var count = 0;
	
	$("body").append("<button type='button' id='button'>Reset</button>");
	$("body").append("<div id='container'></div>");

	function display() {
		while (count < numOfSqaures) {
			count += 1;
			$("#container").append("<div class='screen' id='row" + count +"'></div>");
			var count1 = 0;
			while (count1 < numOfSqaures) {
				$("#row"+count).append("<div class='screen'></div>");
				count1 += 1;
			}
		}
	}
	display();

	function shader() {
		$(".screen").hover(function(){
			$(this).css("background-color", "red");
		})
	}
	shader();
	
	$(document).on("click", "button", function screenReset() {
		numOfSqaures = prompt("Size of new Screen");
		$("#container").empty();
		$(".screen").css("background-color", "grey");
		display();
		count = 0;
		var dimension = 500/numOfSqaures;
		$(".screen").css("height", dimension);
		$(".screen").css("width", dimension);
		shader();
	})
})