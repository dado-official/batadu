import { signIn } from "next-auth/client";
import Image from "next/image";

function Provider({ provider, isDarkmode }) {
    return (
        <button
            className={`border relative py-1.5 border-grayLight2 dark:border-spielGray dark:text-white rounded hover:bg-white dark:hover:bg-black hover:shadow-xl
             shadow-md dark:shadow-mdDark dark:hover:shadow-xlDark transition-all`}
            onClick={() => signIn(provider.id)}
        >
            <div className="absolute left-4 centerY" style={{ height: "24px" }}>
                <Image
                    src={`/${provider.name}.svg`}
                    height="24"
                    width="24"
                    className={`${
                        isDarkmode && provider.name == "GitHub"
                            ? "whiteSVG"
                            : ""
                    }`}
                />
            </div>

            <p>{provider.name}</p>
        </button>
    );
}

export default Provider;
