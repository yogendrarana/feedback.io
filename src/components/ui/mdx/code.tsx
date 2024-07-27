import { cn } from "@/lib/utils";

interface CodePropType {
    children: React.ReactNode | string;
    className?: string;
}

export default function Code({ children, className }: CodePropType) {
    return (
        <code
            className={cn(
                className,
                "bg-white [p_&]:text-sm [p_&]:px-1 [p_&]:py-0.5 [p_&]:rounded-sm [p_&]:bg-gray-200 dark:[p_&]:bg-[#333]"
            )}
        >
            {children}
        </code>
    );
};