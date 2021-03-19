const kartenJSON = require('./Karten.json')
const ArrayList = require("arraylist");

class KartenMaster{
    constructor(){
        this.kartendeck = new ArrayList;
    }

    kartenMischen(){
        this.kartendeck = shuffle(kartenJSON.Karten);
        console.log(this.kartendeck)
    }

    kartenAusteilen(){

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
