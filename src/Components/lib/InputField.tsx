import { ChangeEvent } from "react";
import classNames from "classnames";

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
    const classes = classNames(`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[0px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`);
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
                className={classes}
            />
             

        </div >
    )
}
