//"start": "node ./server.js",

const Room = require("../GameElements/Room")
const roomConfig = require("./roomTest.json")
let room = new Room(roomConfig);
let chai = require("chai");
let expect = chai.expect;

describe("Test before match", function(){

    it("getTeam(0) function", function() {
        expect(room.getTeam(0)).to.be.equal(1);
    })

    it("getTeam(1) function", function() {
        expect(room.getTeam(1)).to.be.equal(2);
    })

    it("getTeam(2) function", function() {
        expect(room.getTeam(2)).to.be.equal(1);
    })

    it("getTeam(3) function", function() {
        expect(room.getTeam(3)).to.be.equal(2);
    })
    
});

describe("Test douring match", function(){

    it("tryNeueRunde function (this.thischCards !== [])", function(){
        expect(room.tryNeueRunde()).to.be.equal(true);
    })

    it("tryNeueRunde (this.thischCards === []) function", function(){
        room.tischCards = [];
        expect(room.tryNeueRunde()).to.be.equal(false);
    })

    describe("Test calculate postions", function(){

        it("calcPos(0) function", function(){
            expect(room.calcPos(0)).to.be.equal(0)
        })
        
        it("calcPos(1) function", function(){
            expect(room.calcPos(1)).to.be.equal(1)
        })
        
        it("calcPos(2) function", function(){
            expect(room.calcPos(2)).to.be.equal(2)
        })
        
        it("calcPos(3) function", function(){
            expect(room.calcPos(3)).to.be.equal(3)
        })
        
        it("calcPos(-1) function", function(){
            expect(room.calcPos(-1)).to.be.equal(3)
        })

    });

    describe("Test if won Runde", function(){
        
        it("won function (team1Stiche = 3)", function(){
            room.team1Stiche = 3;
            expect(room.won()).to.be.equal(true);
        })
        
        it("won function (team2Stiche = 3)", function(){
            room.team2Stiche = 3;
            expect(room.won()).to.be.equal(true);
        })
    
        it("won function (team1Stiche = 0 & team2Stiche = 0)", function(){
            room.team1Stiche = 0;
            room.team2Stiche = 0;
            expect(room.won()).to.be.equal(false);
        })
        
        it("won function (team1Stiche = 1 & team2Stiche = 1)", function(){
            room.team1Stiche = 1;
            room.team2Stiche = 1;
            expect(room.won()).to.be.equal(false);
        })
        
        it("won function (team1Stiche = 2 & team2Stiche = 2)", function(){
            room.team1Stiche = 2;
            room.team2Stiche = 2;
            expect(room.won()).to.be.equal(false);
        })
    })
    
    /*
        ! Can not compare JSON with JSON
    describe("Test getTeamPunkte for won round", function(){
    
        it("getTeamPunkte function (team1Stiche = 3)", function(){
            room.team1Stiche = 3;
            expect(room.getTeamPunkte()).to.be.equal({ team1: 2 });
        })
        
        it("getTeamPunkte function (team2Stiche = 3)", function(){
            room.team1Stiche = 0;
            room.team2Stiche = 3;
            expect(room.getTeamPunkte()).to.be.equal({ team2: 2 });
        })
    })
    */

    describe("Test if someone is gestrichen", function(){
        /*
            ? maxPoints = undefinite
            ! Temporary set maxPoints manually
        */

        it("isTeam1Gestrichen (team1Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 13;     
            room.maxPoints = 18; 
            expect(room.isTeam1Gestrichen()).to.be.equal(false);
           
         });
         
         it("isTeam2Gestrichen (team2Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team2Punkte = 13;  
            room.maxPoints = 18;    
            expect(room.isTeam2Gestrichen()).to.be.equal(false);
           
         });
         
         it("isTeam1Gestrichen (team1Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;
            room.maxPoints = 18;     
            expect(room.isTeam1Gestrichen()).to.be.equal(true);
           
         });
         
         it("isTeam2Gestrichen (team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team2Punkte = 16;  
            room.maxPoints = 18;    
            expect(room.isTeam2Gestrichen()).to.be.equal(true);
           
         });
    });


    describe("Test if someone is in a gestrichen team", function(){
        /*
            ? maxPoints = undefinite
            ! Temporary set maxPoints manually
        */

        it("isInGestrichenTeam (team1Punkte, team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;     
            room.team2Punkte = 16;     
            room.maxPoints = 18; 

            expect(room.isInGestrichenTeam(0)).to.be.equal(false);
            expect(room.isInGestrichenTeam(1)).to.be.equal(false);
            expect(room.isInGestrichenTeam(2)).to.be.equal(false);
            expect(room.isInGestrichenTeam(3)).to.be.equal(false);
           
         });
         
         it("isInGestrichenTeam(pos: 0) (team1Punkte = 16 & team2Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;  
            room.team2Punkte = 13;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(0)).to.be.equal(true);
           
         });
         
         it("isInGestrichenTeam(pos: 1) (team1Punkte = 16 & team2Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;  
            room.team2Punkte = 13;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(1)).to.be.equal(false);
           
         });
         
         it("isInGestrichenTeam(pos: 2) (team1Punkte = 16 & team2Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;  
            room.team2Punkte = 13;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(2)).to.be.equal(true);
           
         });
         
         it("isInGestrichenTeam(pos: 3) (team1Punkte = 16 & team2Punkte = 13 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 16;  
            room.team2Punkte = 13;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(3)).to.be.equal(false);
           
         }); 
         
         
         it("isInGestrichenTeam(pos: 0) (team1Punkte = 13 & team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 13;  
            room.team2Punkte = 16;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(0)).to.be.equal(false);
           
         });
         
         it("isInGestrichenTeam(pos: 1) (team1Punkte = 13 & team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 13;  
            room.team2Punkte = 16;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(1)).to.be.equal(true);
           
         });
         
         it("isInGestrichenTeam(pos: 2) (team1Punkte = 13 & team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 13;  
            room.team2Punkte = 16;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(2)).to.be.equal(false);
           
         });
         
         it("isInGestrichenTeam(pos: 3) (team1Punkte = 13 & team2Punkte = 16 & maxPunkte = " 
            + roomConfig.config.punkte +" )", function(){

            room.team1Punkte = 13;  
            room.team2Punkte = 16;  
            room.maxPoints = 18;    
            expect(room.isInGestrichenTeam(3)).to.be.equal(true);
           
         });
         
    });

    describe("Test team hat nicht gehalten Punkte", function(){

        it("getTeamPunkte(pos: 0)", function(){
            expect(room.getTeamPunkteAbgelehnt(0)).to.be.equal()
        })
        
        it("getTeamPunkte(pos: 1)", function(){
            expect(room.getTeamPunkteAbgelehnt(0)).to.be.equal()
        })
        
        it("getTeamPunkte(pos: 2)", function(){
            expect(room.getTeamPunkteAbgelehnt(0)).to.be.equal()
        })
        
        it("getTeamPunkte(pos: 3)", function(){
            expect(room.getTeamPunkteAbgelehnt(0)).to.be.equal()
        })
    })


    
})