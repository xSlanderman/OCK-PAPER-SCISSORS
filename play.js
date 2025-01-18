const computer = ['rock','paper','scissors'];

const playerscoreDisplay = document.getElementById("playerscore");
const computerscoreDisplay = document.getElementById("computerscore");
const information = document.getElementById("information");
let compscore = 0;
let playerscore = 0;


function play(playerchose){
    
    const computerChoice = Math.floor(Math.random() * computer.length);
    let rezult = "";

    //playerscore ++;
    //playerscoreDisplay.textContent = playerscore;// adugare in playerscore

    //console.log(playerchose,computer[computerChoice]);

    if(playerchose === computer[computerChoice]){
        rezult = "It's a tie";
    }else{
        
        switch (playerchose) {
            case 'rock':
                rezult = (computer[computerChoice] === 'scissors') ? "Player win" : "Player lose";
                break;
            case 'paper':
                rezult = (computer[computerChoice] === 'rock') ? "Player win" : "Player lose";
                break;
            case 'scissors':
                rezult = (computer[computerChoice] === 'paper') ? "Player win" : "Player lose";
                break;
        
        }
    }

    switch (rezult) {
        case 'Player win':
            playerscore ++;
            playerscoreDisplay.textContent = playerscore;
            information.textContent = rezult;
            break;
    
        case 'Player lose':
            compscore ++;
            computerscoreDisplay.textContent = compscore;
            information.textContent = rezult;
            break;

        case "It's a tie":    

            information.textContent = rezult;
            break;
    }

}