const Karten = require("./Karten");

module.exports = class Spiel {
  constructor() {
    this.userId = [0, 1, 2, 3];
    this.socketId = [];
    this.farbe;
    this.schlag;
    this.farbeId = 3;
    this.schlagId = 0;
    this.isFarbeSelected = false;
    this.isSchalgSelected = false;
    this.istDran = 0;
    this.legenCounter = 0;
    this.beschter;
    this.guater;
    this.batadu;
    this.winningKarte;
    this.winningKartePos;
  }
  setBeschter() {
    let index;
    if (this.schlag === "Welli") {
      index = -1;
    } else {
      index = grundKarten.indexOf(this.schlag.split(" ")[1]);
    }
    if (index === 7) index = 0;
    else index += 1;
    this.beschter = `${this.farbe} ${this.grundKarten[index]}`;
    console.log("Beschter: " + this.beschter);
  }

  setGuater() {
    if (this.schlag === "Welli") this.guater = this.schlag;
    else this.guater = this.farbe + " " + this.schlag.split(" ")[1];
  }

  betterCard(curCard) {
    if (this.winningKarte === this.beschter) {
      return;
    } else if (curCard === this.beschter) {
      //beschter
      console.log("Buniscimo");
      setWinningKarte();
    } else if (curCard === this.guater) {
      //guater
      console.log("Dert");
      setWinningKarte();
    } else if (
      curCard.includes(this.batadu) &&
      !this.winningKarte.includes(this.batadu)
    ) {
      console.log("Batadu");
      setWinningKarte();
    } else if (curCard.includes(this.batadu)) {
      return;
    } else if (curCard.includes(this.farbe)) {
      if (
        this.winningKarte.includes(this.farbe) &&
        grundKartenValue[curCard.split(" ")[1]] >
          grundKartenValue[this.winningKarte > split(" ")[1]]
      ) {
        console.log("Farbe");
        setWinningKarte();
      } else if (!this.winningKarte.includes(this.farbe)) {
        console.log("Farbe");
        setWinningKarte();
      }
    } else if (!this.winningKarte.includes(this.farbe)) {
      let winningFarbe = this.winningKarte.split(" ")[0];
      let currentFarbe = this.farbe.split(" ")[0];
      if (
        winningFarbe === currentFarbe &&
        grundKartenValue[this.farbe.split(" ")[1]] >
          grundKartenValue[this.winningKarte > split(" ")[1]]
      ) {
        console.log("Billig");
        setWinningKarte();
      }
    }

    function setWinningKarte() {
      this.winningKarte = this.farbe;
      this.winningKartePos = this.legenCounter;
    }
  }

  nextId(id) {
    if (id < 3) return id + 1;
    else return 0;
  }
};
