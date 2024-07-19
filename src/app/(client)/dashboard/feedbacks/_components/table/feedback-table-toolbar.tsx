"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Cross, X } from "lucide-react"
import { Table } from "@tanstack/react-table"
import { FeedbackTableFacetedFilter } from "./feedback-table-faceted-filter"

interface DataTableToolbarProps<TData> {
    searchPlaceholder?: string,
    table: Table<TData>,
    category: { label: string, value: string, icon: React.ComponentType<{ className?: string }> }[],
}

export function FeedbackTableToolbar<TData>({
    table,
    category,
    searchPlaceholder = "Search by project ..."
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder={searchPlaceholder}
                    value={(table.getColumn("project")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("project")?.setFilterValue(event.target.value)
                    }
                    className="w-[200px] lg:w-[250px] focus:outline-none focus:ring-0"
                />
                {table.getColumn("category") && (
                    <FeedbackTableFacetedFilter
                        column={table.getColumn("category")}
                        title="Category"
                        options={category.map((category) => ({
                            label: category.label,
                            value: category.value,
                            icon: category.icon as React.ComponentType<{ className?: string }>,
                        }))}
                    />
                )}
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
            </div>
        </div>
    )
}