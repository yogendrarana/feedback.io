"use client";

import type { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import SettingCard from "./setting-card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/server/actions/user";
import { UpdateProfileSchema } from "@/server/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { LoaderIcon, Save } from "lucide-react";


interface ProfileSettingProps {
    name: string;
    email: string;
}

export default function ProfileU({ name, email }: ProfileSettingProps) {
    const [loading, setLoading] = useState<boolean>(false);

    const hookForm = useForm<z.infer<typeof UpdateProfileSchema>>({
        resolver: zodResolver(UpdateProfileSchema),
        defaultValues: { name, email },
    });

    const onSubmit = async (values: z.infer<typeof UpdateProfileSchema>) => {
        try {
            setLoading(true);
            const response = await updateProfile(values);
            if (!response.success) {
                setLoading(false);
                return toast.error(response.message);
            }

            toast.success(response.message);
        } catch (error: any) {
            setLoading(false);
            toast.error(error.message || "An unexpected error has occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SettingCard
            title="Update Profile"
            description="Your profile setting:"
        >
            <Form {...hookForm}>
                <form onSubmit={hookForm.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={hookForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your name:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" disabled={loading} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hookForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your email:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} disabled />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-end">
                        <Button
                            type="submit"
                            disabled={loading || hookForm.getValues().name === name}
                        >
                            {loading ? (
                                <LoaderIcon size={16} className="animate-spin" />
                            ) : (
                                <Save size={16} />
                            )}
                            <span>{loading ? "Saving..." : "Save"}</span>
                        </Button>
                    </div>
                </form>
            </Form>
        </SettingCard>
    );
};