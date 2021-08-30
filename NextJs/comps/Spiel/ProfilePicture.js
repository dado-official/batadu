import Image from "next/image";

function ProfilePicture({ imgSrc, level, size }) {
    return (
        <div
            className="relative border-2 border-white rounded-full shadow-lg"
            style={{ height: `${size}px`, width: `${size}px` }}
        >
            <Image
                src={imgSrc}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
            />
            <div className="w-7 h-7 shadow-lg rounded-full absolute right-0 bottom-0 bg-blue-500">
                <div className="relative w-full h-full">
                    <p className="centerAbsolute absolute text-white">5</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;
