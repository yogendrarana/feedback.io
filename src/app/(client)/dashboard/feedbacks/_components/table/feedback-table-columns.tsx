"use client"

import { z } from "zod"
import React from "react"
import moment from "moment"
import { ColumnDef } from "@tanstack/react-table"
import { FeedbackTableRowActions } from "./feedback-table-row-actions"
import { DataTableColumnHeader } from "@/components/table/data-table-column"

export const FeedbackSchema = z.object({
    id: z.string(),
    project: z.string(),
    category: z.string(),
    sender: z.string(),
    message: z.string(),
    createdAt: z.date()
})

export type FeedbackTableColumnType = z.infer<typeof FeedbackSchema>

export const feedbackTableColumns: ColumnDef<FeedbackTableColumnType>[] = [
    {
        accessorKey: "project",
        header: () => (
            <span>Project</span>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "category",
        header: () => (
            <span>Category</span>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "message",
        header: () => (
            <span>Message</span>
        ),
        enableHiding: false,
    },
    {
        accessorKey: "sender",
        header: () => (
            <span>Sender</span>
        ),
        enableHiding: false
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => <span>{moment(row.getValue("createdAt")).format("YYYY-MM-DD")}</span>,
        enableHiding: false
    },
    {
        id: "actions",
        cell: ({ row }) => <FeedbackTableRowActions row={row} />,
        enableHiding: false,
    },
]