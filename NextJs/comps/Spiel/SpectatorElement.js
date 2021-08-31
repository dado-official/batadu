import Image from "next/image";
function SpectatorElement({ data }) {
    return (
        <div className="flex items-center gap-2 mt-1">
            <div className="h-5 w-5 relative rounded-full">
                <Image
                    src={data.userPic}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                />{" "}
            </div>
            <p className="text-gray text_small">{data.username}</p>
        </div>
    );
}

export default SpectatorElement;
