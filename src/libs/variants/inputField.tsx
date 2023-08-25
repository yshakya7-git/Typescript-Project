import { tv, type VariantProps } from 'tailwind-variants';

type InputFieldVariants = VariantProps<typeof inputField>

export interface InputFieldProps extends InputFieldVariants {
    children: React.ReactNode;
}
export const inputField = tv({
    base: "appearance-none block w-full bg-white-200 text-gray-500 border rounded-[1rem] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",

})