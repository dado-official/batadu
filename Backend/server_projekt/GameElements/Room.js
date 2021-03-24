class Room {
    constructor(config) {
        this.configRoom = config;
        this.freePos = [0, 1, 2, 3];
        this.userPos = [];
        this.userCards = [];
        this.userAnzahl = config.userAnzahl;

        return 0;
    }

    addUser(user) {
        let pos = this.freePos.shift();
        this.userPos[pos] = user;
        console.log(this.userPos);
        return pos;
    }

<<<<<<< HEAD
    removeUser(user) {
        let index = this.userPos.indexOf(user);
        if (index > -1) {
            this.userPos.splice(index, 1);
            this.freePos.push(index);
        }
=======
  addScore(position, points){
    //team 1 --> pos 0 and 2
    //team 2 --> pos 1 and 3
    if(position === 0 || position === 2){
      this.configRoom.team1score += points;
    } else {
      this.configRoom.team2score += points;
    }
  }

  addPerson(personalInfo) {
    if (this.configRoom.spielerIDs.length >= this.configRoom.spielerAnzahl) {
      this.configRoom.zuschauerIDs.push(personalInfo);
    } else {
      personalInfo.position = this.calcPosition(personalInfo).toString();
      this.configRoom.spielerIDs.push(personalInfo);
>>>>>>> 5e0f2413e40b9a044c724ff71a4da1dcd7b13128
    }

    /*
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
