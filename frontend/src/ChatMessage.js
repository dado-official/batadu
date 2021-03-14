import React from "react";

const ChatMessage = ({ message, sender }) => {
    return (
        <div className="flex flex-col ">
            <div className={`flex ${sender === "Ich" ? "justify-end" : null}`}>
                <p
                    className={`text-sm w-auto py-2 px-4 rounded-st ${
                        sender === "System"
                            ? "text-white bg-primary"
                            : "bg-spielGray"
                    }`}
                >
                    {message}
                </p>
            </div>
            <p
                className={`font-bold text-xs py-1 ${
                    sender === "Ich"
                        ? "flex justify-end"
                        : sender === "System"
                        ? "text-primary"
                        : null
                }`}
            >
                {sender}
            </p>
        </div>
    );
};

export default ChatMessage;
