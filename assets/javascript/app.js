$(document).ready(function() {
    // console.log( "ready!" );

   var questionCounter=0;
   var time= 10;
   var correctGuesses= 0;
   var incorrectGuesses = 0;

// Q&A array
   var questions=[
    
      {
        question:"What is the Capital of California State",
	    choices:["Los Angeles","Sacramento","Santa Monica","Irvine"],
	    correctAnswer:"Sacramento",
       
	  }, 
	  {
        question:"What is the Capital of Texas State",
	    choices:["Dallas","Houston","Austin","San Antonio"],
	    correctAnswer:"Austin",
       
	    
	  }, 
	  {
	    question:"What is the Capital of New York State",
	    choices:["NYC","Manhattan","Queens","Jamaica"],
	    correctAnswer:"NYC",
        
      }, 
      
	  {
	    question:"What is the Capital of Colorado State",
	    choices:["Denver","Golden","Littleton","Aurora"],
	    correctAnswer:"Denver",
        
      }, 
      
	  {
	    question:"What is the Capital of Oregon State",
	    choices:["Salem","Portland","Eugune","Bend"],
	    correctAnswer:"Salem",
       
	  },
	  {
	    question:"What is the Capital of Utah State",
	    choices:["Provo","Park City","Salt Lake City","Denver"],
	    correctAnswer:"Salt Lake City",
        
      },

      {
	    question:"What is the Capital of Florida State",
	    choices:["Tallahassee","Miami","Tampa","Orlando"],
	    correctAnswer:"Tallahassee",
        
	  },

	  
	  {
      question:"What is the Capital of North Carolina State",
      choices:["Durham","Raleigh","Cary","Greensboro"],
      correctAnswer:"Raleigh",
      
      },

    
	  {
	    question:"What is the Capital of Virginia State",
	    choices:["Richmond","Norfok","DC","Virginia Beach"],
	    correctAnswer:"Richmond",
        
	  }];
      
      function questionContent(){
          $("gameScreen").append("<p><strong>") +
          questions[questionCounter].question +
          "</p><p> class='choices'>"+
          questions[questionCounter].choices[0] +
          "</p><p class='choices'>" +
          questions[questionCounter].choices[1] +
          "</p><p class='choices'>" +
          questions[questionCounter].choices[2] +
          "</p><p class='choices'>" +
          questions[questionCounter].choices[3] +
          "</stong></p>"
      };
	
        function userWin(){
    {
        $("#gameScreen").html("<p>You got it right!</p>");
        correctGuesses++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $("#gameScreen").append("<p>The Answer was <span class='answer'>" +
        "</span></p>" +
        questions[questionCounter].image);
        setTimeout(nextQuestion,4000);  
        questionCounter ++;   
        
    }

        $("#gameScreen"),append("<p>The answer was <span class='answer'>" +
          correctAnswer +
          "</span></p>" +
          questions[questionCounter].image);
          setTimeout(nextQuestion,4000);  
        questionCounter ++;   

    }

	
		

    // user guessed incorrectly

    function userLoss(){
        $("gameScreen").html("<p> Nope, that is not it!</p>");
        incorrectGuesses++;
		var correctAnswer =questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>"+
        correctAnswer +
        "/span></p>" +
        questions[questionCounter].image);
        setTimeout(nextQuestion,4000);
        questionCounter++;
	}

    // user ran out of time
    
    function userTimeout() {
        if(time=== 0){
            $("#gameScreen").html("<p>You ran out of time!</p>");
            incorrectGuesses++;
            var correctAnswer=questions[questionCounter].correctAnswer;
            $("#gameScreen").append("<p>The answer was <span class='answer'>" +
            correctAnswer = questions[questionCounter].correctAnswer;

            $("#gameScreen").append ("<p>The answer was <span class='answer'>"+
            correctAnswer +
            "</span></p>" +
            questions[questionCounter].image);
            setTimeout(nextQuestion, 4000);
            questionCounter++;
        }
    }
	// screen that shows final score:
            
    function resultsScreen() {
        if (correctGuesses=== questions.length){
            var endMessage= "Perfection!";
            var bottomText= "#nerdalert!";
        }
    }
        else if (correctGuesses > incorrectGuesses) 
        {
            var endMessage = "Good Work!";
            var bottomText = "Not so good work";
        else
         {
            var endMessage = "Wrong answer";
            var bottomText = "#scrub";
        }
 
        $("#gameScreen").html ("<p>" + endMessage + "</p>" + "<p> You got it <strong>"> +
		
        correctGuesses + "<strong> right.</p>"+
        "<p> You got it <stong>" + incorrectGuesses + "</strong> wrong.</p>");
        $("#gameScreen").append("<h1 id='start'>Start Over!</h1>");
        $("#bottomText").html(bottomText);
        gameReset();
        $("#start").click(nextQuestion);
    }

  // game clock set at 10 seconds 
			
    function timer(){
        clock = setInterval(countDown,1000);
        function countDown() {
            if( time < 1) {
                clearInterval(clock);
                userTimeout();
            
    }
            if (time > 0) {
                time --;
            }
  

 $("#timer").html("<stong>" + time + "</stong>");
        }
			
	}
// moves questions to show next question
    function nextQuestion() {
        if (questionCounter < questions.length)
        { time = 10;
        $("#gameScreen").html("<p> You have <span id ='timer'>" + time + 
        "</span> seconds left! </p>");
        questionContent();
        timer();
        userTimeout();
    
    }
    
    else {
        resultsScreen();
    }
	}

    // reset score and counter parameters on restart
    function gameReset () {
        questionCounter = 0;
        correctGuesses = 0;
        incorrectGuesses = 0;
    }
     
    function startGame() {
     $("#gameScreen").html("<p> You have <span id ='timer'>"+ time + "</span> seconds left! </p>");
     $("#start").hide();
    
    questionContent ();
    timer();
    userTimeout();

    }

    $("#start").click(nextQuestion);
    
    $("#gameScreen").on("click", ".choices", (function(){
        var userGuess = $(this).text();
        if (userGuess=== questions[questionContent].correctAnswer) {
            clearInterval(clock);
            userWin();

            else {
                clearInterval(clock);
                userLoss();
		}
	}));
});