"use client";

import moment from "moment";
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Maximize } from "lucide-react";

interface ProjectInfoProps {
    project: string;
}

export default function ProjectInfo(props: ProjectInfoProps) {
    const project = JSON.parse(props.project);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Maximize size={16} />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="overflow-hidden">
                    <DialogTitle className="text-2xl">{project?.name ?? ""}</DialogTitle>
                </DialogHeader>

                <hr />

                <div className="space-y-4">
                    <div className="flex flex-col text-sm">
                        <p>Total Feedbacks</p>
                        <span className="text-gray-400">{project.feedbacks.length || 0}</span>
                    </div>

                    <div className="flex flex-col text-sm">
                        <p>Creation Date</p>
                        <span className="text-gray-400">{moment(project.createdAt).format('D MMMM, YYYY')}</span>
                    </div>

                    {
                        project.description && (
                            <div className="text-sm">
                                <div>Description</div>
                                <span className="text-sm text-gray-400">{project.description || ""}</span>
                            </div>
                        )
                    }
                </div>
            </DialogContent >
        </Dialog >
    );
};