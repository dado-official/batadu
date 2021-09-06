import Image from "next/image";

function ProfilePicture({ imgSrc, level, size, selected }) {
    return (
        <div
            className={`relative border-2 border-white rounded-full shadow-lg`}
            style={{ height: `${size}px`, width: `${size}px` }}
        >
            <Image
                src={imgSrc}
                layout="fill"
                objectFit="contain"
                className="rounded-full bg-white"
            />
            <div
                className={`bg-white absolute opacity-0 border-2 border-white h-full w-full rounded-full ${
                    !selected && "opacity-50"
                } transition-all`}
            ></div>
            <div className="w-7 h-7 shadow-lg rounded-full absolute right-0 bottom-0 bg-text">
                <div className="relative w-full h-full">
                    <p className="centerAbsolute absolute text-white font-medium">
                        5
                    </p>
                </div>
            </div>
            <div
                className={`${
                    !selected &&
                    "w-7 h-7 bg-white opacity-50 rounded-full absolute right-0 bottom-0"
                } transition-all`}
            ></div>
        </div>
    );
}

export default ProfilePicture;
