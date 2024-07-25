"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { toast } from "sonner";
import { Copy, LoaderIcon, SendHorizonal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { z } from "zod";
import { EmailSchema } from "@/server/schemas";

interface RequestDemoProps {
    setFeedbacks: React.Dispatch<React.SetStateAction<any[]>>
}

export default function RequestDemo({ setFeedbacks }: RequestDemoProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFromData] = useState({
        senderEmail: '',
        feedbackCategory: '',
        feedbackMessage: '',
    })

    const generateRandomProjectName = () => {
        const projectSuffix = ['E', 'F', 'G', 'H', 'I', 'X'];
        const randomSuffix = projectSuffix[Math.floor(Math.random() * projectSuffix.length)];
        return `Project ${randomSuffix}`;
      };

    const handleFeedbackPost = async () => {
        setLoading(true);

        // Function to create a delay
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        try {
            if (!formData.senderEmail || !formData.feedbackCategory || !formData.feedbackMessage) {
                toast.warning("Please provide required fields.");
                return;
            }

            // usig zod validate email
            const isValidEmail = await EmailSchema.safeParse(formData.senderEmail)
            if (!isValidEmail.success) {
                const errorMessage = isValidEmail.error.errors.map(err => err.message).join(', ');
                toast.warning(errorMessage)
                return
            }
    
            await delay(1000);

            setFeedbacks(prev => [
                ...prev,
                {
                    project: generateRandomProjectName(),
                    category: formData.feedbackCategory,
                    message: formData.feedbackMessage,
                    sender: formData.senderEmail,
                    createdAt: new Date()
                }
            ]);

            toast.success("Feedback submitted successfully!");
        } catch (error) {
            toast.error("An error occurred while submitting feedback.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn("w-full lg:w-[450px] p-4 border rounded-xl flex flex-col")}>
            <div className="flex items-center justify-between gap-2 mb-4">
                <div className=" flex items-center gap-2 flex-1 border rounded-lg overflow-hidden">
                    <span className="px-4 py-2 bg-gray-100">POST</span>
                    <span className=""> / feedback</span>
                    {/* <Copy size={16} className="ml-auto mr-4 cursor-pointer" /> */}
                </div>
                <Button
                    variant="default"
                    onClick={handleFeedbackPost}
                >
                    {loading
                        ? <LoaderIcon size={16} className="animate-spin mr-2" />
                        : <SendHorizonal size={16} className="mr-2" />
                    }
                    Send
                </Button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-2">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="h-12 px-4 rounded-t-lg bg-gray-100">Request Header</AccordionTrigger>
                        <AccordionContent className="p-2 space-y-3">
                            <Input
                                type="text"
                                placeholder="x-account-id"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                            <Input
                                type="text"
                                placeholder="x-project-id"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" defaultValue="value1" className="w-full">
                    <AccordionItem value="value1" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="h-12 px-4 rounded-t-lg bg-gray-100">Request Body</AccordionTrigger>
                        <AccordionContent className="p-4 space-y-3">
                            <Input
                                type="text"
                                name="senderEmail"
                                placeholder="Sender email"
                                value={formData.senderEmail}
                                onChange={(e) => setFromData({ ...formData, [e.target.name]: e.target.value })}
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-1"
                            />

                            <Select
                                defaultValue="bug"
                                onValueChange={(value) => setFromData({ ...formData, feedbackCategory: value })}
                            >
                                <SelectTrigger className="w-full focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0">
                                    <SelectValue placeholder="Feedback category" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    <SelectItem value="bug">Bug</SelectItem>
                                    <SelectItem value="feature">Feature</SelectItem>
                                    <SelectItem value="message">Message</SelectItem>
                                    <SelectItem value="suggestion">Suggestion</SelectItem>
                                </SelectContent>
                            </Select>

                            <Textarea
                                name="feedbackMessage"
                                placeholder="Feedback message"
                                value={formData.feedbackMessage}
                                onChange={(e) => setFromData({ ...formData, [e.target.name]: e.target.value })}
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div >
    );
}