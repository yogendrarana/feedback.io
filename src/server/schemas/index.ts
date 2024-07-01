import { z } from "zod";

export const CreateProjectSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .max(50, { message: "The name must be 50 characters or less." }),
    description: z
        .string()
        .max(100, { message: "The description must be 100 characters or less." }),
});

export const DeleteProjectSchema = z.object({
    projectName: z.string().min(1, { message: "Project name is required." }),
});

export const UpdateProfileSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .max(50, { message: "The name must be 50 characters or less." }),
    email: z
        .string()
        .email({ message: "Invalid email address." }),
});