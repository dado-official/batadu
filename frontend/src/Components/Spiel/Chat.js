import React, { useState, useEffect, forwardRef, useRef } from "react";
import Emoji from "../../assets/insert_emoticon-24px.svg";
import Gif from "../../assets/gif-24px.svg";
import Send from "../../assets/send-24px.svg";
import ChatMessage from "./ChatMessage";
import ChatGif from "./ChatGif";
import ScrollableFeed from "react-scrollable-feed";
import "emoji-mart/css/emoji-mart.css";
import GifPicker from "./GifPicker";
import { Picker } from "emoji-mart";

const Chat = forwardRef(({ isDarkmode, socket, username }, ref) => {
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState([
        {
            message: "Wilkommen im Chat",
            sender: "System",
            type: "text",
            key: Math.random() * 10000,
        },
    ]);
    const [isEmojisOpen, setIsEmojisOpen] = useState(false);
    const emojiPickerRef = useRef();
    const emojiIconRef = useRef();

    const [isGifOpen, setIsGifOpen] = useState(false);
    const gifPickerRef = useRef();
    const gifIconRef = useRef();

    useEffect(() => {
        if (isDarkmode) {
            document
                .getElementsByClassName("emoji-mart-scroll")[0]
                .classList.remove("scrollWhite");
            document
                .getElementsByClassName("emoji-mart-scroll")[0]
                .classList.add("scrollDark");
        } else {
            document
                .getElementsByClassName("emoji-mart-scroll")[0]
                .classList.remove("scrollDark");
            document
                .getElementsByClassName("emoji-mart-scroll")[0]
                .classList.add("scrollWhite");
        }
    }, [isDarkmode]);

    useEffect(() => {
        let handler = (e) => {
            if (
                emojiPickerRef.current &&
                !emojiPickerRef.current.contains(e.target) &&
                !emojiIconRef.current.contains(e.target)
            ) {
                setIsEmojisOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

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
    }, []);

    function inputHandler(e) {
        setChatInput(e.target.value);
    }

    function sendMessage() {
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

    function sendGif(e) {
        let url = e.target.src;
        let chat = { url: url, type: "gif", sender: { username } };
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
            console.log("enter");
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
                    Spiel Chat{" "}
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
                        className={`${
                            isDarkmode ? "scrollDark" : "scrollWhite"
                        }`}
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
                                        key={element.id}
                                    />
                                );
                            }
                        })}
                    </ScrollableFeed>
                </div>
                {/*Emoji picker */}
                <div
                    className={`z-10 w-full absolute pr-8 bottom-20 ${
                        isEmojisOpen ? "block" : "hidden"
                    }`}
                    ref={emojiPickerRef}
                >
                    <Picker
                        onSelect={(emoji) =>
                            setChatInput((prev) => prev + emoji.native)
                        }
                        theme={`${isDarkmode ? "dark" : "light"}`}
                        color={`${isDarkmode ? "#F56B8B" : "#B2163A"}`}
                        title="Emoji Batadú"
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                        }}
                    />
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
                                onClick={isEmojisOpenHandler}
                                className={`cursor-pointer w-2/3 ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                                ref={emojiIconRef}
                            />
                        </div>
                        <div className="bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center">
                            <img
                                src={Gif}
                                alt="Gif"
                                ref={gifIconRef}
                                className={`cursor-pointer w-full ${
                                    !isDarkmode ? "whiteSVG" : null
                                }`}
                                onClick={isGifOpenHandler}
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
