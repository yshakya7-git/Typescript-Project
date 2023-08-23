import { object, string, number } from "yup";

export const ProductForm = object({
    title: string()
        .required("Title is required")
        .min(5, "Must contain 5 characters")
        .max(25, 'Maximum 25 characters'),
    description: string()
        .required("Please provide descriptions")
        .min(5, "Must contain 5 characters")
        .max(100, 'Letters Exceeded'),
    price: number()
        .required("Price is required")
        .positive()
        .max(10, 'Maximum 10 digits')
        .min(1),


})  