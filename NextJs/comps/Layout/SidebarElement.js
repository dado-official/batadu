import Link from "next/link";

function SidebarElement({ href, children, title, active }) {
    return (
        <li
            className={`flex h-20 relative cursor-pointer  transition-all ${
                active
                    ? "text-primary"
                    : "text-grayLight2 hover:bg-primaryLight hover:text-logoGray"
            }`}
        >
            <Link href={href}>
                <div className="flex items-center">
                    {children}
                    <p className="hidden font-medium">{title}</p>
                </div>
            </Link>
            {active && (
                <div className="absolute right-0 top-0 h-full w-1 bg-primary rounded-full"></div>
            )}
        </li>
    );
}

export default SidebarElement;
