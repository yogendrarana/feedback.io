import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { cn, generateConfetti } from '../lib/utils';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

// api response type
interface ApiResponse {
    success: boolean;
    message: string;
}

// form props
interface ReactFormProps {
    clientId: string;
    projectId: string;
    contentClassName?: string;
    triggerClassName?: string;
}


export const ReactForm = (props: ReactFormProps): JSX.Element => {
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
            
            // clear form data
            setData({ email: '', type: '', feedback: '' });
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className={cn('px-3 py-2 rounded-md border', triggerClassName)}>
                Feedback
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='end'
                className={cn("w-[400px] p-4", contentClassName)}
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Your Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="feedback" className="text-sm font-medium">
                            Your Feedback
                        </label>
                        <Textarea
                            id="feedback"
                            rows={3}
                            value={data.feedback}
                            placeholder='Please enter your feedback here...'
                            onChange={(e) => setData({ ...data, feedback: e.target.value })}
                            className='resize-none'
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        {['bug', 'feature', 'suggestion'].map((type) => (
                            <Button
                                key={type}
                                type="button"
                                variant={data.type === type ? 'secondary' : 'outline'}
                                onClick={() => setData({ ...data, type })}
                                className="flex-1 border"
                            >
                                {type === 'bug' && '🐛'}
                                {type === 'feature' && '✨'}
                                {type === 'suggestion' && '💡'}
                                <span className="ml-2 capitalize">{type}</span>
                            </Button>
                        ))}
                    </div>

                    {error && <p style={{color: "red"}} className="text-red-500 text-sm">{error}</p>}

                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};