import { ChangeEvent } from "react"

interface InputProps {
    label: string,
    type: 'text' | 'number' | 'email' | 'password',
    value: string | number,
    name: string,
    placeholder: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    

}

export const InputField = ({ label, type, value, name, placeholder, disabled, onChange }: InputProps) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
             

        </div>
    )
}
