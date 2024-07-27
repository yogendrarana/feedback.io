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
import { EmailSchema } from "@/server/schemas";
import { Copy, LoaderIcon, SendHorizonal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { APP_DATA } from "@/data/app-data";

interface RequestDemoProps {
    setFeedbacks: React.Dispatch<React.SetStateAction<any[]>>
}

export default function RequestDemo({ setFeedbacks }: RequestDemoProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFromData] = useState({
        email: 'abc@gmail.com',
        type: 'bug',
        feedback: 'There is a bug in the application.',
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
            if (!formData.email || !formData.type || !formData.feedback) {
                toast.warning("Please provide required fields.");
                return;
            }

            // usig zod validate email
            const isValidEmail = await EmailSchema.safeParse(formData.email)
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
                    category: formData.type,
                    message: formData.feedback,
                    sender: formData.email,
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
                    <span className="px-3 py-2 bg-gray-100 rounded-l-md">POST</span>
                    <span className="text-gray-400">/api/v1/feedback</span>
                    <Button 
                        variant="ghost" 
                        className="ml-auto cursor-pointer hover:bg-white"
                        onClick={() => {
                            navigator.clipboard.writeText(APP_DATA.feedback_endpoint)
                            toast.success("Copied to clipboard!")
                        }}
                    >
                        <Copy size={16} />
                    </Button>
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
                <Accordion type="single" defaultValue="value1" collapsible className="w-full">
                    <AccordionItem value="value1" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="h-12 px-4 rounded-t-lg bg-gray-100">Request Header</AccordionTrigger>
                        <AccordionContent className="p-2 space-y-3">
                            <Input
                                type="text"
                                placeholder="x-project-id (*required)"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                            <Input
                                type="text"
                                placeholder="x-client-id (*required)"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" defaultValue="value2" collapsible className="w-full">
                    <AccordionItem value="value2" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="h-12 px-4 rounded-t-lg bg-gray-100">Request Body</AccordionTrigger>
                        <AccordionContent className="p-4 space-y-3">
                            <Input
                                type="text"
                                name="email"
                                placeholder="Sender email"
                                value={formData.email}
                                onChange={(e) => setFromData({ ...formData, [e.target.name]: e.target.value })}
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-1"
                            />

                            <Select
                                defaultValue="bug"
                                value={formData.type}
                                onValueChange={(value) => setFromData({ ...formData, type: value })}
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
                                name="feedback"
                                placeholder="Feedback message"
                                value={formData.feedback}
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