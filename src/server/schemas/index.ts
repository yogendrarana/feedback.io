import { z } from "zod";

// email schema
export const EmailSchema = z.string().email({ message: "Invalid email address" })

// create project schema
export const CreateProjectSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .max(50, { message: "The name must be 50 characters or less." }),
    description: z
        .string()
        .max(100, { message: "The description must be 100 characters or less." }),
});

// delete project schema
export const DeleteProjectSchema = z.object({
    projectName: z.string().min(1, { message: "Project name is required." }),
});

// update profile schema
export const UpdateProfileSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .max(50, { message: "The name must be 50 characters or less." }),
    email: z
        .string()
        .email({ message: "Invalid email address." }),
});

// create feedback schema
export const CreateFeedbackSchema = z.object({
    message: z
        .string()
        .min(1, { message: "Message is required." })
        .max(500, { message: "The message must be 500 characters or less." }),
    category: z
        .string()
        .min(1, { message: "Category is required." })
        .max(50, { message: "The category must be 50 characters or less." }),
    email: z
        .string()
        .email({ message: "Invalid email address." }),
});

// delete feedback schema
export const DeleteFeedbackSchema = z.object({
    feedbackId: z.string().min(1, { message: "Feedback id is required." }),
});