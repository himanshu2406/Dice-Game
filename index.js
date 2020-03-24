
var Randomnumber = Math.floor(Math.random()*6) + 1
var Randomnumber2 = Math.floor(Math.random()*6) + 1

document.querySelector('.img1').setAttribute('src','images/dice'+Randomnumber + '.png')
document.querySelector('.img2').setAttribute('src','images/dice'+Randomnumber2 + '.png')
