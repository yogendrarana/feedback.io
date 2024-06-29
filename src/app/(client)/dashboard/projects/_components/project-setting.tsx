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
import { Copy, Settings } from "lucide-react";
import { IProject } from "@/db/models/project-model";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProjectSettingProps {
    project: IProject
}

export default function ProjectSetting(props: ProjectSettingProps) {
    const { project } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Settings size={16} />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="overflow-hidden">
                    <DialogTitle className="text-2xl">{project.name ?? ""}</DialogTitle>
                    <DialogDescription className="block truncate">
                        About this project
                    </DialogDescription>
                </DialogHeader>

                <hr className="my-1" />

                <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                        <p>Feedbacks</p>
                        <span className="text-gray-400">21 feedbacks</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <p>Created At</p>
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

                    <div className="flex flex-col gap-2 text-sm">
                        <div> Project ID </div>
                        <div className="p-1 flex items-center justify-between border rounded-md">
                            <input type="text" value={project.projectId} disabled className="text-sm flex-1 text-gray-400 bg-white  " />
                            <button
                                onClick={() => {
                                    toast('Copied to clipboard');
                                    window.navigator.clipboard.writeText(project.projectId);
                                }}
                                className="p-2 rounded-md border bg-white"
                            ><Copy size={12} /></button>
                        </div>
                    </div>
                </div>
            </DialogContent >
        </Dialog >
    );
};