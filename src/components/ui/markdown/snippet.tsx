import { cn } from "@/lib/utils";
import Caption from "./caption";

interface SnippetPropType {
    children: React.ReactNode;
    scroll?: boolean;
    caption?: React.ReactNode;
}

export default function Snippet({ children, scroll = true, caption = null }: SnippetPropType) {
    return (
        <div className="my-6">
            <pre
                className={cn(
                    "p-4 text-sm bg-gray-800 text-white dark:bg-[#222] dark:text-gray-300",
                    scroll ? "overflow-scroll" : "whitespace-pre-wrap break-all overflow-hidden"
                )}
            >
                <code>{children}</code>
            </pre>

            {caption != null ? <Caption>{caption}</Caption> : null}
        </div>
    )
}