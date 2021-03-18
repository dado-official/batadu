const grundKarten = ["7", "8", "9", "X", "Unter", "Ober", "König", "Ass"];
const grundFarben = ["Laub", "Schell", "Herz", "Eichel"];
const grundKartenValue = {
  Welli: 0,
  7: 1,
  8: 2,
  9: 3,
  X: 4,
  Unter: 5,
  Ober: 6,
  König: 7,
  Ass: 9,
};

function Karten() {
  this.karten = [];
}

Karten.prototype.neueKarten = function () {
  this.karten = [];
  for (let i = 0; i < grundFarben.length; i++) {
    for (let j = 0; j < grundKarten.length; j++) {
      this.karten.push(`${grundFarben[i]} ${grundKarten[j]}`);
    }
  }
  this.karten.push("Welli");
};

Karten.prototype.mischen = function () {
  var j, x, i;
  for (i = this.karten.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = this.karten[i];
    this.karten[i] = this.karten[j];
    this.karten[j] = x;
  }
  console.log(this.karten);
};

Karten.prototype.getKarten = function () {
  let returnKarten = [];
  let i = 0;
  while (i < 5) {
    let index = Math.random() * this.karten.length;
    returnKarten.push(this.karten.splice(index, 1)[0]);
    i++;
  }
  return returnKarten;
};

module.exports = Karten;
