const kartenJSON = require("./Karten.json");
const ArrayList = require("arraylist");

class KartenMaster {
    constructor(room) {
        this.kartendeck = new ArrayList();
        this.room = room;
    }

    kartenMischen() {
        this.kartendeck = shuffle(kartenJSON.Karten);
        console.log(this.kartendeck);
    }

    kartenAusteilen() {
        let j = 0;
        for (let i = 0; i < 4; i++) {
            let kartenSpieler = [];
            kartenSpieler.push(
                this.kartendeck[i],
                this.kartendeck[j + 1],
                this.kartendeck[j + 2],
                this.kartendeck[j + 3],
                this.kartendeck[j + 4]
            );
            this.room.userCards[i] = kartenSpieler;
            j += 5;
        }
    }

    getBestKarte(par) {
        par.karte.map((element) => {
            if (element.schlag === par.schlag) {
                //first schlag

                par.karte.map((element) => {
                    //if win by schlag
                    if (
                        element.schlag === par.schlag &&
                        element.farbe === par.farbe
                    ) {
                        //rechter
                        par.karte.map((element) => {
                            let guter;
                            if (par.schlag !== 14) {
                                guter = par.schlag + 1;
                            } else {
                                guter = 7;
                            }
                            if (
                                element.schlag === guter &&
                                element.farbe === par.farbe
                            ) {
                                //guter
                                return element;
                            }
                        });
                        return element;
                    }
                });
                return element;
            }
        });

        par.karte.map((element) => {
            //if win by farbe
            if (element.farbe === par.farbe) {
                let biggestCard = element;
                par.karte.map((element) => {
                    if (
                        element.farbe === par.farbe &&
                        element.schlag > biggestCard.schlag
                    ) {
                        biggestCard = element;
                    }
                });
                return biggestCard;
            }
        });

        //cheap win
        let tmpbestCard = par.karte[0];
        par.karte.map((element) => {
            if (
                element.farbe === tmpbestCard.farbe &&
                element.schlag > tmpbestCard.schlag
            ) {
                tmpbestCard = element;
            }
        });
        return tmpbestCard;
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
module.exports = KartenMaster;
