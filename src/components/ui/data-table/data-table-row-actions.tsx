"use client"

import * as React from "react"
import { Button } from "../button"
import { Trash } from "lucide-react"
import { Row } from "@tanstack/react-table"

interface DataTableRowActionsProps<TData> {
    row?: Row<TData>
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
    return (
        <div>
            <Button variant="outline" size="icon" className="bg-white">
                <Trash size={16} />
            </Button>
        </div>
    )
}