class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() < this.luck / 100;
    }
  
    attackPokemon(target) {
      const damage = this.attack - target.defense;
      if (damage > 0) {
        target.hp -= damage;
      }
    }
  }
  
  const salameche = new Pokemon('salameche', 40, 20, 200, 70);
  const Bulbasaur = new Pokemon('Bulbasaur', 35, 25, 120, 60);
  
  while (salameche.hp > 0 && Bulbasaur.hp > 0) {
    // salameche attaque Bulbasaur
    if (salameche.isLucky()) {
      salameche.attackPokemon(Bulbasaur);
    }
    
    console.log(`Bulbasaur: HP ${Bulbasaur.hp}`);
    
    if (Bulbasaur.hp <= 0) {
      console.log('Bulbasaur est mort !');
      break;
    }
    
    // Bulbasaur attaque salameche
    if (Bulbasaur.isLucky()) {
      Bulbasaur.attackPokemon(salameche);
    }
    
    console.log(`salameche: HP ${salameche.hp}`);
    
    if (salameche.hp <= 0) {
      console.log('salameche est mort !');
      break;
    }
  }
  