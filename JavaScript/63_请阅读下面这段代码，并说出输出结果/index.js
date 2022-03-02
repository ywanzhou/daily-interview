class Phone {
  constructor(price) {
    this.price = price;
  }
  get price() {
    return 999;
  }
}
const p = new Phone(888);
console.log(p.price);
