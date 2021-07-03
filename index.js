const chalk = require('chalk');
var readlineSync = require('readline-sync');

 var topScore = [
    {
      name : "Mugdha",
      score : 5
    },
    {
      name : "Pradnya",
      score : 4
    },
    {
      name : "Mahesh",
      score : 4
    }
  ];

    var score = 0;

    var userName = readlineSync.question("What is your name? ");

	console.log(chalk.red.bgWhite.bold( "Welcome "+userName+" to THE ULTIMATE NARUTO QUIZ \n"));
  console.log(chalk.red.bgWhite.bold("---------------QUIZ BEGINS---------------\n"));

	function play(question,correctOption,answer)
	{
    console.log(chalk.white.bgMagenta.bold("\n-------------- Q U E S T I O N --------------\n"));
		var userAnswer = readlineSync.question(question);
    
		if(userAnswer.toUpperCase() === correctOption.toUpperCase())
		{
			console.log("You are right!");
			score = score + 1;
		}
		else
    
		{
		  console.log(chalk.red.bold("You are wrong!\n"));
		  score = score - 1;
      console.log(chalk.red.bgWhite.bold(answer + "\n"));
		}
		console.log(chalk.yellow("Current score: "+ score));
       
		
	}
  
	var questionOne = {
    question: "What is Naruto's last name? \n a. Uchiha \n b. Uzumaki \n c. Hyuga \n d. Haruno \n \n",
    correctOption: "b",
    answer: "Naruto's last name is Uzumaki."
  }
  var questionTwo={
    question: "The Sharingan is what type of jutsu? \n a. Ninjutsu \n b. Dojutsu \n c. Genjutsu \n d. Taijutsu \n \n",
    correctOption: "b",
    answer: "Doujutsu is a type of technique that exists in the eyes. Another type of doujutsu is the byakugan."
  }
  var questionThree = {
    question : "Naruto first shows his nine-tails chakra when he fights who? \n a. Sasuke Uchiha \n b. Neji Hyuuga \n c. Gaara \n d. Haku \n",
    correctOption: "d",
    answer:"Naruto first shows his nine-tails chakra when he fights haku"
  }
  	var questionFour = 
	{
	   question: "Who tricked Naruto into stealing a sacred scroll? \n a. Zabuza \n b. Iruka \n c. Mizuki \n d. Sasuke \n ",
	   correctOption: "c",
     answer:"Mizuki tricked Naruto into stealing a sacred sroll"
	}
	var questionFive =
	{
	    question: "Which Hokage sealed the nine-tailed fox inside Naruto ?\n a. fourth Hokage \n b. third Hokage \n c. second Hokage \n d. first Hokage \n ",
		  correctOption : "a",
      answer: "Fourth Hokage sealed the nine-tailed fox inside Naruto"
	}   
	
	var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive];
	for(var i=0; i<questions.length; i++)
	{
	  var currentQuestion = questions[i];
	  play(currentQuestion.question, currentQuestion.correctOption,currentQuestion.answer);
    if(score === 2){
      console.log('You successfully completed level 1 & level 2 begins\n\n');
    }
    if(score === 4 ){
      console.log('You successfully completed level 2 & level 3 begins\n\n');
    
    }
	}
 

  function topScorer(){
    for(var i=0;i<topScore.length;i++){
      var currentScore = topScore[i];
      if(score > currentScore.score){
        console.log(chalk.white.bgRed.bold("Hurray! you have beat one of the top scorers. Send me screenshot of your score and I will update the top scorer list."));
        break;
      }
    }
  }

  topScorer();

  function showTopScores(topScore){
     for(let i=0;i<topScore.length;i++){
       console.log(topScore[i].name + ":" + topScore[i].score);
     }
  }

  console.log("\nHere's the list of top scorers.\n");
  showTopScores(topScore);
