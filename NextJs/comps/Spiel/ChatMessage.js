import React, { Fragment } from "react";
import Image from "next/image";

const ChatMessage = ({ message, user, hideUsername }) => {
    return (
        <div
            className={`flex w-full pr-2 gap-2 ${
                hideUsername ? "-mt-1" : "mt-2"
            }`}
        >
            <div className="relative h-6 w-6 min-w-0 flex-none">
                {!hideUsername && (
                    <Image
                        src={user.userPic}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                    />
                )}
            </div>
            <p className="text-gray text_small break-all w-max-content w-max-full break-words">
                {!hideUsername && (
                    <Fragment>
                        <span className="text-black font-medium">
                            {user.username}
                        </span>
                        <br />
                    </Fragment>
                )}
                {message}
            </p>
        </div>
    );
};

export default ChatMessage;
