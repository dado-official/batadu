import Image from "next/image";

function UserStatus({ imgUrl, name, status, isMe }) {
    function getStatusString(status) {
        if (status === "Schlag") {
            return `${isMe ? "musst" : "muss"} Schlag ansagen.`;
        } else if (status === "Trumpf") {
            return `${isMe ? "musst" : "muss"} Trumpf ansagen.`;
        } else if (status === "Am Zug") {
            return `${isMe ? "bist" : "ist"} am Zug.`;
        } else if (status === "Geboten Antwort") {
            return `${isMe ? "musst" : "muss"} muss halten oder gehen.`;
        } else if (status === "Gestochen🏆") {
            return `${isMe ? "hast" : "hat"} gestochen.`;
        } else if (status === "Schönere Antwort") {
            return `${isMe ? "wurdest" : "wurde"} nach Schönere gefragt.`;
        } else if (status === "Schlagtausch Antwort") {
            return `${isMe ? "wurdest" : "wurde"} nach Schlagtausch gefragt.`;
        }
    }

    return (
        <div
            className={`flex gap-2 items-center py-1 ${
                isMe && "bg-white bg-opacity-70 px-2 rounded-full shadow"
            }`}
        >
            <div className="relative h-6 w-6 rounded-full">
                <Image
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                    src={imgUrl}
                />
            </div>
            <p className="text-gray">
                <span className="font-medium text-text">
                    {isMe ? "Du" : name}
                </span>{" "}
                {getStatusString(status)}
            </p>
        </div>
    );
}

export default UserStatus;
