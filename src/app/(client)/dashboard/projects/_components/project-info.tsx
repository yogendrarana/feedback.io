"use client";

import moment from "moment";
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface ProjectInfoProps {
    project: any;
}

export default function ProjectInfo(props: ProjectInfoProps) {
    const { project } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Eye size={16} />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="overflow-hidden">
                    <DialogTitle className="text-2xl">{project.name ?? ""}</DialogTitle>
                    <DialogDescription className="block truncate">
                        About this project
                    </DialogDescription>
                </DialogHeader>

                <hr />

                <div className="space-y-4">
                    <div className="flex flex-col gap-2 text-sm">
                        <p>Total Feedbacks</p>
                        <span className="text-gray-400">21 feedbacks</span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <p>Creation Date</p>
                        <span className="text-gray-400">{moment(project.createdAt).format('D MMMM, YYYY')}</span>
                    </div>

                    {
                        project.description && (
                            <div className="text-sm">
                                <div>Description</div>
                                <span className="text-sm text-gray-400">{project.description}</span>
                            </div>
                        )
                    }
                </div>
            </DialogContent >
        </Dialog >
    );
};