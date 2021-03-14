import React from "react";
import Emoji from "./assets/insert_emoticon-24px.svg";
import Gif from "./assets/gif-24px.svg";
import Send from "./assets/send-24px.svg";
import ChatMessage from "./ChatMessage";

const Chat = () => {
    return (
        <div className="relative flex-1 flex flex-col">
            {" "}
            <div className="relative bg-spielGray rounded-t-st mt-8">
                {" "}
                <p
                    className={` text-left font-bold py-3 px-4 cursor-pointer text-primary`}
                >
                    {" "}
                    Spiel Chat{" "}
                </p>{" "}
                <div className="bg-primary z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5" />{" "}
            </div>{" "}
            <div className="flex-1 flex p-4 bg-white rounded-b-st">
                {/*chat messages */}
                <div className="flex-1 flex flex-col gap-2 max-h-chat overflow-y-auto">
                    <ChatMessage message="Isi win es hirten" sender="Frangio" />
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
                        className="bg-spielGray focus:outline-none p-2 flex-1 text-sm"
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
