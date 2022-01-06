const Potion = require("./Potion");
const Character = require("./Character");

class Player extends Character {
  constructor(name = "") {
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.agility += potion.value;
        break;
      case "strength":
        this.agility += potion.value;
        break;
    }
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }
}

module.exports = Player;
