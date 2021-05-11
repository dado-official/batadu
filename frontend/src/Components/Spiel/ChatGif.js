import React from "react";

export default function ChatGif({ sender, url }) {
    return (
        <div className="flex flex-col w-full pr-2">
            <div
                className={`flex w-full ${
                    sender === "Ich" ? "justify-end" : null
                }`}
            >
                <img src={url} alt="gif" className="h-24 rounded-st" />
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
}
