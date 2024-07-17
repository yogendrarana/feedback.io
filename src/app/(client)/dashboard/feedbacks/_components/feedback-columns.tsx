"use client"

import { z } from "zod"
import React from "react"
import moment from "moment"
import { ColumnDef } from "@tanstack/react-table"
import { FeedbackRowActions } from "./feedback-row-actions"
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column"

export const FeedbackSchema = z.object({
    id: z.string(),
    project: z.string(),
    category: z.string(),
    email: z.string(),
    message: z.string(),
    createdAt: z.date()
})

export type FeedbackColumnType = z.infer<typeof FeedbackSchema>

export const feedbackColumns: ColumnDef<FeedbackColumnType>[] = [
    {
        accessorKey: "project",
        header: () => (
            <div>Project</div>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "category",
        header: () => (
            <div>Category</div>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "message",
        header: () => (
            <div>Message</div>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => <div>{moment(row.getValue("createdAt")).format("DD MMMM, YYYY")}</div>,
        enableHiding: false
    },
    {
        id: "actions",
        cell: ({ row }) => <FeedbackRowActions row={row} />,
        enableHiding: false,
    },
]