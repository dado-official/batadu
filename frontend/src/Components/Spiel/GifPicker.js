import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GifPicker({ isDarkmode, sendHandler }) {
    const [gifInput, setGifInput] = useState("");
    const [gifs, setGifs] = useState([]);

    function inputHandler(e) {
        setGifInput(e.target.value);
        //Suchen
    }

    useEffect(() => {
        if (gifInput !== "") {
            let cancel;
            axios({
                method: "GET",
                url: `https://g.tenor.com/v1/search?q=${gifInput}&key=SL1KD4EPL166`,
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            }).then((res) => {
                console.log(res.data);
                setGifs(
                    res.data.results.map((element) => {
                        return element.media[0].tinygif.url;
                    })
                );
            });
            return () => cancel();
        }
    }, [gifInput]);

    function sendGif(e) {
        setGifInput("");
        sendHandler(e);
        trendGifs();
    }

    useEffect(() => {
        trendGifs();
    }, []);

    function trendGifs() {
        axios({
            method: "GET",
            url: "https://g.tenor.com/v1/trending?key=SL1KD4EPL166",
        }).then((res) => {
            setGifs(
                res.data.results.map((element) => {
                    return element.media[0].tinygif.url;
                })
            );
        });
    }

    return (
        <div className="w-full h-96 p-3 gap-1 flex flex-col bg-white dark:border-gray-500 border-gray-300 border-1 dark:bg-roomBlack rounded-st">
            <input
                type="text"
                value={gifInput}
                placeholder="Suchen Sie einen Gif..."
                onChange={inputHandler}
                className="rounded-st focus:outline-none p-2 w-full text-sm dark:bg-chatBlack bg-spielGray dark:text-white"
            />
            <div
                className={`flex-1 w-full overflow-auto flex flex-wrap ${
                    isDarkmode ? "scrollDark" : "scrollWhite"
                }`}
            >
                <div className="w-1/2">
                    {[
                        gifs.map((element, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <img
                                        src={element}
                                        alt=""
                                        className="p-1 w-full h-auto self-center cursor-pointer"
                                        onClick={sendGif}
                                    />
                                );
                            }
                        }),
                    ]}
                </div>
                <div className="w-1/2">
                    {[
                        gifs.map((element, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <img
                                        src={element}
                                        alt=""
                                        className="p-1 w-full h-auto self-center cursor-pointer"
                                        onClick={sendGif}
                                    />
                                );
                            }
                        }),
                    ]}
                </div>
            </div>
        </div>
    );
}
