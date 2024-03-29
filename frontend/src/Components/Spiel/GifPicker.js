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
        //search
        if (gifInput !== "") {
            let cancel;
            axios({
                method: "GET",
                url: `https://g.tenor.com/v1/search?q=${gifInput}&key=SL1KD4EPL166`,
                withCredentials: false,
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            }).then((res) => {
                setGifs(
                    res.data.results.map((element) => {
                        return {
                            url: element.media[0].tinygif.url,
                            key: element.id,
                        };
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
            withCredentials: false,
        }).then((res) => {
            setGifs(
                res.data.results.map((element) => {
                    return {
                        url: element.media[0].tinygif.url,
                        key: element.id,
                    };
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
                                        src={element.url}
                                        alt=""
                                        className="p-1 w-full h-auto self-center cursor-pointer"
                                        onClick={sendGif}
                                        key={element.key}
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
                                        src={element.url}
                                        alt=""
                                        className="p-1 w-full h-auto self-center cursor-pointer"
                                        onClick={sendGif}
                                        key={element.key}
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
