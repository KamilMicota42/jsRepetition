var sumPlayerInt = 0
var sumDealerInt = 0
var dealerHandString = "The Dealer Hand: "
var playerHandString = "Your Hand: "
var playerSumString = "Sum: 0"
var valuesList = [2,3,4,5,6,7,8,9,10,10,10,10,11]
var cardNameList = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

/*The aim of the game is to accumulate a higher point total than the dealer, 
but without going over 21. You compute your score by adding the values of 
your individual cards.

The cards 2 through 10 have their face value, J, Q, and K are worth 10 points each, 
and the Ace is worth either 1 or 11 points (player's choice).

Dealer rule: hit on anything less than 16, stand on anything more than
*/

function startGame() {
    /* remove element onclick */
    document.getElementById("startButton").parentElement.remove()
    
    

    /* create new element onclick */
    const gameDiv = document.createElement('div')
    const dealerHand = document.createElement('h1')
    const drawButton = document.createElement('button')
    const passButton = document.createElement('button')
    const playerHand = document.createElement('h1')
    const playerSum = document.createElement('h1')
    
    dealerHand.id = 'dealerHandId'
    drawButton.id = 'drawButtonId'
    passButton.id = 'passButtonId'
    playerHand.id = 'playerHandId'
    playerSum.id = 'playerSumId'

    dealerHand.textContent = dealerHandString
    drawButton.textContent = "Stand."
    passButton.textContent = "Hit."
    playerHand.textContent = playerHandString
    playerSum.textContent = playerSumString

    drawButton.setAttribute('onclick', 'hit()')
    passButton.setAttribute('onclick', 'stand()')

    gameDiv.appendChild(dealerHand)
    gameDiv.appendChild(drawButton)
    gameDiv.appendChild(passButton)
    gameDiv.appendChild(playerHand)
    gameDiv.appendChild(playerSum)
    document.body.appendChild(gameDiv)

    resetGame()
}

function resetGame() {
    sumPlayerInt = 0
    sumDealerInt = 0
    dealerHandString = "The Dealer Hand: "
    playerHandString = "Your Hand: "
    playerSumString = "Sum: " + sumPlayerInt
    document.getElementById("playerHandId").innerHTML = playerHandString
    document.getElementById("dealerHandId").innerHTML = dealerHandString
    document.getElementById("playerSumId").innerHTML = playerSumString
    hit()
    hit()
    dealerTurn()
}

function hit(){
    let randomNumber = Math.floor(Math.random() * 13)
    sumPlayerInt += valuesList[randomNumber]
    playerSumString =  "Sum: " + String(sumPlayerInt)
    playerHandString += String(cardNameList[randomNumber]) + ' '
    alert('Player \nName of Card: ' + cardNameList[randomNumber])
    document.getElementById("playerHandId").innerHTML = playerHandString
    document.getElementById("playerSumId").innerHTML = playerSumString
    

    if(sumPlayerInt == 21){
        alert("YOU WIN")
        resetGame()
    }if(sumPlayerInt > 21){
        alert("YOU LOST")
        resetGame()
    }
}

function dealerTurn(){
    let randomNumber = Math.floor(Math.random() * 13)
    sumDealerInt += valuesList[randomNumber]
    dealerHandString += String(cardNameList[randomNumber]) + ' '
    alert('Dealer \nName of Card: ' + cardNameList[randomNumber])
    document.getElementById("dealerHandId").innerHTML = dealerHandString
    
    if(sumDealerInt == 21){
        alert("DEALER BLACKJACK\nYOU LOST")
        resetGame()
    }
}

function stand(){
    
    while (sumDealerInt < 16 || sumDealerInt<sumPlayerInt) {
        dealerTurn()
    }
    if(sumPlayerInt <= 21 && 21 - sumPlayerInt < 21 - sumDealerInt){
        alert("YOU WIN")
    }else if(sumDealerInt > 21 && sumPlayerInt <= 21){
        alert("YOU WIN")
    }else{
        alert("YOU LOST")
    }

    resetGame()
}
