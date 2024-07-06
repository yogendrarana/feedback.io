"use client";

import { cn } from '@/lib/utils';
import FeedbackCard from './feedback-card';
import EmptyFeedback from './empty-feedback';
import React, { useState, useEffect } from 'react';
import { IProject } from '@/db/models/project-model';
import { IFeedback } from '@/db/models/feedback-model';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FeedbackListProps {
    projects: string;
    feedbacks: string;
}

export default function FeedbackList({ projects, feedbacks }: FeedbackListProps) {
    const [parsedProjects, setParsedProjects] = useState<IProject[]>([]);
    const [selectedProject, setSelectedProject] = useState<string>("all");
    const [displayedFeedbacks, setDisplayedFeedbacks] = useState<IFeedback[]>([]);
    const [parsedFeedbacks, setParsedFeedbacks] = useState<(IFeedback & { project: { name: string } })[]>([]);

    useEffect(() => {
        setParsedProjects(JSON.parse(projects));
        setParsedFeedbacks(JSON.parse(feedbacks));
    }, [projects, feedbacks]);

    useEffect(() => {
        if (selectedProject === "all") {
            setDisplayedFeedbacks(parsedFeedbacks);
        } else {
            setDisplayedFeedbacks(parsedFeedbacks.filter(feedback => feedback.project.name === selectedProject));
        }
    }, [selectedProject, parsedFeedbacks]);

    const handleProjectChange = (value: string) => {
        setSelectedProject(value);
    };

    return (
        <div className="space-y-4">
            <div className={cn("h-[var(--feedbacks-header-height)] flex items-center justify-between gap-x-2")}>
                <p className="text-sm text-gray-500">{`Feedbacks for ${selectedProject === "all" ? "all projects" : selectedProject}`}</p>

                <Select onValueChange={handleProjectChange} value={selectedProject}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select a project" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Projects</SelectItem>
                        {parsedProjects && parsedProjects.map((project, index) => (
                            <SelectItem key={index} value={project.name}>
                                {project.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {displayedFeedbacks.length > 0 ? (
                <div className="space-y-2">
                    {displayedFeedbacks.map((feedback, index) => (
                        <FeedbackCard key={index} feedback={feedback} />
                    ))}
                </div>
            ) : (
                <EmptyFeedback className="h-[65vh] border" />
            )}
        </div>
    );
}