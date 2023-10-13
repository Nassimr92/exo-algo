
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}


const prenoms = ["riyad", "eva", "stephane", "David", "louis"];


function genererSurvivant() {
  const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
  const caracteristique = ["Geek", "Sportif", "plus de cheveaux"][Math.floor(Math.random() * 3)];
  const probabiliteMourir = getRandomNumber(0, 1);
  const probabiliteDegats = getRandomNumber(0, 1);
  const probabiliteMourirDegats = getRandomNumber(0, 1);

  return {
    prenom,
    caracteristique,
    probabiliteMourir,
    probabiliteDegats,
    probabiliteMourirDegats,
    pointsDeVie: 100
  };
}

const jason = {
  nom: "Jason",
  pointsDeVie: 100
};


const survivants = Array.from({ length: 5 }, genererSurvivant);


function resoudreCombat(tueur, survivant) {
  const action = getRandomNumber(0, 1);

  if (action <= survivant.probabiliteMourir) {
    survivant.pointsDeVie = 0;
    return `${survivant.prenom} (${survivant.caracteristique}) est mort(e).`;
  } else if (action <= survivant.probabiliteMourir + survivant.probabiliteDegats) {
    jason.pointsDeVie -= 10;
    return `${survivant.prenom} (${survivant.caracteristique}) inflige 10 points de dégâts à Jason.`;
  } else {
    jason.pointsDeVie -= 15;
    survivant.pointsDeVie = 0;
    return `${survivant.prenom} (${survivant.caracteristique}) inflige 15 points de dégâts à Jason, mais meurt en retour.`;
  }
}


while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
  for (const survivant of survivants) {
    if (jason.pointsDeVie <= 0 || survivant.pointsDeVie <= 0) continue;
    console.log(resoudreCombat(jason, survivant));
  }
}


console.log("Morts :");
for (const survivant of survivants) {
  if (survivant.pointsDeVie <= 0) {
    console.log(`${survivant.prenom} (${survivant.caracteristique})`);
  }
}
