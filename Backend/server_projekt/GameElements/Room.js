class Room {
    constructor(config) {
        this.configRoom = config;
        this.freePos = [0, 1, 2, 3];
        this.userPos = [];
        this.userTeam = [1, 2, 1, 2];
        this.userStiche = [0, 0, 0, 0];
        this.team1Stiche = 0;
        this.team2Stiche = 0;
        this.userStatus = [];
        this.userCards = [];
        this.tischCards = [];
        this.tischCardsObject = [];
        this.schlagPos = 0;
        this.trumpfPos = 1;
        this.userAnzahl = config.userAnzahl;
        this.schlagGewaelt = false;
        this.trumpfGewaelt = false;
        this.schlag;
        this.trumpf;
        this.amZug = 0;
        this.zugStart = 0;
        this.gelegt = 0;
        this.stich = 0;

        return 0;
    }

    neueRunde() {
        this.schlagPos = this.calcPos(this.schlagPos - 1);
        this.trumpfPos = this.calcPos(this.trumpfPos - 1);
        this.schlagGewaelt = false;
        this.trumpfGewaelt = false;
        this.userStiche = [0, 0, 0, 0];
        this.team1Stiche = 0;
        this.team2Stiche = 0;
        this.amZug = this.schlagPos;
        this.zugStart = this.schlagPos;
        this.tischCards = [];
        this.tischCardsObject = [];
        this.userStatus = [];
        this.gelegt = 0;
        this.stich = 0;
        this.schlag;
        this.trumpf;
    }

    calcPos(pos) {
        if (pos < 0) return pos + 4;
        return pos;
    }

    resetAfterStich(gewinnerPos) {
        this.amZug = gewinnerPos;
        this.zugStart = gewinnerPos;
        this.userStiche[gewinnerPos] += 1;
        this.tischCards = [];
        this.tischCardsObject = [];
        this.userStatus = [];
        this.gelegt = 0;
    }

    won() {
        if (this.team1Stiche === 3 || this.team2Stiche === 3) return true;
        else return false;
    }

    getTeamPunkte() {
        if (this.team1Stiche === 3) return { team1: 2 };
        else return { team2: 2 };
    }

    addStichToTeam(pos) {
        if (pos % 2 === 0) {
            this.team1Stiche += 1;
        } else {
            this.team2Stiche += 1;
        }
    }

    gewinnerPos(pos) {
        let gewinnerPos = pos - this.zugStart;
        console.log("ZugStart: " + this.zugStart);
        if (gewinnerPos < 0) gewinnerPos = 4 + gewinnerPos;
        if (gewinnerPos === 3) return 1;
        if (gewinnerPos === 1) return 3;
        return gewinnerPos;
    }
    createCheckObject() {
        let check = {
            schlag: this.schlag.schlag,
            farbe: this.trumpf.farbe,
            karte: this.tischCardsObject,
        };

        console.log(check);
        return check;
    }

    minusPosition() {
        this.amZug -= 1;
        if (this.amZug === -1) {
            this.amZug = 3;
        }
        console.log(this.amZug);
    }

    addUser(user) {
        let pos = this.freePos.shift();
        this.userPos[pos] = user;
        console.log(this.userPos);
        return pos;
    }

    removeUser(user) {
        let index = this.userPos.indexOf(user);
        if (index > -1) {
            this.userPos.splice(index, 1);
            this.freePos.push(index);
        }
    }

    addScore(position, points) {
        //team 1 --> pos 0 and 2
        //team 2 --> pos 1 and 3
        if (position === 0 || position === 2) {
            this.configRoom.team1score += points;
        } else {
            this.configRoom.team2score += points;
        }
    }

    calcPosition(person) {
        //spielerposition vergeben
        for (let i = 0; i < this.configRoom.spielerAnzahl; i++) {
            if (!this.roompositionen[i]) {
                this.roompositionen[i] = true;
                return i;
            }
        }
        return person;
    }

    addPerson(personalInfo) {
        if (
            this.configRoom.spielerIDs.length >= this.configRoom.spielerAnzahl
        ) {
            this.configRoom.zuschauerIDs.push(personalInfo);
        } else {
            personalInfo.position = this.calcPosition(personalInfo).toString();
            this.configRoom.spielerIDs.push(personalInfo);
        }
        console.log(this.configRoom.spielerIDs);
        console.log(this.configRoom.zuschauerIDs);
        return personalInfo.position;
    }

    /*

    leaveRoom(personalInfo) {
        //console.log(this.configRoom.spielerIDs)
        //console.log(this.configRoom.zuschauerIDs)
        if (personalInfo.position !== null) {
            //console.log("spieler")
            for (let i = 0; i < this.configRoom.spielerIDs.length; i++) {
                if (
                    this.configRoom.spielerIDs[i].position ===
                    personalInfo.position
                ) {
                    //console.log(i)
                    this.configRoom.spielerIDs.splice(i, 1);
                    //console.log(this.configRoom.spielerIDs)
                    //console.log(this.configRoom.zuschauerIDs)
                    return 1;
                }
            }
        } else {
            //console.log("zuschauer")
            for (let i = 0; i < this.configRoom.zuschauerIDs.length; i++) {
                if (this.configRoom.zuschauerIDs[i].id === personalInfo.id) {
                    //console.log(i)
                    this.configRoom.zuschauerIDs.splice(i, 1);
                    //console.log(this.configRoom.spielerIDs)
                    //console.log(this.configRoom.zuschauerIDs)
                    return 1;
                }
            }
        }

        return 0;
    }

    print() {
        return this.configRoom;
    }*/
}

module.exports = Room;
