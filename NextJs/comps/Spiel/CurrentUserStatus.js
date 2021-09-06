import UserStatus from "./UserStatus";

function CurrentUserStatus({ users, status, pos }) {
    return (
        <div className="absolute centerX -bottom-44 flex flex-col justify-center items-center">
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
