export default function StatusContainer({ status }) {
    return (
        <p className="text_small shadow-md w-max rounded px-2 text-white bg-primary dark:text-black">
            {status}
        </p>
    );
}
