import React, { useState, useEffect, forwardRef, useRef } from "react";

import ChatMessage from "./ChatMessage";
import ChatGif from "./ChatGif";
import ScrollableFeed from "react-scrollable-feed";
import GifPicker from "./GifPicker";
import Image from "next/image";

let typingTimeout;

const Chat = forwardRef(
    ({ isDarkmode, socket, username, userPic, userId }, ref) => {
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
                setChatMessages((prev) => [
                    ...prev,
                    {
                        ...chat,
                        hideUsername:
                            prev.length === 0
                                ? false
                                : prev[prev.length - 1].sender.userId ===
                                  chat.sender.userId,
                    },
                ]);
            });

            socket.on("typing", (data) => {
                setCurrentTyping(data);
            });
        }, []);

        function inputHandler(e) {
            if (typing) {
                clearTimeout(typingTimeout);
            } else {
                setTyping(true);
                socket.emit("typing", { user: userPic, typing: true });
            }

            typingTimeout = setTimeout(() => {
                setTyping(false);
                console.log("false");
                socket.emit("typing", { user: userPic, typing: false });
            }, 1000);

            setChatInput(e.target.value);
        }

        function sendMessage() {
            if (chatInput !== "" && chatInput !== " ") {
                if (typing) {
                    clearTimeout(typingTimeout);
                    setTyping(false);
                    socket.emit("typing", { user: userPic, typing: false });
                }

                let chat = {
                    message: chatInput,
                    type: "text",
                    sender: {
                        userPic: userPic,
                        username: username,
                        userId: userId,
                    },
                };
                socket.emit("chat", chat);
                setChatInput("");
            }
        }

        function sendGif(e) {
            let url = e.target.src;
            let chat = {
                url: url,
                type: "gif",
                sender: {
                    userPic: userPic,
                    username: username,
                    userId: userId,
                },
            };
            socket.emit("chat", chat);
            setChatInput("");
            setIsGifOpen(false);
        }
        function onKeyDownHandler(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        }

        function isGifOpenHandler() {
            setIsGifOpen((prev) => !prev);
        }

        return (
            <div
                ref={ref}
                className="relative overflow-y-auto flex flex-col flex-1 border-t-1 bg-white border-grayLight2"
            >
                <div className="relative dark:bg-roomBlack">
                    <p
                        className={`text-center font-medium py-3 px-4 cursor-pointer text-primary dark:text-primaryDark`}
                    >
                        Spiel Chat
                    </p>
                    <div className="bg-primary shadow-md dark:bg-primaryDark z-10 h-1 w-full absolute bottom-0" />{" "}
                </div>
                {/*chat messages */}
                <ScrollableFeed
                    className={`flex flex-1 flex-col gap-1 pl-3 overflow-y-auto pb-1 ${
                        isDarkmode ? "scrollDark" : "chat"
                    }`}
                    forceScroll={true}
                >
                    {chatMessages.map((element, index) => {
                        if (element.type === "text") {
                            return (
                                <ChatMessage
                                    message={element.message}
                                    user={element.sender}
                                    key={Math.random() * 1000}
                                    hideUsername={element.hideUsername}
                                />
                            );
                        } else {
                            return (
                                <ChatGif
                                    url={element.url}
                                    user={element.sender}
                                    key={Math.random() * 1000}
                                    hideUsername={element.hideUsername}
                                />
                            );
                        }
                    })}
                    {currentTyping.length > 0 ? (
                        <p className="text_small flex gap-2">
                            {currentTyping.map((element) => {
                                return (
                                    <div
                                        className={`relative mt-2 h-6 w-6 rounded-full`}
                                    >
                                        {chatMessages.length > 0 &&
                                        chatMessages[chatMessages.length - 1]
                                            .sender.userPic ===
                                            element ? null : (
                                            <Image
                                                src={element}
                                                objectFit="contain"
                                                layout="fill"
                                                className="rounded-full"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                            <div class="flex items-center ml-3">
                                <div class="dot-flashing"></div>
                            </div>
                        </p>
                    ) : null}
                </ScrollableFeed>
                {/*Gif Picker */}
                <div
                    className={`z-10 w-full absolute pr-8 bottom-14 ${
                        isGifOpen ? "block" : "hidden"
                    }`}
                    ref={gifPickerRef}
                >
                    <GifPicker sendHandler={sendGif} isDarkmode={isDarkmode} />
                </div>
                {/*chat input */}
                <div className="w-full relative p-2 border-t border-grayLight2">
                    <input
                        type="text"
                        value={chatInput}
                        placeholder="Schreiben Sie etwas..."
                        onChange={inputHandler}
                        className="outline-none transition-all pr-12 rounded border border-grayLight2 focus:outline-none focus:ring-primaryLight focus:ring-2 pl-3 py-3 w-full text-sm dark:bg-chatBlack dark:text-white"
                        onKeyDown={onKeyDownHandler}
                    />
                    <div className="flex gap-2 absolute right-3 centerY">
                        <div className="bg-grayLight2 dark:bg-secondaryDark rounded h-9 w-9 flex justify-center items-center">
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
                    </div>
                </div>
            </div>
        );
    }
);

export default Chat;
