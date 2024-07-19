"use client"

import React from "react";
import {
    ColumnFiltersState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState
} from "@tanstack/react-table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { projectTableColumns } from "./project-table-columns"
import { DataTable } from "@/components/ui/data-table/data-table"
import { ProjectTablePagination } from "./project-table-pagination";
import ProjectTableToolbar from "./project-table-toolbar";

interface ProjectTableProps {
    projects: any
}

export default function ProjectTable(props: ProjectTableProps) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

    const projects = props.projects

    const table = useReactTable({
        data: projects,
        columns: projectTableColumns,
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 10,
            }
        },
        state: {
            sorting,
            columnVisibility,
            columnFilters,
            rowSelection
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    return (
        <div className="h-full flex flex-col gap-2 justify-between bg-white">
            <div>
                <ProjectTableToolbar table={table} numberOfProjects={projects.length || 0} />
            </div>

            <div className='h-full w-full flex-1 overflow-y-auto'>
                <ScrollArea>
                    <DataTable table={table} columns={projectTableColumns} />
                </ScrollArea>
            </div>

            <div className="sticky bottom-0 bg-white rounded-lg border">
                <ProjectTablePagination table={table} />
            </div>
        </div>
    )
}