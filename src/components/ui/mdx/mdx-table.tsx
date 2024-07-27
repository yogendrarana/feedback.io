interface MdxTablePropType {
    children: React.ReactNode;
}

export default function MdxTable({ children }: MdxTablePropType) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                {children}
            </table>
        </div>
    );
}