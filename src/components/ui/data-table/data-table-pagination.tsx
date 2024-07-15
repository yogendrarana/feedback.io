"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../select"
import * as React from "react"
import { Table } from "@tanstack/react-table"
import { Button } from "../button"
import { ChevronsRight, ChevronsLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface DataTablePaginationProps<T> {
    table: Table<T>
}

export function DataTablePagination<T>({
    table,
}: DataTablePaginationProps<T>) {
    return (
        <div className="flex items-center justify-between p-2">
            <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>

            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <SelectTrigger className="h-[--size-button] w-[80px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top" className="w-[80px] bg-white p-2" sideOffset={5}>
                            {[20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`} className="cursor-pointer">
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        // className="hidden h-8 w-8 p-0 lg:flex"
                        className="size-[var(--size-button)] flex items-center justify-center border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Go to first page</span>
                        <ChevronsLeft size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        // className="h-8 w-8 p-0"
                        className="size-[var(--size-button)] flex items-center justify-center border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeft size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        // className="h-8 w-8 p-0"
                        className="size-[var(--size-button)] flex items-center justify-center border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Go to next page</span>
                        <ChevronRight size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        // className="h-8 w-8 p-0 lg:flex"
                        className="size-[var(--size-button)] flex items-center justify-center border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Go to last page</span>
                        <ChevronsRight size={16} />
                    </Button>
                </div>
            </div>
        </div>
    )
}