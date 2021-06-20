const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;
    var userName = readlineSync.question("What is your name? ");
	console.log(chalk.red.bgWhite.bold( "Welcome "+userName+" to THE ULTIMATE NARUTO QUIZ \n"));
  console.log(chalk.red.bgWhite.bold("---------------QUIZ BEGINS---------------\n"));

	function play(question,answer)
	{
		var userAnswer = readlineSync.question(question);
		if(userAnswer.toUpperCase() === answer.toUpperCase())
		{
			console.log("You are right!");
			score = score + 1;
		}
		else
    
		{
		  console.log("You are wrong!");
		  score = score -1;
		}
		console.log("Current score: "+ score)
       
		console.log("--------------------------------\n")
	}
	var questionOne = {
    question: "What is Naruto's last name?  ",
    answer: "Uzumaki"
  }
  var questionTwo={
    question: "Sasuke belongs to which clan? ",
    answer: "Uchiha"
  }
  var questionThree = {
    question : "Naruto first shows his nine-tails chakra when he fights who? ",
    answer: "Haku"
  }
  	var questionFour = 
	{
	   question: "Who tricked Naruto into stealing a sacred scroll? ",
	   answer: "Mizuki"
	}
	var questionFive =
	{
	    question: "Which Hokage sealed the nine-tailed fox inside Naruto? ",
		answer : "Fourth Hokage"
	}   
	
	var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive];
	for(var i=0; i<questions.length; i++)
	{
	  var currentQuestion = questions[i];
	  play(currentQuestion.question, currentQuestion.answer)
    if(score === 2){
      console.log('You successfully completed level 1 & level 2 begins\n\n');
    }
    if(score === 4 ){
      console.log('You successfully completed level 2 & level 3 begins\n\n');
    
    }
	}
     