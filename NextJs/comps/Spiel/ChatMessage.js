import React from "react";

const ChatMessage = ({ message, sender }) => {
    return (
        <div className="flex flex-col w-full pr-2">
            <div className={`flex w-full`}>
                <p
                    className={`text-sm py-1 dark:text-white font-bold ${
                        sender === "Ich"
                            ? "text-blue-500 dark:text-blue-400"
                            : sender === "System"
                            ? "text-primary dark:text-primaryDark"
                            : null
                    }`}
                >
                    {sender}:{" "}
                    <span
                        className={`text-sm font-normal break-all text-black w-max-content w-max-full rounded-st break-words  ${
                            sender === "System"
                                ? "dark:text-white text-black"
                                : "dark:text-white"
                        }`}
                    >
                        {message}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ChatMessage;
