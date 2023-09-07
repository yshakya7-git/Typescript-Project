import { array, object, string } from "yup";

export const TodoFormSchema = object({
    title: array().of(string().required())
        .required("Title is required")
        .min(5, "Must contain 5 characters")
        .max(25, 'Maximum 25 characters'),
    description: array()
        .of(string()
            .required())
        .required("Please provide descriptions")
        .min(5, "Must contain 5 characters")
        .max(100, 'Letters Exceeded'),
})  
