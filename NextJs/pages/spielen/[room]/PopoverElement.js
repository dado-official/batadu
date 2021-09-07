function PopoverElement({
    show,
    yesHandler,
    noHandler,
    yesTitle,
    noTitle,
    children,
}) {
    return (
        <div
            className={`absolute transition-all right-1/2 -mt-1 -top-28 flex justify-center items-center gap-10 bg-white shadow-xl px-8 py-3 rounded-2xl z-10 ${
                show ? "opacity-100" : "opacity-0 hidden"
            }`}
            style={{ transform: "translateX(50%)" }}
        >
            <div className="text-center text-xl text-gray dark:text-black">
                {children}
            </div>
            <div className="flex gap-4 ">
                <p
                    onClick={show && yesHandler}
                    className="cursor-pointer font-medium bg-primary hover:ring-4 hover:ring-primaryLight transition-all rounded-full px-6 py-2 text-white shadow-md"
                >
                    {yesTitle}
                </p>
                <p
                    onClick={show && noHandler}
                    className="cursor-pointer font-medium bg-white rounded-full transition-all hover:ring-4 hover:ring-bgWhite px-6 py-2 text-text shadow-md"
                >
                    {noTitle}
                </p>
            </div>
        </div>
    );
}

export default PopoverElement;
