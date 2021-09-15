import Link from "next/link";
import Image from "next/image";
function ProfileElement({ session, level }) {
    return (
        <li className="flex h-20 cursor-pointer text-gray mt-auto hover:text-whiteDark transition-all">
            <Link href={`/profil/${session.userId}`}>
                <div className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full mx-6">
                        <Image
                            src={session.user.image}
                            layout="fill"
                            className="rounded-full"
                            objectFit="contain"
                        />
                    </div>
                    <div>
                        <p className="dark:text-white hidden">
                            {session.user.name}
                        </p>
                        <p className="text_small hidden -mt-1">Level {level}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default ProfileElement;
