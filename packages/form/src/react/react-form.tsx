import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Input } from '../ui/input';
import { FormProps } from './types';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { cn, generateConfetti } from '../lib/utils';

// api response type
interface ApiResponse {
    success: boolean;
    message: string;
}

const API_ENDPOINT = "https://feedmo.vercel.app/api/v1/feedback";

export const ReactForm = (props: FormProps): JSX.Element => {
    const { 
        clientId, 
        projectId, 
        contentClassName, 
        triggerClassName,
        labelClassName,
        inputClassName,
        textareaClassName,
        submitBtnClassName,
        formClassName,
        errorClassName,
        menuAlign
    } = props;

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

            const response = await fetch(API_ENDPOINT, {
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

            // clear form data
            setData({ email: '', type: '', feedback: '' });
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className={cn('px-3 py-2 rounded-md outline-none ring-0', triggerClassName)}>
                Feedback
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={menuAlign || "end"}
                className={cn("w-[400px] p-4", contentClassName)}
            >
                <form
                    onSubmit={handleSubmit}
                    className={cn("text-sm font-medium space-y-3", formClassName)}
                >
                    <div className="space-y-2">
                        <label htmlFor="email" className={cn("text-sm font-medium", labelClassName)}>
                            Your Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                            className={cn(inputClassName)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="feedback" className={cn("text-sm font-medium", labelClassName)}>
                            Your Feedback
                        </label>
                        <Textarea
                            id="feedback"
                            rows={3}
                            value={data.feedback}
                            placeholder='Please enter your feedback here...'
                            onChange={(e) => setData({ ...data, feedback: e.target.value })}
                            className={cn('resize-none', textareaClassName)}
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        {['bug', 'feature', 'suggestion'].map((type) => (
                            <Button
                                key={type}
                                type="button"
                                variant="outline"
                                onClick={() => setData({ ...data, type })}
                                style={{
                                    backgroundColor: data.type === type ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                                }}
                            >
                                {type === 'bug' && '🐛'}
                                {type === 'feature' && '✨'}
                                {type === 'suggestion' && '💡'}
                                <span className="ml-2 capitalize">{type}</span>
                            </Button>
                        ))}
                    </div>

                    {error && <p className={cn("text-red-500 text-sm", errorClassName)}>{error}</p>}
                    <Button
                        type="submit"
                        variant="default"
                        className={cn("w-full", submitBtnClassName)}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};