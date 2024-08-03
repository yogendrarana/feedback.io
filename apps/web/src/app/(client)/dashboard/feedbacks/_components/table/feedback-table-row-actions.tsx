"use client"

import * as React from "react"
import { Row } from "@tanstack/react-table"
import DeleteFeedback from "../delete-feedback"
import { FeedbackTableColumnType } from "./feedback-table-columns"

interface DataTableRowActionsProps<T> {
    row: Row<T>
}

export function FeedbackTableRowActions<T extends FeedbackTableColumnType>({ row }: DataTableRowActionsProps<T>) {
    return (
        <div className="space-x-2">
            {row.original.id && <DeleteFeedback feedbackId={row.original.id} />}
        </div>
    )
}