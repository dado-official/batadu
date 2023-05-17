import React from "react";
import UserStatus from "./UserStatus";

export default function ({ users, status, pos }) {
    function containsNull(arr) {
        return arr.indexOf(null) >= 0;
    }
    function countUsers(arr) {
        let i = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j]) i++;
        }
        return i;
    }

    console.log(users);
    return (
        <div
            className="absolute bottom-0 xl:top-0 left-0 dark:text-white"
            style={{ height: "min-content" }}
        >
            {users.length < 4 || containsNull(users) ? (
                <p>
                    Warte auf Spieler{" "}
                    <span className="font-medium text-text">
                        {countUsers(users)}/4
                    </span>
                </p>
            ) : null}
            {status.map((element, index) => {
                if (element && users[index]) {
                    return (
                        <UserStatus
                            name={users[index]}
                            status={element}
                            isMe={pos === index}
                        />
                    );
                }
            })}
        </div>
    );
}
