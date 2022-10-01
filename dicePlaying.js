const diceId = [
    'dicePlaying1',
    'dicePlaying2',
    'dicePlaying3',
    'dicePlaying4',
    'dicePlaying5',
    'dicePlaying6'
];

let firstPlayerCoords = 0
let secondPlayerCoords = 0
let thirdPlayerCoords = 0
let fourthPlayerCoords = 0
const playersCoords = [firstPlayerCoords, secondPlayerCoords, thirdPlayerCoords, fourthPlayerCoords]
let currentPlayer = 0


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function dicePlaying() {
    document.getElementById('rollDice').style.display = 'none'
    let delay = 100
    let currentIndex = randomIntFromInterval(0, 5)
    let pastIndex
    let interval
    document.getElementById(diceId[currentIndex]).style.display = 'block'
    interval = setInterval(function() {
        pastIndex = currentIndex
        currentIndex = randomIntFromInterval(0, 5)
        currentIndex = (currentIndex === pastIndex) ? (currentIndex + 1) % 6 : currentIndex
        document.getElementById(diceId[currentIndex]).style.display = 'block'
        document.getElementById(diceId[pastIndex]).style.display = 'none'
        }, delay);

    setTimeout(function () {
        clearInterval(interval)
        //alert(currentIndex+1)
        }, 2000)

    setTimeout(function () {
        for (let i = 0; i < 6; i++) {
            document.getElementById(diceId[i]).style.display = 'none'
            document.getElementById('rollDice').style.display = 'block'
        }
        rollDice(currentPlayer, playersCoords[currentPlayer], currentIndex + 1)
    }, 3000)
}

function rollDice (numberPlayer, index_0, number_steps) {
    const square_cards = [0, 7, 12, 19]
    const playerId = ['firstPlayer', 'secondPlayer', 'thirdPlayer', 'fourthPlayer']
    let coords
    //const pos_x0 = [200, 100, 200]
    //const pos_y0 = [200, 100, 200]
    //const pos_x1 = [100, 100, 200]
    //const pos_y1 = [200, 100, 200]
    let move
    if (index_0 >= 19) {
        index_0 -= 19
    } else if (index_0 >= 12) {
        index_0 -= 12
    } else if (index_0 >= 7) {
        index_0 -=7
    }
/*    for (let i = 1; i <= number_steps; i++) {
        if (0 <= firstPlayerCoords && firstPlayerCoords < 7) {
            document.getElementById(playerId[numberPlayer]).style.left = index_0  * 100 + 200 + 'px'
        } else if (7 <= firstPlayerCoords && firstPlayerCoords < 12) {
            document.getElementById(playerId[numberPlayer]).style.top = index_0 * 100 + 200 + 'px'
        } else if (12 <= firstPlayerCoords && firstPlayerCoords < 19) {
            if (firstPlayerCoords !== 18){
                document.getElementById(playerId[numberPlayer]).style.left = 800 - (index_0 * 100 + 100) + 'px'
            } else {
                document.getElementById(playerId[numberPlayer]).style.left = 800 - (index_0 * 100 + 200) + 'px'
            }
        } else {
            if (firstPlayerCoords !== 23){
                document.getElementById(playerId[numberPlayer]).style.top = 600 - (index_0 * 100 + 100) + 'px'
            } else {
                document.getElementById(playerId[numberPlayer]).style.top = 600 - (index_0 * 100 + 200) + 'px'
            }
        }*/
    for (let i = 1; i <= number_steps; i++) {
        coords = playersCoords[numberPlayer]
        if (numberPlayer === 0) {
            if (0 <= coords && coords < 7 || 12 <= coords && coords < 19) {
                if (0 <= coords && coords< 7) {
                    move =  index_0  * 100 + 200
                } else {
                    move = coords !== 18 ? 700 - index_0 * 100 : 700 - index_0 * 100 - 100
                }
                document.getElementById(playerId[numberPlayer]).style.left = move + 'px'
            } else {
                if (7 <= coords && coords < 12) {
                    move = index_0 * 100 + 200
                } else {
                    move = coords !== 23 ? 500 - index_0 * 100 : move = 500 - index_0 * 100 - 100
                }
                document.getElementById(playerId[numberPlayer]).style.top = move + 'px'
            }
        } else if (numberPlayer === 1) {
            if (0 <= coords && coords < 7 || 12 <= coords && coords < 19) {
                if (0 <= coords && coords < 7) {
                    move =  coords !== 6 ? index_0  * 100 + 250 : index_0  * 100 + 350
                } else {
                    move =  750 - index_0 * 100
                }
                document.getElementById(playerId[numberPlayer]).style.left = move + 'px'
            } else {
                if (7 <= coords && coords < 12) {
                    move = index_0 * 100 + 200
                } else {
                    move = coords !== 23 ? 500 - index_0 * 100: move = 500 - index_0 * 100 - 100
                }
                document.getElementById(playerId[numberPlayer]).style.top = move + 'px'
            }
        } else if (numberPlayer === 2) {
            if (0 <= coords && coords < 7 || 12 <= coords && coords < 19) {
                if (0 <= coords && coords < 7) {
                    move =  index_0  * 100 + 200
                } else {
                    move = coords !== 18 ? 700 - index_0 * 100 : 700 - index_0 * 100 - 100
                }
                document.getElementById(playerId[numberPlayer]).style.left = move + 'px'
            } else {
                if (7 <= coords && coords < 12) {
                    move = coords !== 11 ? index_0 * 100 + 250 : index_0 * 100 + 350
                } else {
                    move =  550 - index_0 * 100
                }
                document.getElementById(playerId[numberPlayer]).style.top = move + 'px'
            }
        } else if (numberPlayer === 3) {
            if (0 <= coords && coords < 7 || 12 <= coords && coords < 19) {
                if (0 <= coords && coords < 7) {
                    move =  coords !== 6 ? index_0  * 100 + 250 : index_0  * 100 + 350
                } else {
                    move =  750 - index_0 * 100
                }
                document.getElementById(playerId[numberPlayer]).style.left = move + 'px'
            } else {
                if (7 <= coords && coords < 12) {
                    move = coords !== 11 ? index_0 * 100 + 250 : index_0 * 100 + 350
                } else {
                    move =  550 - index_0 * 100
                }
                document.getElementById(playerId[numberPlayer]).style.top = move + 'px'
            }
        }

        index_0 ++
        playersCoords[numberPlayer] ++
        if (playersCoords[numberPlayer] === 24) {
            playersCoords[numberPlayer] = 0
        }
        if (square_cards.indexOf(playersCoords[numberPlayer]) !== -1) {
            index_0 = 0
        }
    }
    currentPlayer = (currentPlayer + 1) % 4



    }
    //alert(firstPlayerCoords)


//rollDice(firstPlayerCoords, 16)