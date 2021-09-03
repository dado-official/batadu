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
        <div className="w-80 shadow-2xl h-96 p-2 gap-1 flex flex-col bg-white border-t-1 border-grayLight2 dark:border-gray-500  dark:bg-roomBlack rounded">
            <input
                type="text"
                value={gifInput}
                placeholder="Suchen Sie einen Gif..."
                onChange={inputHandler}
                className="outline-none transition-all rounded border border-grayLight2 focus:outline-none focus:ring-primaryLight focus:ring-2 pl-3 pr-2 py-2 w-full text-sm dark:bg-chatBlack dark:text-white"
            />
            <div
                className={`flex-1 w-full overflow-auto flex flex-wrap ${
                    isDarkmode ? "scrollDark" : "chat"
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
