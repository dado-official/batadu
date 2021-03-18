# Batadu Database

## ER-Model
![ER-Model](https://github.com/dado-official/batadu/blob/main/database/ER-Modell.png)

## Relational Model

Warning: In this Model primary Keys are Bold and not underlined, since markdown doesn't support it
- karten {**ID:Integer**; Bezeichnung:String; pfad:String[1024]}
- user {**username:String[15]**; anzStiche:Integer; password:String[256]; Punkte:Integer; Email:String[128]; gewonneneSpiele:Integer; verloreneSpiele:Integer; *Team.ID:Integer*}
- team {**ID:Integer**; punkte:Integer; stichesp1:Integer; stichesp2:Integer; *Spiel.ID:Integer*}
- spiel {**ID:Integer**; name:String[32]; password:String[32]; datum:Date; *Team.ID:Integer*}

## Notes
- The user's password is stored encrypted
- The game's password is stored in plain text and can be only up to 32 characters long, hence the String[32] in the relational model