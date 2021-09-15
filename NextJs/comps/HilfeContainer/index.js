import Image from "next/image";

function HilfeContainer({ title, description, img, link, buttonName }) {
    return (
        <div className="h-full flex flex-col justify-between bg-white border-2 border-transparent hover:border-primary p-8 rounded shadow hover:shadow-md transition-all">
            <div>
                <h4 className="font-medium">{title}</h4>
                <p className="mt-4 text-text">{description}</p>
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="w-full shadow hover:shadow-lg transition-all bg-primary rounded text-white py-2 text-xl mt-8 flex items-center justify-center gap-4">
                    <div className="relative w-6 h-6">
                        <Image src={img} layout="fill" objectFit="contain" />
                    </div>
                    {buttonName}
                </button>
            </a>
        </div>
    );
}

export default HilfeContainer;
