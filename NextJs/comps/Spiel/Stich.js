import React, { useEffect } from "react";
import Image from "next/image";

const Stich = ({ gewinner, karten, pos, calcPos, cardPhotos }) => {
    useEffect(() => {}, [gewinner]);
    return (
        <div className="bg-white dark:bg-whiteDark relative flex justify-center items-center w-full h-96 xl:h-64 rounded-b-st">
            <div className="h-56 w-56 relative">
                <div
                    className={`absolute rounded-sm w-2.875rem h-5.0975 top-0 left-1/2 border-2 border-transparent  ${
                        calcPos(2 + pos) === gewinner &&
                        " ring-4 ring-primaryLight2 border-primary"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                >
                    <Image
                        src={cardPhotos[karten[calcPos(2 + pos)]]}
                        alt={karten[calcPos(2 + pos)]}
                        title={karten[calcPos(2 + pos)]}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={cardPhotos[karten[calcPos(2 + pos)]]}
                    />
                </div>
                <div
                    className={`absolute rounded-sm w-2.875rem h-5.0975 top-1/2 left-0 border-2 border-transparent  ${
                        calcPos(3 + pos) === gewinner &&
                        " ring-4 ring-primaryLight2 border-primary"
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                >
                    <Image
                        src={cardPhotos[karten[calcPos(3 + pos)]]}
                        alt={karten[calcPos(3 + pos)]}
                        title={karten[calcPos(3 + pos)]}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={cardPhotos[karten[calcPos(3 + pos)]]}
                    />
                </div>
                <div
                    className={`absolute rounded-sm w-2.875rem h-5.0975 top-1/2 right-0 border-2 border-transparent  ${
                        calcPos(1 + pos) === gewinner &&
                        " ring-4 ring-primaryLight2 border-primary"
                    }`}
                    style={{ transform: "translateY(-50%)" }}
                >
                    <Image
                        src={cardPhotos[karten[calcPos(1 + pos)]]}
                        alt={karten[calcPos(1 + pos)]}
                        title={karten[calcPos(1 + pos)]}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={cardPhotos[karten[calcPos(1 + pos)]]}
                    />
                </div>
                <div
                    className={`absolute rounded-sm w-2.875rem h-5.0975 left-1/2 bottom-0 border-2 border-transparent  ${
                        calcPos(0 + pos) === gewinner &&
                        " ring-4 ring-primaryLight2 border-primary"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                >
                    <Image
                        src={cardPhotos[karten[calcPos(0 + pos)]]}
                        alt={karten[calcPos(0 + pos)]}
                        title={karten[calcPos(0 + pos)]}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={cardPhotos[karten[calcPos(0 + pos)]]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stich;
