import React from "react";

export default function UserStatus({ name, status, isMe }) {
    function getStatusString(status) {
        if (status === "Schlag") {
            return `${isMe ? "musst" : "muss"} Schlag ansagen 🗣️`;
        } else if (status === "Trumpf") {
            return `${isMe ? "musst" : "muss"} Trumpf ansagen 🗣️`;
        } else if (status === "Am Zug") {
            return `${isMe ? "bist" : "ist"} am Zug 🚂`;
        } else if (status === "Geboten Antwort") {
            return `${isMe ? "musst" : "muss"} halten oder gehen 🏃`;
        } else if (status === "Gestochen🏆") {
            return `${isMe ? "hast" : "hat"} gestochen 🐝`;
        } else if (status === "Schönere Antwort") {
            return `${isMe ? "wurdest" : "wurde"} nach Schönere gefragt 🤔`;
        } else if (status === "Schlagtausch Antwort") {
            return `${isMe ? "wurdest" : "wurde"} nach Schlagtausch gefragt 🤔`;
        }
    }

    return (
        <div
            className={`flex gap-2 items-center ${
                isMe && "text-primary dark:text-primaryDark"
            }`}
        >
            <p className="">
                <span className="font-bold">{isMe ? "Du" : name}</span>{" "}
                {getStatusString(status)}
            </p>
        </div>
    );
}
