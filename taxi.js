class Personnage {
  constructor(nom, santeMentale) {
    this.nom = nom;
    this.santeMentale = santeMentale;
  }
}

class Trajet {
  constructor(radio, feuxRouges, changements) {
    this.radio = radio;
    this.feuxRouges = feuxRouges;
    this.changements = changements;
  }
}

const musiques = [
  "Pnl - Da",
  "Leto - Paris est magique",
  "Ninho - Destin",
  "Pnl - Au dd",
  "Anissa - Wejdene"
];

const john = new Personnage("John", 10);

const trajet = new Trajet(musiques, 30, 0);

for (let i = 0; i < trajet.feuxRouges; i++) {
  const musiqueCourante = trajet.radio[Math.floor(Math.random() * trajet.radio.length)];

  if (musiqueCourante === "Anissa - Wejdene") {
    john.santeMentale--;
    trajet.changements++;
  }

  console.log(`Feu rouge ${i + 1} - Musique : ${musiqueCourante} | Santé mentale : ${john.santeMentale}`);

  if (john.santeMentale <= 0) {
    console.log("Explosion !");
    break;
  }
}

if (john.santeMentale > 0) {
  console.log(`John est bien arrivé chez lui après ${trajet.changements} changements de taxi.`);
}
