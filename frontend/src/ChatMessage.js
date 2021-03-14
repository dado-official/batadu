import React from "react";

const ChatMessage = ({ message, sender }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <p className="bg-spielGray text-sm w-auto py-2 px-4 rounded-st">
                    {message}
                </p>
            </div>
            <p className="font-bold text-xs py-1">{sender}</p>
        </div>
    );
};

export default ChatMessage;
