import React, { useState, useEffect } from "react";
import Emoji from "./assets/insert_emoticon-24px.svg";
import Gif from "./assets/gif-24px.svg";
import Send from "./assets/send-24px.svg";
import ChatMessage from "./ChatMessage";

const Chat = () => {
    const [chatInput, setChatInput] = useState(null);

    function inputHandler(e) {
        setChatInput(e.target.value);
    }

    function sendMessage() {
        //send Message
    }

    function onKeyDownHandler(e) {
        if (e.key === "Enter") {
            console.log("enter");
            sendMessage();
        }
    }

    return (
        <div className="relative flex flex-col" style={{ height: "28.2.5rem" }}>
            {" "}
            <div className="relative bg-spielGray rounded-t-st mt-8">
                {" "}
                <p
                    className={`text-left font-bold py-3 px-4 cursor-pointer text-primary`}
                >
                    {" "}
                    Spiel Chat{" "}
                </p>{" "}
                <div className="bg-primary z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5" />{" "}
            </div>{" "}
            <div className="flex p-4 bg-white rounded-b-st">
                {/*chat messages */}
                <div
                    className="flex-1 flex flex-col gap-2  pr-2 overflow-y-auto max-h-chat"
                    style={{ height: "21.4rem" }}
                >
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
                    <ChatMessage message="Isi win es hirten" sender="Ich" />
                    <ChatMessage message="Du bist am Zug" sender="System" />
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
                </div>
                {/*chat input */}
                <div
                    className="absolute bottom-4 bg-spielGray p-2 x-4 rounded-st flex items-center justify-between gap-2"
                    style={{ width: "calc(100% - 2rem)" }}
                >
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Schreiben Sie etwas..."
                        onChange={inputHandler}
                        className="bg-spielGray focus:outline-none p-2 flex-1 text-sm"
                        onKeyDown={onKeyDownHandler}
                    />
                    <div className="flex gap-2">
                        <div className="bg-secondary rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Emoji}
                                alt="Emoji"
                                className="whiteSVG cursor-pointer w-2/3"
                            />
                        </div>
                        <div className="bg-secondary rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Gif}
                                alt="Gif"
                                className="whiteSVG w-full cursor-pointer"
                            />
                        </div>
                        <div className="bg-primary rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Send}
                                alt="Send"
                                className="whiteSVG cursor-pointer w-3/5"
                                onClick={sendMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
