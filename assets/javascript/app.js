window.onload=function(){
alert("I work2");
	$('.jumbotron').click(stopwatch.start);
}

alert("I work");
var finalscore = 0;
var running = false;
var counting = 5;

// question builder
// doesn't work, unexpected identifier?

function qbuilder() {

	var newquestion = $('<br><h4>New Question</h4><br>').text("OtherQuestion");
	$(".panel-body").append(newquestion);

	
	
	for (y=0;y<4;y++){
		counting = counting + 1;
		var newanswer = $('<input type="radio" id ="rightanswer[counting]" name="Question1" value="1"/>');
		$(".panel-body").append(newanswer);

	}
	

}

var stopwatch = {

	thetime: 3,



//dummy function
	updatetime: function(){
		stopwatch.thetime--;

		$(".timer").html('Time:'+stopwatch.thetime)

		if (stopwatch.thetime == 0)
		{

			clearInterval(counter);
			alert("Game Over!");
			$(".panel").hide();
			stopwatch.score();
		}
	},
//ticker function

	start: function(){

		if (running == false){

			running = true;
			counter = setInterval(stopwatch.updatetime, 1000)
			qbuilder();
		}



	},

	score: function(){

		var temp = 0;

		if (document.getElementById('rightanswer1').checked){

			temp = document.getElementById('rightanswer1').value;
		}
		
		finalscore = finalscore + temp;

		$(".timer").html('Final Score: ' + finalscore)

		// $("#goaway").append("<div class='panel panel-default' id='finish'></div>");
		// $("#finish").append("<p id='writehere'></p>");
		// $("#writehere").innerHTML(finalscore);

	}

}



