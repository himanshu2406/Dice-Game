
var Randomnumber = Math.floor(Math.random()*6) + 1
var Randomnumber2 = Math.floor(Math.random()*6) + 1

document.querySelector('.img1').setAttribute('src','images/dice'+Randomnumber + '.png')
document.querySelector('.img2').setAttribute('src','images/dice'+Randomnumber2 + '.png')
if (Randomnumber > Randomnumber2) {
  document.querySelector('h1').textContent = 'Player one wins ! 🚩'

} else if (Randomnumber < Randomnumber2){

  document.querySelector('h1').textContent = 'Player two wins ! 🚩'
} else{
  document.querySelector('h1').textContent = 'Tie ! 🚩'
}
