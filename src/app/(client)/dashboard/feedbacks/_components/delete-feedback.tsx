"use client";

import { toast } from "sonner";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteFeedback } from "@/server/actions/feedback";

interface DeleteFeedbackProps {
    feedbackId: string;
}

export default function DeleteFeedback(props: DeleteFeedbackProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete = async () => {
        try {
            setLoading(true);

            const result = await deleteFeedback(props.feedbackId);
            if (!result.success) {
                toast.error(result.message);
                return;
            }

            setOpen(false);
            toast.success(result.message || "Project deleted successfully.");
        } catch (error: any) {
            toast.error("An error occurred while deleting the project. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white">
                    <Trash size={16} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Feedback</DialogTitle>
                    <DialogDescription className="">
                        Are you sure you want to delete this feedback? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button 
                        variant="default" 
                        disabled={loading}
                        onClick={handleDelete}
                    >
                        {loading ? <LoaderIcon size={14} className="animate-spin" /> : <Trash size={14} />}
                        <span>{loading ? "Deleting..." : "Delete"}</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};