import Link from "next/link";
import Image from "next/image";
function ProfileElement({ session }) {
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
                    <p className="dark:text-white hidden">
                        {session.user.name}
                    </p>
                </div>
            </Link>
        </li>
    );
}

export default ProfileElement;
