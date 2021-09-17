const KartenMaster = require("./KartenMaster");

class Room {
    constructor(config) {
        this.configRoom = config;
        this.name = config.name;
        this.rundeDisc = config.runde;
        this.pausiert = false;
        this.modus = config.modus;
        this.waitingTime = parseInt(config.warten);
        this.maxPoints = config.punkte;
        this.isPassword = config.isPassword;
        this.password = "";
        if (this.isPassword) {
            this.password = config.password;
        }
        this.spectators = [];
        this.team1Punkte = 17;
        this.team2Punkte = 17;
        this.freePos = [0, 1, 2, 3];
        this.userPos = [];
        this.userTeam = [1, 2, 1, 2];
        this.userStiche = [0, 0, 0, 0];
        this.team1Stiche = 0;
        this.userSticheGesamt = [0, 0, 0, 0];
        this.team2Stiche = 0;
        this.userStatus = [];
        this.userCards = [];
        this.tischCards = [];
        this.tischCardsObject = [];
        this.schlagPos = 0;
        this.trumpfPos = 1;
        this.userAnzahl = config.userAnzahl;
        this.seeCards = false;
        this.schlagGewaelt = false;
        this.trumpfGewaelt = false;
        this.schlag;
        this.trumpf;
        this.amZug = 0;
        this.zugStart = 0;
        this.gelegt = 0;
        this.stich = 0;
        this.geboten = 2;
        this.gebotenDavor = 0;
        this.schlagtausch = false;
        this.kartenMaster = new KartenMaster(this);

        return 0;
    }

    neuesSpiel() {
        this.team1Punkte = 0; //sollte 0 sein
        this.team2Punkte = 0; //sollte 0 sein
        this.userStiche = [0, 0, 0, 0];
        this.team1Stiche = 0;
        this.team2Stiche = 0;
        this.userStatus = [];
        this.userCards = [];
        this.tischCards = [];
        this.tischCardsObject = [];
        this.schlagPos = 0;
        this.trumpfPos = 1;
        this.schlagGewaelt = false;
        this.trumpfGewaelt = false;
        this.schlag;
        this.trumpf;
        this.amZug = 0;
        this.zugStart = 0;
        this.gelegt = 0;
        this.stich = 0;
        this.geboten = 2;
        this.gebotenDavor = 0;
        this.schlagtausch = false;
        this.userSticheGesamt = [0, 0, 0, 0];
    }

    resetSchlagTrumpf() {
        this.schlagGewaelt = false;
        this.trumpfGewaelt = false;
        this.schlag;
        this.trumpf;
    }

    getTeam(pos) {
        if (pos % 2 === 0) return 1;
        else return 2;
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
        this.geboten = 2;
        this.gebotenDavor = 0;
        this.schlagtausch = false;
        this.seeCards = false;
    }

    tryNeueRunde() {
        if (this.rundeDisc === "Pausieren") {
            this.pausiert = true;
            return false;
        }
        if (this.tischCards !== []) {
            this.neueRunde();
            return true;
        }
        return false;
    }

    calcPos(pos) {
        if (pos < 0) return pos + 4;
        return pos;
    }

    setSchlagtausch() {
        this.schlagtausch = true;
        this.amZug = this.schlagPos;
        this.zugStart = this.schlagPos;
    }

    resetAfterStich(gewinnerPos) {
        if (this.schlagtausch) {
            let tmp = this.schlagPos;
            this.schlagPos = this.trumpfPos;
            this.trumpfPos = tmp;
            this.schlagtausch = false;
        }
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
        if (this.team1Stiche === 3) {
            this.team1Punkte += this.geboten;
            return { team1: this.geboten };
        } else {
            this.team2Punkte += this.geboten;
            return { team2: this.geboten };
        }
    }

