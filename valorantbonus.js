
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
    const duelGagne = Math.random() < 0.7;

    if (duelGagne) {
      console.log(`L'attaquant ${attaquant} remporte le duel grace a sa vandal ou il met un one tap.`);
      scoreAttaquants++;
    } else {
      console.log(`Le défenseur ${defenseur} a detruit grace a sont operateur l'attanquant ${attaquant}.`);
      scoreDefenseurs++;
    }
    
  } else {
    console.log(`Le spike n'est pas amorcé les defenseur ont reusie a defendre pour l'instant sont site.`);
    const duelGagne = Math.random() < 0.5;

    if (duelGagne) {
      console.log(`L'attaquant ${attaquant} detruit les adversaires.`);
      scoreAttaquants++;
    } else {
      console.log(`Le défenseur ${defenseur} gagne l'eco graçe a sont cherif ${attaquant}.`);
      scoreDefenseurs++;
    }
  }

  console.log(`Score : Attaquants ${scoreAttaquants} - ${scoreDefenseurs} Defenseurs`);
}


while (scoreAttaquants < 13 && scoreDefenseurs < 13) {
  simulerManche();
}


if (scoreAttaquants === 13) {
  console.log(`victoire des Attanquants ils ont detruite les attanquants, dans le chat ils ont tout marquée ez car ils sont tous toxic car c est la commu valorant !`);
} else {
  console.log(`victoire des Defenseur ils ont detruite les attanquants, dans le chat ils ont tout marquée ez car ils sont tous toxic car c est la commu valorant !`);
}