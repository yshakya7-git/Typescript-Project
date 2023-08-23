import classNames from "classnames";
import { ChangeEvent } from "react";

interface TextAreaProps {
    label: string,
    value: string | number,
    name: string,
    rows: number,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void

}
export const TextArea = ({ label, value, rows, placeholder, name, onChange }: TextAreaProps) => {

    const classes = classNames("block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
    const labelClasses = classNames("block mb-2 text-sm font-medium text-gray-900 dark:text-white");
    return (
        <div>
            <label htmlFor={label} className={labelClasses}>{label}</label>
            <textarea
                rows={rows}
                value={value}
                name={name}
                className={classes}
                placeholder={placeholder}
                onChange={onChange}>
            </textarea>

        </div>
    )
}
