"use client";

import type { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import JSConfetti from "js-confetti";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProjectSchema } from "@/server/schemas";
import { LoaderIcon, Plus, Rocket } from "lucide-react";
import { createProject } from "@/server/actions/project";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface CreateProjectProps {
    children: React.ReactNode;
}

export function CreateProject(props: CreateProjectProps) {
    const { status } = useSession();

    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Form state:
    const form = useForm<z.infer<typeof CreateProjectSchema>>({
        resolver: zodResolver(CreateProjectSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    // On form submit:
    const onSubmit = async (values: z.infer<typeof CreateProjectSchema>) => {
        if (status !== "authenticated") {
            toast.info("Session not loaded yet");
            return;
        }

        try {
            setLoading(true);
            
            const result = await createProject(values);
            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success(result.message, {
                description: "You can copy the key and use it in your app.",
                duration: 10000,
            });

            form.reset();
            setOpen(false);
            await generateConfetti();
        } catch (error: any) {
            toast.error(error.message || "An unexpected error has occurred. Please try again later.");
        } finally {
            setError(false);
            setMessage("");
            setLoading(false);
        }
    };

    // Generate confetti animation:
    const generateConfetti = async () => {
        const jsConfetti = new JSConfetti();
        await jsConfetti.addConfetti({
            confettiColors: ["#fdd835", "#4caf50", "#2196f3", "#f44336", "#ff9800"],
            confettiRadius: 3,
            confettiNumber: 100,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>{props.children}</DialogTrigger>
            <DialogContent className="dark:bg-gray-800 border-none">
                <DialogHeader className="mb-2">
                    <DialogTitle>Create New Project</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                autoComplete="off"
                                                placeholder="My Project"
                                                disabled={loading}
                                                className="dark:bg-gray-700"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description (optional):</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Enter a description"
                                                disabled={loading}
                                                className="dark:bg-gray-700"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {isError && <Alert variant="destructive">{message}</Alert>}
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="ghost" disabled={loading}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit" disabled={loading} className="dark:bg-black">
                                {loading ? (
                                    <LoaderIcon size={16} className="animate-spin" />
                                ) : (
                                    <Rocket size={16} />
                                )}
                                <span>{loading ? "Creating..." : "Create"}</span>
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}