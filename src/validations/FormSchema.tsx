import { object, string } from "yup";

export const FormSchema = object({
    uname: string()
        .required("You must enter a username")
        .max(15, 'Maximum 15 characters')
        .min(5, 'Minimum 5 characters'),
    password: string()
        .required("No password provided.")
        .min(8, "Must Contain 8 Characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
      
})  