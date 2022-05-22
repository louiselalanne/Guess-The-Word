playerName = localStorage.getItem("playerName");
player2Name = localStorage.getItem("player2Name");

playerScore = 0;
player2Score = 0;

questionTurn = "player";
answerTurn = "player2";

document.getElementById("playerName").innerHTML = playerName + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = "Question Turn: " + playerName;
document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name;

function send()
{
    getWord = document.getElementById("word").value;
	word = getWord.toLowerCase();
	console.log(word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log (removeCharAt3);

    questionWord = "<h4 id='wordDisplay'> P. " + removeCharAt3 + "</h4>";
    inputBox = "<br>Resposta: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = questionWord + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();

    if(answer == word)
    {
        if(answerTurn == "player")
        {
            playerScore = playerScore + 1;
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else
        {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    if (questionTurn == "player")
    {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player2Name;
    }
    else
    {
        questionTurn = "player";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + playerName;
    }

    if(answerTurn == "player")
    {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name;
    }
    else
    {
        answerTurn = "player";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + playerName;
    }
    document.getElementById("output").innerHTML = "";
}