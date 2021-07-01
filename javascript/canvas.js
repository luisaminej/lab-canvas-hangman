
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    
  }

  createBoard() {
    this.drawLines
    this.context.clearRect(0,0,1200,800)
  }

  drawLines() {
    let ctx = this.ctx
    let x   = 0
    for (let i = 0; i < this.secretWord.length; i++) {
      ctx.beginPath()
      ctx.moveTo(x,000)
      ctx.lineto(x + 00,000)
      ctx.stroke()
      x += 0
     }
     ctx.closePath()
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
