"use client"

import * as React from "react"
import { Row } from "@tanstack/react-table"
import DeleteProject from "../delete-project"
import { ProjectTableColumnType } from "./project-table-columns"
import ProjectInfo from "../project-info"
import CopyProjectId from "../copy-projectid"

interface DataTableRowActionsProps<T> {
    row: Row<T>
}

export function ProjectTableRowActions<T extends ProjectTableColumnType>({ row }: DataTableRowActionsProps<T>) {
    return (
        <div className="space-x-2">
            {row.original.projectId && <CopyProjectId projectId={row.original.projectId} />}
            {row.original.id && <DeleteProject projectId={row.original.projectId} projectName={row.original.name} />}
        </div>
    )
}