import Image from "next/image";

function Container({ img, title, describtion, link }) {
    return (
        <div className="bg-white hover:ring-2 hover:ring-primary h-full mt-0 mb-auto hover:shadow-lg transition-all flex items-center flex-col w-full rounded shadow pt-8">
            <div className="rounded-full p-4 bg-primaryLight">
                <div className="relative h-10 w-10">
                    <Image src={img} layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className="py-4 px-4 mt-4">
                <h5 className="font-medium">{title}</h5>
                <p className="text-text mt-4 mb-2">
                    {describtion}

                    {link && (
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            <br />
                            {link.title}
                        </a>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Container;
