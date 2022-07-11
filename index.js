function writeCards(cards, event) {
    let newArray = []
    for (let i = 0; i < cards.length; i++) {
      newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    
    }
return newArray
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
      }
}