class Room {
  constructor(config) {
    this.configRoom = config;
    if (this.configRoom.spielerAnzahl === 4) {
      this.roompositionen = [false, false, false, false]; // false == frei
    } else {
      this.roompositionen = [false, false]; // false == frei
    }

    //first player in room
    this.configRoom.spielerIDs[0].position = "0";
    this.roompositionen[0] = true;
    return 0;
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
    if (this.configRoom.spielerIDs.length >= this.configRoom.spielerAnzahl) {
      this.configRoom.zuschauerIDs.push(personalInfo);
    } else {
      personalInfo.position = this.calcPosition(personalInfo).toString();
      this.configRoom.spielerIDs.push(personalInfo);
    }
    //console.log(this.configRoom.spielerIDs)
    //console.log(this.configRoom.zuschauerIDs)
    return personalInfo.position;
  }

  leaveRoom(personalInfo) {
    //console.log(this.configRoom.spielerIDs)
    //console.log(this.configRoom.zuschauerIDs)
    if (personalInfo.position !== null) {
      //console.log("spieler")
      for (let i = 0; i < this.configRoom.spielerIDs.length; i++) {
        if (this.configRoom.spielerIDs[i].position === personalInfo.position) {
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
  }
}
module.exports = Room;
