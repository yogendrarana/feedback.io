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
        feedbackTypeClassName,
        contentAlign
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

        if (!data.email) {
            setError('Please provide email');
            return;
        }

        if (!data.type) {
            setError('Please select feedback type');
            return;
        }

        if (!data.feedback) {
            setError('Please provide feedback');
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
            <DropdownMenuTrigger className={cn('px-3 py-2 rounded-md outline-none ring-0 border', triggerClassName)}>
                Feedback
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={contentAlign || "end"}
                className={cn("w-[425px] p-4", contentClassName)}
            >
                <form
                    onSubmit={handleSubmit}
                    className={cn(formClassName)}
                    style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                    <div style={{ display: 'flex', flexDirection: "column",  gap: '10px' }}>
                        <label htmlFor="email" className={cn("text-sm font-medium", labelClassName)}>
                            Your Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            placeholder="you@example.com"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className={cn(inputClassName)}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: "column",  gap: '10px' }}>
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

                    <div style={{ display: 'flex', gap: '10px' }}>
                        {['bug', 'feature', 'suggestion'].map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setData({ ...data, type })}
                                style={{
                                    backgroundColor: data.type === type ? '#ededed' : 'transparent',
                                    flex: '1 1 0',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    border: '1px solid #ededed',
                                    padding: "10px 20px",
                                }}
                                className={cn("", feedbackTypeClassName)}
                            >
                                <span>{type}</span>
                            </button>
                        ))}
                    </div>

                    {error && <p className={cn("text-red-500 text-sm", errorClassName)}>{error}</p>}

                    <Button
                        type="submit"
                        className={cn("w-full bg-black text-white", submitBtnClassName)}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};