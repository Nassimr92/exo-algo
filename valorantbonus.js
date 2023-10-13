
const equipeAttaquants = ['Omen', 'Phoenix', 'Jett','Fade', 'Chamber'];;
const equipeDefenseurs = ['astra', 'neon', 'raze','sova', 'cypher'];


let scoreAttaquants = 0;
let scoreDefenseurs = 0;


function choisirJoueurAleatoire(equipe) {
  const joueur = equipe[Math.floor(Math.random() * equipe.length)];
  return joueur;
}


function simulerManche() {
  const attaquant = choisirJoueurAleatoire(equipeAttaquants);
  const defenseur = choisirJoueurAleatoire(equipeDefenseurs);

  console.log(`L'attaquant ${attaquant} tue le défenseur ${defenseur}.`);

  const spikeAmorce = Math.random() < 0.6;

  if (spikeAmorce) {
    console.log(`Le spike est amorcé par ${attaquant}.`);
    const duelGagne = Math.random() < 0.4;
    

    if (duelGagne) {
      console.log(`L'attaquant ${attaquant} remporte le duel.`);
      scoreAttaquants++;
    } else {
      console.log(`Le défenseur ${defenseur} tue l'attaquant ${attaquant}.`);
      scoreDefenseurs++;
    }
  } else {
    console.log(`Le spike n'est pas amorcé.`);
    const duelGagne = Math.random() < 0.9;

    if (duelGagne) {
      console.log(`L'attaquant ${attaquant} remporte le duel.`);
      scoreAttaquants++;
    } else {
      console.log(`Le défenseur ${defenseur} tue l'attaquant ${attaquant}.`);
      scoreDefenseurs++;
    }
  }

  console.log(`Score : Attaquants ${scoreAttaquants} - ${scoreDefenseurs} Defenseurs`);
}


while (scoreAttaquants < 13 && scoreDefenseurs < 13) {
  simulerManche();
}


if (scoreAttaquants === 13) {
  console.log(`Victoire des attaquant !`);
} else {
  console.log(`victoire des defenseur !`);
}