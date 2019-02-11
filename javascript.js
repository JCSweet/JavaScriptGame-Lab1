const start = prompt('Dos thou have the courage and skill to defeat the Almighty Grant?');
 if (start === 'yes' || start === 'Yes') {
let userName = prompt('What is thy name swine?');
let userHealth = 40;
let grantHealth = 10;
let grantLives = 2;

while (userHealth > 0 || grantLives > 1) {
(userHealth -= (Math.floor(Math.random() * 2) + 1)) && (grantHealth -= (Math.floor(Math.random() * 2) + 1));
console.log(`${userName} and Almighty Grant clash arms in battle!`);
console.log(`${userName} has ${userHealth} health remaining.`);
console.log(`Grant has ${grantHealth} health and ${grantLives} extra lives left.`);

  if ((grantHealth <= 0) && (grantLives > 0)) {
    (grantHealth += 10) && (grantLives -= 1);
    console.log(`Almighty Grant defies death and is restored to ${grantHealth} health!`);

  } else if ((grantHealth <= 0) && (grantLives <= 0)) {
    console.log(`${userName} emerges victorious!`);
    alert("MMMM victory tastes even sweeter with BBQ sauce");
    break;

  } else if (userHealth < 1) {
    console.log(`Almighty Grant makes quick work of ${userName}!`);
    alert('Muahahaha! Grovel at the feet of the Almight Grant and he just may spare your pathetic life.'); 
    break; 
    
  }
}
}  else {
  alert('I knew you were Craven! Muahahahahahahahahahahahahahahaha!');
}