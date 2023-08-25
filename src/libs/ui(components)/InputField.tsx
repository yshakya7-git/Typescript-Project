import { ChangeEvent } from "react";
import classNames from "classnames";
import { inputField } from "../variants/inputField";


interface InputProps {
    label: string,
    type: 'text' | 'number' | 'email' | 'password' | 'search',
    value: string | number,
    name: string,
    placeholder: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,

}

export const InputField = ({ label, type, value, name, placeholder, disabled, onChange }: InputProps) => {
    const labelClasses = classNames("block mb-2 text-sm font-medium text-gray-900 dark:text-white");

    return (
        <div>
         <label htmlFor={label} className={labelClasses}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                className={inputField()}
            />
             

        </div >
    )
}
