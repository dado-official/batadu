import React from "react";

export default function ChatGif({ sender, url }) {
    return (
        <div className="flex flex-col w-full pr-2">
            <p
                className={`font-bold text-sm py-1 pb-0 dark:text-white ${
                    sender === "Ich"
                        ? "text-blue-500 dark:text-blue-400"
                        : sender === "System"
                        ? "text-primary dark:text-primaryDark"
                        : null
                }`}
            >
                {sender}:{" "}
            </p>
            <div className={`flex w-full`}>
                <img src={url} alt="gif" className="h-24 rounded-md" />
            </div>
        </div>
    );
}
