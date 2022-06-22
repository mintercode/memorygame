document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'donny',
        img: 'images/donny.png'
      },
      {
        name: 'donny',
        img: 'images/donny.png'
   
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'leo',
        img: 'images/leo.png'
      },
      {
        name: 'leo',
        img: 'images/leo.png'
      },
      {
        name: 'mikey',
        img: 'images/mikey.png'
      },
      {
        name: 'mikey',
        img: 'images/mikey.png'
      },
      
      {
        name: 'ralph',
        img: 'images/ralph.png'
      },
      {
        name: 'ralph',
        img: 'images/ralph.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/background3.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/background3.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/background3.jpeg')
        alert('Cowabunga you got a match!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Cowabunga you got a match!')
        cards[optionOneId].setAttribute('src', 'images/cowabunga.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/cowabunga.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/background3.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/background3.jpeg')
        alert('Sorry dude, shredder wins this one.')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Cowabunga you found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
 