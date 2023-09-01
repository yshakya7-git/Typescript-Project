import classNames from "classnames"
import { ChangeEvent } from "react";

interface SearchInputProps {
    label: string,
    type: 'search',
    value: string | number,
    name: string,
    placeholder: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,


}

export const SearchInput = ({label, type, placeholder, onChange}: SearchInputProps) => {
    const labelClasses = classNames("pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary");
    const inputClasses = classNames("peer block w-[50%] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0");
  
    return (
    <div className="relative mb-3" data-te-input-wrapper-init>
        <input
                type={type}
                id={label}
                placeholder={placeholder}
                onChange={onChange}
                // disabled={disabled}
                className={inputClasses}
            />
         <label htmlFor={label} className={labelClasses}>{label}</label>
            
            
        </div >
  )
}
