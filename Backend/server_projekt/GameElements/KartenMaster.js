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

    kartenAusteilen(room){
        let foo = {
            "spieler":
                []
        }
        room.configRoom.spielerIDs.map(value => foo.spieler.push(value))
        let j = 0
        for(let i = 0; i < room.configRoom.spielerAnzahl; i++){
            let bar = {
                "karten": []
            }
            bar.karten.push(
                this.kartendeck[i],
                this.kartendeck[j+1],
                this.kartendeck[j+2],
                this.kartendeck[j+3],
                this.kartendeck[j+4]
            )
            foo.spieler[i] += bar;
            j+=5;
        }

        console.log(JSON.stringify(foo))
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
