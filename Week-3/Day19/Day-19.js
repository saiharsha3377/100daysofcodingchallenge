const coffeeMachine = {
  brand: "Espresso Coffee Machine",
  model: "ESAM4200",
  waterLevel: 45,

  brew: function() {
    if (this.waterLevel >= 10) {
      console.log("Brewing coffee...");
      this.waterLevel -= 10;
    } else {
      console.log("Not enough water to brew coffee.");
    }
  },

  clean: function() {
    console.log("Cleaning the coffee machine...");
  }
};

console.log(coffeeMachine.brand); 
console.log(coffeeMachine.model); 
coffeeMachine.brew(); 
console.log(coffeeMachine.waterLevel); 
coffeeMachine.clean();