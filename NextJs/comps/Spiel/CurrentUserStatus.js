import UserStatus from "./UserStatus";

function CurrentUserStatus({ users, status, pos }) {
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
    return (
        <div className="absolute centerX -bottom-44 mb-4 flex flex-col justify-center items-center">
            {users.length < 4 || containsNull(users) ? (
                <p className="text-gray">
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
                            imgUrl={users[index].userPic}
                            name={users[index].username}
                            status={element}
                            isMe={pos === index}
                        />
                    );
                }
            })}
        </div>
    );
}

export default CurrentUserStatus;
