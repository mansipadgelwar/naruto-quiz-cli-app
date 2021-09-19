const chalk = require('chalk');
var readlineSync = require('readline-sync');

var topScore = [
    {
      name : "Mugdha",
      score : 10
    },
    {
      name : "Pradnya",
      score : 8
    },
    {
      name : "Mahesh",
      score : 7
    }
  ];

	var questionOne = {
    question: " Let's start off easy, who all are part of Tapu Sena? \n a. Ross and Will Colbert \n b. Tapu akela hi puri sena hai \n c. Tapu, Gogo, and Pinki \n d. Tapu, Sonu, Goli, Gogi, and Pinku. \n \n",
    correctOption: "d",
    answer: "Tapu, Sonu, Goli, Gogi, and Pinku are part of Tapu Sena."
  }
  var questionTwo={
    question: "What is Jethalal's father, Bapu ji's, full name? \n a. Champak Sharma Gada  \n b. Natwarlal Prabhashankar Udhaiwala  \n c. Champaklal Jayantilal Gada\n d. Jayantilal Giridharlal Gada \n \n",
    correctOption: "c",
    answer: "Champaklal Jayantilal Gada is Jethalal's father, Bapu ji's, full name."
  }
  var questionThree = {
    question : " Most evenings, the group gets together at a shop to discuss everything under the sun. What is the name of the shop? \n a. Abdul Miyan's Store \n b. Aao-Khao store.  \n c. All-In-One General Store \n d. General Store \n",
    correctOption: "c",
    answer:"Name of the shop is All-In-One General Store."
  }
  var questionFour = 
	{
	   question: "Complete this line from the title song of the show:\n Problem toh hai sabke saath \n Bas ___ ki hai baat \n Taarak Mehta ka ooltah chashmah \n a. suljhane \n b. nazariye \n c. bhulane \n d. dekhne  \n ",
	   correctOption: "b",
     answer:"Problem toh hai sabke saath Bas nazariye ki hai baat."
	}
	var questionFive =
	{
	    question: "Other than being the society's secretary and a teacher, what is Bhide's side job? \n a. He is an electrician  \n b. He delivers the pickles and papad that his wife makes.  \n c. He is a carpenter  \n d. How does he even have the time to do a third job? \n ",
		  correctOption : "b",
      answer: "Other than being the society's secretary and a teacher, he delivers the pickles and papad that his wife makes. "
	}   
  var questionSix =
	{
	    question: "On which street is the Gokuldham society located? \n a. Powder gali, Goregaon East.  \n b. Lower Parel  \n c. TM Street, Andheri West  \n d. Yeh toh na ho paega. \n ",
		  correctOption : "a",
      answer: "Gokuldham society is located on Powder gali, Goregaon East street."
	}   
  var questionSeven =
	{
	    question: "What is the name of the bhojnalaya where Bagha and Natu Kaka have food? \n a. Gujarati Bhojnalya  \n b. Padmini Bhojnalaya  \n c. Savarna Bhojnalaya \n d. Padmavati Bhojnalaya  \n ",
		  correctOption : "d",
      answer: "Bagha and Natu Kaka have their food in Padmavati Bhojnalaya."
	}   
  var questionEight =
	{
	    question: "What is Krishnan Iyer's profession? \n a. Reporter  \n b. Scientist  \n c. Teacher  \n d. Electrician  \n ",
		  correctOption : "b",
      answer: "Krishnan Iyer is a Scientist."
	}   
  var questionNine =
	{
	    question: "Who among the following is not a member of Gokuldham society? \n a. Aatmaram Tukaram Bhide \n b. Roshan Singh Sodhi \n c. Tulsidas Parekh  \n d. Hansraj Hathi  \n ",
		  correctOption : "c",
      answer: "Tulsidas Parekh is not a member of Gokuldham society. "
	}  
  var questionTen =
	{
	    question: "Which of the following shows had a crossover with Taarak Mehta Ka Ooltah Chashmah? \n a. Kasuatti Zindagi Kay \n b. Bhabhiji Ghar Par Hain  \n c. C.I.D \n d. Sumit Sambhal Lega  \n ",
		  correctOption : "c",
      answer: "C.I.D had a crossover with Taarak Mehta Ka Ooltah Chashmah."
	}   

var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
	

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log(chalk.red.bgWhite.bold( "Welcome "+userName+" to THE TAARAK MEHTA KA OOLTAH CHASHMAH Quiz \n"));

console.log(chalk.red.bgWhite.bold("---------------QUIZ BEGINS---------------\n"));

function play(question,correctOption,answer){
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
 

function topScorer()
{
    for(var i=0;i<topScore.length;i++)
    {
      var currentScore = topScore[i];
      if(score > currentScore.score)
      {
        console.log(chalk.white.bgRed.bold("Hurray! you have beat one of the top scorers. Send me screenshot of your score and I will update the top scorer list."));
        break;
      }
    }
}

topScorer();

function showTopScores(topScore)
{
     for(let i=0;i<topScore.length;i++)
     {
       console.log(topScore[i].name + ":" + topScore[i].score);
     }
}

console.log("\nHere's the list of top scorers.\n");
showTopScores(topScore);
