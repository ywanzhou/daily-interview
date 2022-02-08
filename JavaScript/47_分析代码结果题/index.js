function Hero(name) {}
Hero.name = 'Ellie'
Hero.prototype.name = 'Bella'
const result = new Hero('Henry').name
