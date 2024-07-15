"use client"

import * as React from "react"
import { Input } from "../input"
import { Button } from "../button"
import { Cross } from "lucide-react"
import { Table } from "@tanstack/react-table"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
    searchPlaceholder?: string,
    table: Table<TData>,
    priorities: { label: string, value: string, icon: React.ComponentType<{ className?: string }> }[],
    statuses: { label: string, value: string, icon: React.ComponentType<{ className?: string }> }[]
}

export function DataTableToolbar<TData>({
    table,
    priorities,
    statuses,
    searchPlaceholder = "Search..."
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder={searchPlaceholder}
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="h-[--height-clickable] w-[200px] lg:w-[250px] focus:outline-none focus:ring-0"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses.map((status) => ({
                            label: status.label,
                            value: status.value,
                            icon: status.icon as React.ComponentType<{ className?: string }>,
                        }))}
                    />
                )}
                {table.getColumn("priority") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("priority")}
                        title="Priority"
                        options={priorities.map((priority) => ({
                            label: priority.label,
                            value: priority.value,
                            icon: priority.icon as React.ComponentType<{ className?: string }>,
                        }))}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="px-3 flex font-bold items-center gap-2 hover:bg-gray-100"
                    >
                        Reset
                        <Cross className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}