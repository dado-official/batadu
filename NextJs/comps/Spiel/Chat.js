import React, { useState, useEffect, forwardRef, useRef } from "react";

import ChatMessage from "./ChatMessage";
import ChatGif from "./ChatGif";
import ScrollableFeed from "react-scrollable-feed";
import GifPicker from "./GifPicker";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

let typingTimeout;

const Chat = forwardRef(({ isDarkmode, socket, username }, ref) => {
    const [chatInput, setChatInput] = useState("");
    const [currentTyping, setCurrentTyping] = useState([]);
    const [typing, setTyping] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);

    const [isGifOpen, setIsGifOpen] = useState(false);
    const gifPickerRef = useRef();
    const gifIconRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (
                gifPickerRef.current &&
                !gifPickerRef.current.contains(e.target) &&
                !gifIconRef.current.contains(e.target)
            ) {
                setIsGifOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    useEffect(() => {
        socket.on("chat", (chat) => {
            setChatMessages((prev) => [...prev, chat]);
        });

        socket.on("typing", (data) => {
            const index = data.indexOf(username);
            if (index > -1) {
                data.splice(index, 1);
            }
            setCurrentTyping(data);
        });
    }, []);

    function inputHandler(e) {
        if (typing) {
            clearTimeout(typingTimeout);
        } else {
            setTyping(true);
            socket.emit("typing", { username: username, typing: true });
        }

        typingTimeout = setTimeout(() => {
            setTyping(false);
            console.log("false");
            socket.emit("typing", { username: username, typing: false });
        }, 1000);

        setChatInput(e.target.value);
    }

    function sendMessage() {
        if (chatInput !== "" && chatInput !== " ") {
            if (typing) {
                clearTimeout(typingTimeout);
                setTyping(false);
                socket.emit("typing", { username: username, typing: false });
            }

            let chat = {
                message: chatInput,
                type: "text",
                sender: username,
            };
            socket.emit("chat", chat);
            setChatMessages((prev) => [
                ...prev,
                {
                    message: chatInput,
                    sender: "Ich",
                    type: "text",
                },
            ]);
            setChatInput("");
        }
    }

    function sendGif(e) {
        let url = e.target.src;
        let chat = { url: url, type: "gif", sender: username };
        socket.emit("chat", chat);
        setChatMessages((prev) => [
            ...prev,
            { url: url, sender: "Ich", type: "gif" },
        ]);
        setChatInput("");
        setIsGifOpen(false);
    }
    function onKeyDownHandler(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    }

    function isEmojisOpenHandler() {
        setIsEmojisOpen((prev) => !prev);
    }

    function isGifOpenHandler() {
        setIsGifOpen((prev) => !prev);
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
                    Spiel Chat
                </p>{" "}
                <div className="bg-primary dark:bg-primaryDark z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5" />{" "}
            </div>{" "}
            <div className="flex relative flex-col p-4 bg-white dark:bg-whiteDark rounded-b-st justify-between xl:justify-start">
                {/*chat messages */}
                <div
                    className={`flex flex-col gap-2 pr-2 overflow-y-auto mb-2 max-h-chat xl:max-h-17.5rem xl:h-17.5rem ${
                        isDarkmode ? "scrollDark" : "scrollWhite"
                    }`}
                >
                    <ScrollableFeed
                        className={`flex flex-col gap-1 ${
                            isDarkmode ? "scrollDark" : "scrollWhite"
                        }`}
                        forceScroll={true}
                    >
                        {chatMessages.map((element) => {
                            if (element.type === "text") {
                                return (
                                    <ChatMessage
                                        message={element.message}
                                        sender={element.sender}
                                        key={Math.random() * 1000}
                                    />
                                );
                            } else {
                                return (
                                    <ChatGif
                                        url={element.url}
                                        sender={element.sender}
                                        key={Math.random() * 1000}
                                    />
                                );
                            }
                        })}
                        {currentTyping.length > 0 ? (
                            <p className="text-sm dark:text-yellow-400 text-yellow-500">
                                <span className="font-bold">
                                    {currentTyping.toString()}
                                </span>{" "}
                                {currentTyping.length > 1
                                    ? "schreiben..."
                                    : "schreibt..."}
                            </p>
                        ) : null}
                    </ScrollableFeed>
                </div>
                {/*Gif Picker */}
                <div
                    className={`z-10 w-full absolute pr-8 bottom-20 ${
                        isGifOpen ? "block" : "hidden"
                    }`}
                    ref={gifPickerRef}
                >
                    <GifPicker sendHandler={sendGif} isDarkmode={isDarkmode} />
                </div>
                {/*chat input */}
                <div className="w-full relative">
                    <input
                        type="text"
                        value={chatInput}
                        placeholder="Schreiben Sie etwas..."
                        onChange={inputHandler}
                        className="bg-spielGray outline-none transition-all pr-24 rounded-st border-2 border-gray focus:outline-none focus:border-primary focus:ring-primaryLight focus:ring-4  pl-4 py-4 w-full text-sm dark:bg-chatBlack dark:text-white"
                        onKeyDown={onKeyDownHandler}
                    />
                    <div className="flex gap-2 absolute right-2 centerY">
                        <div className="bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={"/gif-24px.svg"}
                                alt="Gif"
                                ref={gifIconRef}
                                className={`cursor-pointer w-full ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                                onClick={isGifOpenHandler}
                            />
                        </div>
                        <div className="bg-primary dark:bg-primaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <PaperAirplaneIcon
                                className="h-5 transform rotate-90 text-white"
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
