"use client"

import * as React from "react"
import { Row } from "@tanstack/react-table"
import DeleteFeedback from "./delete-feedback"
import { FeedbackColumnType } from "./feedback-columns"

interface DataTableRowActionsProps<T> {
    row: Row<T>
}

export function FeedbackRowActions<T extends FeedbackColumnType>({ row }: DataTableRowActionsProps<T>) {
    return (
        <div className="space-x-2">
            {row.original.id && <DeleteFeedback feedbackId={row.original.id} />}
        </div>
    )
}