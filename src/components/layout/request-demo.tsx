import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "../ui/input";

export default function RequestDemo() {
    return (
        <div className={cn("w-[500px] p-4 border-4 rounded-xl flex flex-col")}>
            <div className="flex items-center justify-between gap-2 mb-4">
                <div className=" flex items-center gap-2 flex-1 border rounded-lg overflow-hidden">
                    <span className="px-4 py-2 bg-gray-100">POST</span>
                    <span className=""> / feedback</span>
                    <Copy size={16} className="ml-auto mr-4 cursor-pointer" />
                </div>
                <Button variant="default">Send</Button>
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

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="h-12 px-4 rounded-t-lg bg-gray-100">Request Body</AccordionTrigger>
                        <AccordionContent className="p-2 space-y-3">
                            <Input
                                type="text"
                                placeholder="sender email"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-1"
                            />
                            <Input
                                type="text"
                                placeholder="feedback type"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                            <Input
                                type="text"
                                placeholder="feedback message"
                                className="focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}