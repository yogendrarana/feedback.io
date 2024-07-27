import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Folder, Plus, X } from "lucide-react";
import { CreateProject } from "../create-project";
import { cn } from "@/lib/utils";

interface ProjectTableToolbarProps<T> {
    table: Table<T>
    searchPlaceholder?: string
    numberOfProjects: number
}

export default function ProjectTableToolbar<T>({
    table,
    numberOfProjects,
    searchPlaceholder = "Search project ..."
}: ProjectTableToolbarProps<T>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className={cn("h-[var(--projects-header-height)] flex gap-x-2 items-center justify-between")}>
            <Input
                placeholder={searchPlaceholder}
                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn("name")?.setFilterValue(event.target.value)
                }
                className="flex-1 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
            />

            {isFiltered && (
                <Button
                    variant="ghost"
                    onClick={() => table.resetColumnFilters()}
                    className="px-3 flex items-center gap-2 hover:bg-gray-100"
                >
                    Reset
                    <X size={16} />
                </Button>
            )}

            <div className="h-full ml-auto flex gap-2">
                {/* TODO: If number of projects is more than 10 for hobby users, show alert to subscribe */}
                <div className='h-full px-3 space-x-2 rounded-md border flex items-center'>
                    <Folder size={16} />
                    <span>{numberOfProjects}/10</span>
                </div>

                <CreateProject>
                    <Button asChild className="bg-[#24252a]">
                        <span>
                            <Plus size={16} />
                            <span className='hidden sm:flex'>Create Project</span>
                        </span>
                    </Button>
                </CreateProject>
            </div>

        </div>
    )

}