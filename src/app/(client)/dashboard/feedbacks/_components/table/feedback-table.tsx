"use client"

import React from 'react'
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { feedbackCategory } from './data'
import { feedbackTableColumns } from './feedback-table-columns'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FeedbackTablePagination } from './feedback-table-pagination'
import { DataTable } from '@/components/ui/data-table/data-table'
import { FeedbackTableToolbar } from './feedback-table-toolbar'

interface FeedbackTableProps {
    feedbacks: any
}

export default function FeedbackTable(props: FeedbackTableProps) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

    const feedbacks = props.feedbacks

    const table = useReactTable({
        data: feedbacks,
        columns: feedbackTableColumns,
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 10,
            },
        },
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
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
                <FeedbackTableToolbar table={table} category={feedbackCategory} />
            </div>

            <div className='h-full w-full flex-1 overflow-y-auto'>
                <ScrollArea>
                    <DataTable table={table} columns={feedbackTableColumns} />
                </ScrollArea>
            </div>

            <div className="sticky bottom-0 bg-white rounded-lg border">
                <FeedbackTablePagination table={table} />
            </div>
        </div>
    )
}
