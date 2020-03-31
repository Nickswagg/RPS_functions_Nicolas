var hands = ["rock", "paper", "scissors"];

function getHand(){

	var random = parseInt(Math.random()*10)%3; 

	if (random < 0.34){

		return hands[0];   
	}
	else if (random < 0.67){

		return hands[1];
	}
	else {
		return hands [2];
	}
}
var player_one = {

    name : "playerone",
    hand : getHand(),
}
var player_two = {
	
    name : "playertwo",
    hand : getHand(),
}

function playRound(player_one, player_two){

    var handPlayerOne = player_one.getHand();
    var handPlayerTwo = player_two.getHand();
}

var player_one_choice = getChoice();
var player_two_choice = getChoice();

console.log(player_one + ' you have ' + playerOneWin)
console.log(player_two + ' you have ' + playerTwoWin)

function compare() {
            if(player_one_choice == player_two_choice){
                return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is a tie!";
            }
​
            if(player_one_choice == 'rock'){
                if(player_two_choice == 'scissors'){
                    PlayerOneWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you lose!";
                }else {
                    playerTwoWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you win!";
                }
            }
            
            if(player_one_choice == 'paper'){
                if(player_two_choice == 'rock'){
                    PlayerOneWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you lose!";
                }else {
                    playerTwoWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you win!";
                }
            }
​
            if(player_one_choice == 'scissors'){
                if(player_two_choice == 'paper'){
                    PlayerOneWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you lose!";
                }else {
                    PlayerTwoWin++;
                    return "Computer: " + player_one_choice + "\nYou: " + player_two_choice + "\nThe result is you win!";
                }
            }
            
        }
​
        console.log(compare());
    }
​
    console.log('Great job! the ' + player_one +  ' had ' + PlayerOneWin + '. The ' + player_two + ' had ' + PlayerTwoWin);
}
​
playGame('Nicolas', 'Stanislas', 5);
