import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../ui/dropdown"
import { cn } from '../lib/utils';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import JSConfetti from "js-confetti";

// api response type
interface ApiResponse {
    success: boolean;
    message: string;
}

// form props
interface FormProps {
    clientId: string;
    projectId: string;
    contentClassName?: string;
    triggerClassName?: string;
}

// Generate confetti animation:
const generateConfetti = async () => {
    const jsConfetti = new JSConfetti();
    await jsConfetti.addConfetti({
        confettiColors: ["#fdd835", "#4caf50", "#2196f3", "#f44336", "#ff9800"],
        confettiRadius: 3,
        confettiNumber: 100,
    });
};

export const Form = (props: FormProps): JSX.Element => {
    const { clientId, projectId, contentClassName, triggerClassName } = props;

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState({ email: '', type: '', feedback: '' })

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!clientId || !projectId) {
            setError('Provide client and project ID as props.');
            return;
        }

        if (!data.email || !data.type || !data.feedback) {
            setError('All fields are required');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch('https://feedbackio.vercel.app/api/v1/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-client-id': clientId,
                    'x-project-id': projectId,
                },
                body: JSON.stringify(data),
            });

            const jsonResponse: ApiResponse = await response.json();

            if (!response.ok) {
                throw new Error(jsonResponse.message);
            }

            if (!jsonResponse.success) {
                throw new Error(jsonResponse.message);
            }

            setOpen(false);
            setLoading(false);

            await generateConfetti();
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };


    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className={cn('px-3 py-1 rounded-sm border', triggerClassName)}>
                Feedback
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className={cn("", contentClassName)}>
                <form
                    onSubmit={handleSubmit}
                    className="p-2 flex flex-col gap-1.5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className='px-2 py-1 border rounded-sm focus:outline-none focus:ring-0'
                    />
                    <select
                        value={data.type}
                        onChange={(e) => setData({ ...data, type: e.target.value })}
                        className='p-2 border rounded-sm text-sm'
                    >
                        <option value="">Feedback type</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <Textarea
                        rows={3}
                        value={data.feedback}
                        placeholder='Your feedback'
                        onChange={(e) => setData({ ...data, feedback: e.target.value })}
                        className='resize-none ring-0'
                    />

                    {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}

                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};