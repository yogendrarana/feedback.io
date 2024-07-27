interface CalloutProps {
    emoji?: React.ReactNode;
    text?: React.ReactNode;
    children?: React.ReactNode;
}

export default function Callout({ emoji = null, text = null, children }: CalloutProps) {
    return (
        <div className="bg-gray-200 dark:bg-[#333] dark:text-gray-300 flex items-start p-3 my-6 text-base">
            <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
            <span className="block grow">{text ?? children}</span>
        </div>
    );
}