import React, { useState, useEffect, forwardRef } from "react";
import Emoji from "../../assets/insert_emoticon-24px.svg";
import Gif from "../../assets/gif-24px.svg";
import Send from "../../assets/send-24px.svg";
import ChatMessage from "./ChatMessage";
import ScrollToBottom from "./ScrollToBottom";

const Chat = forwardRef(({ isDarkmode, socket }, ref) => {
    const [chatInput, setChatInput] = useState(null);
    const [chatMessages, setChatMessages] = useState([
        { message: "Wilkommen im Chat", sender: "System" },
    ]);

    useEffect(() => {
        socket.on("chat", (chat) => {
            setChatMessages((prev) => [
                ...prev,
                { message: chat.message, sender: chat.sender },
            ]);
        });
    }, []);

    function inputHandler(e) {
        setChatInput(e.target.value);
    }

    function sendMessage() {
        let chat = { message: chatInput, sender: "Talin" };
        socket.emit("chat", chat);
        setChatMessages((prev) => [
            ...prev,
            { message: chatInput, sender: "Ich" },
        ]);
        setChatInput("");
    }

    function onKeyDownHandler(e) {
        if (e.key === "Enter") {
            console.log("enter");
            sendMessage();
        }
    }

    return (
        <div ref={ref} className="relative flex flex-col h-40rem xl:h-28.25rem">
            {" "}
            <div className="relative bg-spielGray dark:bg-roomBlack rounded-t-st mt-8">
                {" "}
                <p
                    className={`text-left font-bold py-3 px-4 cursor-pointer text-primary dark:text-primaryDark`}
                >
                    {" "}
                    Spiel Chat{" "}
                </p>{" "}
                <div className="bg-primary dark:bg-primaryDark z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5" />{" "}
            </div>{" "}
            <div className="flex flex-col p-4 bg-white dark:bg-whiteDark rounded-b-st justify-between xl:justify-start">
                {/*chat messages */}
                <div
                    className={`flex flex-col gap-2 pr-2 overflow-y-auto mb-2 max-h-chat xl:max-h-17.5rem xl:h-17.5rem ${
                        isDarkmode ? "scrollDark" : "scrollWhite"
                    }`}
                >
                    {chatMessages.map((element) => {
                        return (
                            <ChatMessage
                                message={element.message}
                                sender={element.sender}
                            />
                        );
                    })}
                    <ScrollToBottom />
                </div>
                {/*chat input */}
                <div className=" bg-spielGray dark:bg-chatBlack w-full p-2 x-4 rounded-st flex items-center justify-between">
                    <input
                        type="text"
                        value={chatInput}
                        placeholder="Schreiben Sie etwas..."
                        onChange={inputHandler}
                        className="bg-spielGray focus:outline-none p-2 w-full text-sm dark:bg-chatBlack dark:text-white"
                        onKeyDown={onKeyDownHandler}
                    />
                    <div className="flex gap-2">
                        <div className="bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Emoji}
                                alt="Emoji"
                                className={`cursor-pointer w-2/3 ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                            />
                        </div>
                        <div className="bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Gif}
                                alt="Gif"
                                className={`cursor-pointer w-full ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                            />
                        </div>
                        <div className="bg-primary dark:bg-primaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Send}
                                alt="Send"
                                className={`cursor-pointer w-3/5 ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                                onClick={sendMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Chat;