    isTeam1Gestrichen() {
        if (this.team1Punkte >= this.maxPoints - 2) return true;
        return false;
    }
    isTeam2Gestrichen() {
        if (this.team2Punkte >= this.maxPoints - 2) return true;
        return false;
    }
    isInGestrichenTeam(pos) {
        if (this.isTeam1Gestrichen() && this.isTeam2Gestrichen()) return false;
        else {
            if (pos % 2 === 0) {
                if (this.isTeam1Gestrichen()) return true;
                else return false;
            } else {
                if (this.isTeam2Gestrichen()) return true;
                else return false;
            }
        }
        return false;
    }

    getTeamPunkteAbgelehnt(pos) {
        if (pos % 2 === 0) {
            this.team2Punkte += this.geboten;
            return { team2: this.geboten };
        } else {
            this.team1Punkte += this.geboten;
            return { team1: this.geboten };
        }
    }

    addStichToTeam(pos) {
        this.userSticheGesamt[pos] += 1;
        if (pos % 2 === 0) {
            this.team1Stiche += 1;
        } else {
            this.team2Stiche += 1;
        }
    }

    gewinnerPos(pos) {
        if (!this.schlagtausch) {
            let gewinnerPos = pos - this.zugStart;
            if (gewinnerPos < 0) gewinnerPos = 4 + gewinnerPos;
            if (gewinnerPos === 3) return 1;
            if (gewinnerPos === 1) return 3;
            return gewinnerPos;
        } else {
            let gewinnerPos = pos + this.zugStart;
            if (gewinnerPos > 3) gewinnerPos = gewinnerPos - 4;
            return gewinnerPos;
        }
    }
    createCheckObject() {
        let check = {
            schlag: this.schlag.schlag,
            farbe: this.trumpf.farbe,
            karte: this.tischCardsObject,
        };

        return check;
    }

    minusPosition() {
        if (!this.schlagtausch) {
            this.amZug -= 1;
            if (this.amZug === -1) {
                this.amZug = 3;
            }
        } else {
            this.amZug += 1;
            if (this.amZug === 4) {
                this.amZug = 0;
            }
        }
    }

    addUser(user) {
        let pos = this.freePos.shift();
        this.userPos[pos] = user;
        return pos;
    }

    addTeam(team, user) {
        if (team === 1) {
            //Team 1
            let index = this.freePos.indexOf(0);
            if (index !== -1) {
                this.freePos.splice(index, 1);
                this.userPos[0] = user;
                return true;
            }
            index = this.freePos.indexOf(2);
            if (index !== -1) {
                this.freePos.splice(index, 1);
                this.userPos[2] = user;
                return true;
            }
        } else {
            //Team 2
            let index = this.freePos.indexOf(1);
            if (index !== -1) {
                this.freePos.splice(index, 1);
                this.userPos[1] = user;
                return true;
            }
            index = this.freePos.indexOf(3);
            if (index !== -1) {
                this.freePos.splice(index, 1);
                this.userPos[3] = user;
                return true;
            }
        }
        return false;
    }

    removeUser(user) {
        let index = this.userPos.indexOf(user);
        if (index > -1) {
            this.userPos[index] = null;
            this.freePos.push(index);
        }
    }

    removeSpectator(user) {
        let index = this.spectators.indexOf(user);
        if (index > -1) {
            this.spectators.splice(index, 1);
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
        return personalInfo.position;
    }

    getNecessary() {
        return {
            name: this.name,
            users: this.userPos,
            team1: this.team1Punkte,
            team2: this.team2Punkte,
            config: this.configRoom,
        };
    }

    selectTeam() {
        if (this.freePos.length >= 2) {
            if (this.freePos.length === 2) {
                if (this.freePos.includes(0) && this.freePos.includes(2))
                    return false;
                if (this.freePos.includes(1) && this.freePos.includes(3))
                    return false;
            }
            return true;
        }
        return false;
    }

    checkWin() {
        if (this.team1Punkte >= this.maxPoints) {
            return 1;
        } else if (this.team2Punkte >= this.maxPoints) {
            return 2;
        }
        return 0;
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
