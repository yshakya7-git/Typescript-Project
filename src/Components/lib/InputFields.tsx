import { ChangeEvent } from "react";

interface InputProps {
    label: string,
    type: 'text' | 'number' | 'email' | 'password' | 'search',
    value: string | number,
    name: string,
    placeholder: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    register: any
}

export const InputFields = ({ label, type, name, placeholder, register }: InputProps) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                name={name}
                id={label}
                placeholder={placeholder}
                ref={register}
            />
        </div>
    )
}
