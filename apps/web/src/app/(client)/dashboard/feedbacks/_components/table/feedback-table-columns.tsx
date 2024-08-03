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
    type: z.string(),
    email: z.string(),
    feedback: z.string(),
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
        accessorKey: "type",
        header: () => (
            <span>Type</span>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "feedback",
        header: () => (
            <span>Feedback</span>
        ),
        enableHiding: false,
    },
    {
        accessorKey: "email",
        header: () => (
            <span>Email</span>
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