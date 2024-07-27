import { z } from "zod";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import { ProjectTableRowActions } from "./project-table-row-actions";
import { DataTableColumnHeader } from "@/components/table/data-table-column";

export const ProjectSchema = z.object({
    id: z.string(),
    name: z.string(),
    projectId: z.string(),
    feedbacks: z.number(),
    createdAt: z.date(),
})

export type ProjectTableColumnType = z.infer<typeof ProjectSchema>

export const projectTableColumns: ColumnDef<ProjectTableColumnType>[] = [
    {
        accessorKey: "name",
        header: () => (
            <span>Name</span>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        enableHiding: false,
    },
    {
        accessorKey: "projectId",
        header: () => (
            <span>Project ID</span>
        ),
        enableHiding: false,
    },
    {
        accessorKey: "feedbacks",
        header: () => (
            <span>Feedbacks</span>
        ),
        enableHiding: false,
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
        cell: ({ row }) => <span>{moment(row.getValue("createdAt")).format("DD MMMM, YYYY")}</span>,
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => <ProjectTableRowActions row={row} />,
        enableHiding: false,
    },
];