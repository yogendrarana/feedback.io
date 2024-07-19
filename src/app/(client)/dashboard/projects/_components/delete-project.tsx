"use client";

import type { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteProjectSchema } from "@/server/schemas";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderIcon, Trash, TrashIcon } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { deleteProject } from "@/server/actions/project";

interface DeleteProjectProps {
    projectName: string;
    projectId: string;
}

export default function DeleteProject(props: DeleteProjectProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof DeleteProjectSchema>>({
        resolver: zodResolver(DeleteProjectSchema),
    });

    const handleDelete = async (values: z.infer<typeof DeleteProjectSchema>) => {
        if (values.projectName !== props.projectName) {
            toast.error("The project name does not match.");
            return;
        }

        try {
            setLoading(true);

            const result = await deleteProject(props.projectId);
            if (result.error) {
                toast.error(result.error);
                return;
            }
            
            setOpen(false);
            toast.success("Project deleted successfully.", {
                description: `The project ${props.projectName} has been deleted.`,
            });
        } catch (error: any) {
            console.error("error", error);
            toast.error("An error occurred while deleting the project. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Trash size={16} />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Project: {props.projectName}</DialogTitle>
                    <DialogDescription className="">
                        Are you sure you want to delete this project? This action cannot
                        be undone and all the feedbacks under this project will also be deleted.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleDelete)}>
                        <FormField
                            control={form.control}
                            name="projectName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Type <span className="mx-1 font-mono">{`"${props.projectName}"`}</span> to confirm:
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={loading} autoComplete="off" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="mt-3">
                            <DialogClose asChild>
                                <Button variant="ghost" disabled={loading}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={loading} type="submit" variant="default">
                                {loading ? (
                                    <LoaderIcon size={16} className="animate-spin" />
                                ) : (
                                    <TrashIcon size={16} />
                                )}
                                <span>{loading ? "Deleting..." : "Delete"}</span>
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};