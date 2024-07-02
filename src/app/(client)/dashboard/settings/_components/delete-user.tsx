"use client";

import {
    Dialog,
    DialogClose,
    DialogTitle,
    DialogFooter,
    DialogHeader,
    DialogContent,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, type ReactNode } from "react";
import { deleteUser } from "@/server/actions/user";

interface DeleteUserProps {
    trigger: ReactNode;
    email: string;
}

export default function DeleteUser(props: DeleteUserProps) {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [confirmEmail, setConfirmEmail] = useState<string>("");

    const handleDeleteUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (confirmEmail !== props.email) {
            toast.error("Email does not match.");
            return;
        }

        try {
            setLoading(true);
            const response = await deleteUser();
            if (!response.success) {
                toast.error(response.message);
                return;
            }

            await signOut({ redirect: false });
            // Refresh to update authentication state
            router.refresh();
            toast.success(response.message);
            router.push('/');
        } catch (error: any) {
            toast.error(error.message || "An unexpected error occurred. Please try again later.");
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{props.trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Account</DialogTitle>
                    <DialogDescription>
                        <span>Do you really want to delete your account?</span>{" "}
                        This will permanently delete your account and remove all the feedbacks.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleDeleteUser}>
                    <div className="flex flex-col space-y-3">
                        <p className="text-sm">
                            To confirm, please type your email address:{" "}
                            <span className="font-mono">{props.email}</span>
                        </p>
                        <Input
                            type="email"
                            className="input"
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            placeholder="Your email address"
                            disabled={loading}
                        />
                        <DialogFooter className="mt-3">
                            <DialogClose asChild>
                                <Button variant="ghost" disabled={loading}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                disabled={loading || confirmEmail !== props.email}
                                type="submit"
                                variant="default"
                            >
                                {loading ?? <LoaderIcon size={16} className="animate-spin" />}
                                <span>{loading ? "Deleting..." : "Delete"}</span>
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
