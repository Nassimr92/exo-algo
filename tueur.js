// Fonction pour générer un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Tableau de prénoms pour les survivants
const prenoms = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Fonction pour générer un survivant avec une caractéristique aléatoire
function genererSurvivant() {
  const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
  const caracteristique = ["Nerd", "Sportif", "Blonde"][Math.floor(Math.random() * 3)];
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

// Création de Jason
const jason = {
  nom: "Jason",
  pointsDeVie: 100
};

// Création de 5 survivants
const survivants = Array.from({ length: 5 }, genererSurvivant);

// Fonction pour résoudre l'issue d'un combat entre le tueur et un survivant
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

// Tant que le tueur n'est pas mort et que Jason n'est pas mort
while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
  for (const survivant of survivants) {
    if (jason.pointsDeVie <= 0 || survivant.pointsDeVie <= 0) continue;
    console.log(resoudreCombat(jason, survivant));
  }
}

// Affichage des morts
console.log("Morts :");
for (const survivant of survivants) {
  if (survivant.pointsDeVie <= 0) {
    console.log(`${survivant.prenom} (${survivant.caracteristique})`);
  }
}
