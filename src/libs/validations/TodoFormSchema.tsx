import { object, string } from "yup";

export const TodoFormSchema = object({
    title: string()
        .required("Title is required")
        .min(5, "Must contain 5 characters")
        .max(25, 'Maximum 25 characters'),
    description: string()
        .required("Please provide descriptions")
        .min(5, "Must contain 5 characters")
        .max(100, 'Letters Exceeded'),
})  