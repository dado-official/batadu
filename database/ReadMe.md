# Batadu Database and REST-API

## Database
### ER-Model
![ER-Model](https://github.com/dado-official/batadu/blob/main/database/ER-Model.jpg)

### Relational Model

Warning: In this Model primary Keys are Bold and not underlined, since markdown doesn't support it
- karten {**ID:Integer**; Bezeichnung:String; pfad:String[1024]}
- spiel {**ID:Integer**; name:String[32]; password:String[32]; datum:Date}
- team {**ID:Integer**; punkte:Integer; stichesp1:Integer; stichesp2:Integer; *Spiel.ID:Integer*}
- user {**username:String[15]**; anzStiche:Integer; password:String[256]; Punkte:Integer; Email:String[128]; gewonneneSpiele:Integer; verloreneSpiele:Integer}
- gewinner {**_team.ID:Integer; spiel.ID:Integer_**}
- spielen_in {**_user.username:String[15]; team.ID:Integer_**}
- level {**nr:Integer**; erforderlichepunkte:Integer}

### Notes
- The user's password is stored encrypted
- The game's password is stored in plain text and can be only up to 32 characters long, hence the String[32] in the relational model

## REST-API
This REST-API makes the needed Queries to correctly store the game's data. 
**Warning**: 
- All methods don't check if a user exists or not, for now it could be implemented clientside, although a future version of the API could support it too.
- It's important to check the returned codes, since errors are often returned just as a code. The most common are (400, 401, 500). In case of success, the methods all return a status code _200_

### Get all information about a user
With a GET-REquest on the address _<domain>/user_ you can get all information about a specific username which is passed via .JSON in the following format:
```json
{
	"username": "mysuername"
}
```
This Method returns data in JSON-Format, which is formatted like this:
```json
[
  {
    "username": "myusername",
    "password": "hashedPassword",
    "email": "myemail",
    "anzstiche": 9,
    "punkte": 40,
    "gewonnenespiele": 2,
    "verlorenespiele": 0
  }
]
```

### Get all user's past games
This Method, callable via GET on _<domain>/user/games_, returns all the various games a user played. Like the method before, the username is passed via .JSON in the following way:
```json
{
	"username": "mysuername"
}
```
The data is returned in this format:
```json
[
  {
    "gameid": "27",
    "gamedate": "2021-03-27T23:00:00.000Z",
    "mystiche": null/<number>,
    "amiawinner": false,
    "wonpoints": 5,
    "teams": {
      "myteampoints": 18,
      "otherteampoints": 2
    }
  },
  {...}
]
```
**Warning**: All dates will have the same time, because only the date and not the time is stored in the database!

### Get user's stats
A GET-call on _<domain>/user/stats_ returns useful player's stats, like winrate, lost and won games and many more. The username needed to make the call is passed via .JSON in the following format: 
```json
{
	"username": "mysuername"
}
```
The returned data is formatted in .JSON like the example below: 
```json
{
  "anzstiche": 13,
  "punkte": 40,
  "gewonnenespiele": 2,
  "verlorenespiele": 0,
  "sticheprospiel": 6.5,
  "winrate": 100
}
```
**Warning:** The winrate is in percent, rounded to two decimals; The _sticheprospiel_-Parameter is also rounded to two decimals

### Get a Level from points
This GET-Method callable on _<domain>/level_ returns a level and its successor based on the amount of points passed via .JSON in the following format: 
```json
{
	"points": 800
}
```
The returned Data is also coded in .JSON in the following way: 
```json
{
  "punkte": 800,
  "currentlevel": {
    "nr": 10,
    "erforderlichepunkte": 740
  },
  "nextlevel": {
    "nr": 11,
    "erforderlichepunkte": 870
  }
}
```

### Get a user's level via its username
You can get the User's current and next level via a GET-Request on _/user/level_ passing the username via .JSON in the following format:
```json
{
	"username": "mysuername"
}
```
The data is returned in .JSON-Format and its structure looks like this: 
```json
{
  "username": "myusername",
  "punkte": 40,
  "currentlevel": {
    "nr": 1,
    "erforderlichepunkte": 20
  },
  "nextlevel": {
    "nr": 2,
    "erforderlichepunkte": 60
  }
}
```

### Log In
This function, callable via _/user/login_ retrieves a user's password from the database, and checks if it's the same as the one which is passed via .JSON in the following format:
```json
{
  "username": "myusername",
  "password": "myhashvalue"
}
```
At the end of the process, the function returns the following, with status "OK" or "FAILED", depending if the login process succeeded or not:
```json
{
  "username": "therealdanjo",
  "login": "OK"
}
```

### Get the rankings of the various users
This method returns the best players (Default order: Points) up to a certain point in the list, or simply all players. 
To return all players, you just need to call _/rankings_, and a .JSON in the following format will be returned: 
```json
[
  {
    "username": "myusername",
    "winrate": null,
    "wongames": 0,
    "points": 0
  },
  {
    "username": "myusername2",
    "winrate": null,
    "wongames": 0,
    "points": 0
  },
  {...}
]
```
If you, on the other hand, want to return a certain number of players, you need to pass a .JSON like the following in your request:
```json
{
  "limit": 2
}
```
The results will be formatted like on a limitless request, only that you will have the exact number of users you wanted.
<br><br>**Warning**: The winrate is automatically converted in % and rounded to two decimals! 

### Check if a username and email is taken
To check if a email and username exist in the database you will need to send a .JSON in the following format to _/user/check_
```json
{
  "username": "myusername",
  "email": "myemail"
}
```
As a response you will get Code _200_ if both are free, otherwise you will get code _409_ and a .JSON in the following format, where "taken" describes what is currently available or not.
```json
{
  "taken": "both"
}
```
<br>The "taken"-codes are these: 
- "taken": "both" --> Both username and Email are already taken and not available anymore
- "taken": "username" --> The username is taken, the passed email is still available
- "taken": "email" --> The email is taken, the passed username is still available
### Register a user
When registering a user, to save its data you will need to send a .JSON via POST-Method to _/register_ in the following format: 
```json
{
  "username": "myusername",
  "password": "myhashvalue",
  "email": "myemail"
}
```
This method returns only a status code, _200_ if the user was created successfully, _400_ if there was an error, or the username or email already exists.

### Save a game's data
To save the game's data, you need to make a POST-request on _/game/results_ and send a .JSON in the following format: 
```json
{
  "spielname": "gamename",
  "spielpassword": "gamepassword",
  "team1punkte": 18,
  "team1stichespieler1": 9,
  "team1stichespieler2": 10,
  "team2punkte": 2,
  "team2stichespieler1": 3,
  "team2stichespieler2": 0,
  "gewinnerteam": 1,
  "team1user1": "myuser1",
  "team1user2": "myuser2",
  "team2user1": "myuser3",
  "team2user2": "myuser4"
}
```
If the POST was successful, the following .JSON with code _200_ will be returned. In case of an error, code _400_ will be returned without a body.
```json
{
  "spielname": "gamename",
  "spielpassword": "gamepassword",
  "team1punkte": 18,
  "team1stichespieler1": 9,
  "team1stichespieler2": 10,
  "team2punkte": 2,
  "team2stichespieler1": 3,
  "team2stichespieler2": 0,
  "gewinnerteam": 1,
  "team1user1": "myuser1",
  "team1user2": "myuser2",
  "team2user1": "myuser3",
  "team2user2": "myuser4"
}
```
**Warning:** This method is the only one which checks if a user exists, otherwise the whole API stops!

### Get cards URL:
To get a card's URL you need to make a GET-request at _/cards_ with a .JSON specifiing the name of the card:
```json
{
  "name": "Herz Ass"
}
```
The returned value will be also coded in .JSON and look like this:
```json
{
  "bezeichnung": "Herz Ass",
  "pfad": "myurl"
}
```
**Warning:** This method is untested!!
