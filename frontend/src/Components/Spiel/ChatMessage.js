import React from "react";

const ChatMessage = ({ message, sender }) => {
    return (
        <div className="flex flex-col w-full pr-2">
            <div
                className={`flex w-full ${
                    sender === "Ich" ? "justify-end" : null
                }`}
            >
                <p
                    className={`text-sm w-max-content w-max-full py-2 px-4 rounded-st break-words  ${
                        sender === "System"
                            ? "text-white dark:text-black bg-primary dark:bg-primaryDark"
                            : "bg-spielGray dark:bg-chatBlack dark:text-white"
                    }`}
                >
                    {message}
                </p>
            </div>
            <p
                className={`font-bold text-xs py-1 dark:text-white ${
                    sender === "Ich"
                        ? "flex justify-end"
                        : sender === "System"
                        ? "text-primary dark:text-primaryDark"
                        : null
                }`}
            >
                {sender}
            </p>
        </div>
    );
};

export default ChatMessage;
