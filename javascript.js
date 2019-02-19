let userHealth = 40;
let grantHealth = 10;
let grantLives = 2;
let choice = '';
let userName = '';
let start = '';



  function getDamage() {
  (userHealth -= (Math.floor(Math.random() * 5) + 1)) && (grantHealth -= (Math.floor(Math.random() * 5) + 1));
}


function continueLoop(choice, userName) {
  if (userHealth <= 5) {
    console.log(`On the brink of death, ${userName} lashes out with a desperate blow!`);
  } else if (userHealth <= 10) {
    console.log(`${userName} ignores the incredible pain and presses on. For Glory!`);
  } else if (userHealth <= 25) {
    console.log(`Tis only a flesh wound! Nothing will stop ${userName}!`);
  } else {
    console.log(`${userName} shows no signs of letting up!`);
  }
}

function startCombat(userName) {
  while ((userHealth > 0 || grantLives > 1)) {
    getDamage();
    console.log(`${userName} and Almighty Grant clash arms in battle.`);
    console.log(`${userName} has ${userHealth} health remaining. Grant has ${grantHealth} health and ${grantLives} extra lives left.`);

    if ((grantHealth <= 0) && (grantLives <= 0)) {
      console.log(`${userName} emerges victorious!`);
      alert("MMMM victory tastes even sweeter with BBQ sauce");
      break;
    } else if (userHealth < 1) {
      console.log(`Almighty Grant makes quick work of ${userName}!`);
      alert('Muahahaha! Grovel at the feet of the Almight Grant.');
      break;
    } else if ((grantHealth <= 0) && (grantLives > 0)) {
      (grantHealth = 10) && (grantLives -= 1);
      console.log(`Almighty Grant defies death and is restored to ${grantHealth} health!`);
      let choice = prompt(`${userName} has a brief opening to decide...<ATTACK> or <RUN>?`);
      if (choice === 'RUN' || choice === 'run' || choice === 'Run') {
        console.log(`${userName} runs away!`)
        alert('I knew you were Craven! Muahahahahahahahahahaha!');
        break;
      } else {
        continueLoop(choice, userName);
        continue;
      }
    } else {
      let choice = prompt(`${userName} has a brief opening to decide...<ATTACK> or <RUN>?`);
      if (choice === 'RUN' || choice === 'run' || choice === 'Run' || choice === '<RUN>') {
        console.log(`${userName} runs away!`)
        alert('I knew you were Craven! Muahahahahahahahahahaha!');
        break;
      } else if (choice === 'attack' || choice === 'Attack' || choice === 'ATTACK' || choice === '<ATTACK>') {
        continueLoop(choice, userName);
        continue;
      } else {
        alert('Do not hesitate! Almighty Grant takes advantage of your lack of decision and attacks first!');
        continue;
      }
    }
  }
}

function startGame() {
  let start = prompt('Dos thou have the courage and skill to defeat the Almighty Grant?'); 
if (start === 'yes' || start === 'Yes') {
  let userName = prompt('What is thy name swine?');
  startCombat(userName);
} else {
  alert('I knew you were Craven! Muahahahahahahahahaha!');
}
}
startGame();