import { tv, type VariantProps } from 'tailwind-variants';


type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonVariants {
    children: React.ReactNode;
}

export const button = tv({
    base: "px-4 py-1.5 rounded hover:opacity-80",
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-500 hover:bg-purple-700",
            success: "bg-green-500 hover:bg-green-700",
            danger: "bg-red-500 hover:bg-red-700",
        },
        size: {
            small: "py-0 px-2 text-xs",
            medium: "py-1 px-2 text-sm",
            large: "py-1.5 px-3 text-md",
        },
        flat: {
            true: "bg-transparent",
        },
    },
    defaultVariants: {
        color: "primary",
        size:"medium"
    },
    compoundVariants: [
        {
            color: "primary",
            flat: true,
            class: "bg-blue-500/40",
        },
        {
            color: "secondary",
            flat: true,
            class: "bg-purple-500/20",
        },
        {
            color: "success",
            flat: true,
            class: "bg-green-500/20",
        },
        {
            color: "danger",
            flat: true,
            class: "bg-red-500/20",
        },
    ],
});
