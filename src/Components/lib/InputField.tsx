import { ChangeEvent } from "react";
import classNames from "classnames";

interface InputProps {
    label: string,
    type: 'text' | 'number' | 'email' | 'password' |'search',
    value: string | number,
    name: string,
    placeholder: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    
}

export const InputField = ({ label, type, value, name, placeholder, disabled, onChange }: InputProps) => {
    const classes = classNames(`border-2 w-[220px] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500`);
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
                className={classes}
            />
             

        </div>
    )
}
