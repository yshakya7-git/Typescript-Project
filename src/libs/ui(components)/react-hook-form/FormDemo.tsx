import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { inputField } from "../../../libs/variants/inputField";
import { ProductForm } from "../../../libs/validations/ProductForm";
import { Button } from "../buttons/Button";

type FormData = {
    title: string;
    description: string;
    price: number;

}
export const FormDemo = () => {

    const { register,
        handleSubmit,
        formState: { errors } } = useForm<FormData>({
            resolver: yupResolver(ProductForm),
        });

    const onSubmitHandler = handleSubmit((data) => console.log(data));

    return (
        <header className="items-center ml-[40rem] mt-10 fixed">
            <form onSubmit={onSubmitHandler} className="bg-gray-100 mt-[65px] w-[400px] h-[560px] shadow-md rounded px-8 pt-6 pb-8 items-center">
            <h2 className="font-bold text-blue-950 text-xl text-center">Form using React-Hook-Form</h2>
                <h5 className="font-normal text-sm text-center">Add Products.</h5>
                <hr />
                <br />
                <label htmlFor="title" className={`block font-bold text-sm mb-2 ${errors.title?.message ? "text-red-500" : "text-purple-40"}`}>Title :</label>
                {errors.title ? (
                    <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.title?.message}</span>
                ) : null}
                <input className={`${inputField()} ${errors.title?.message
                    ? "text-red-500 border border-red-500"
                    : "text-black-200 border-white-400"
                    }`} {...register("title")} type="text" />

                <label htmlFor="description" className={`block font-bold text-sm mb-2 ${errors.description?.message ? "text-red-500" : "text-purple-40"}`}>Description : </label>
                {errors.description ? (
                    <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.description?.message}</span>
                ) : null}
                <textarea className={`${inputField()} ${errors.description?.message
                    ? "text-red-500 border border-red-500"
                    : "text-black-200 border-white-400"
                    }`} {...register("description")} rows={4} />

                <label htmlFor="price" className={`block font-bold text-sm mb-2 ${errors.price?.message ? "text-red-500" : "text-purple-40"}`}>Price : </label>
                {errors.price ? (
                    <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.price?.message}</span>
                ) : null}
                <input className={`${inputField()} ${errors.price?.message
                    ? "text-red-500 border border-red-500"
                    : "text-black-200 border-white-400"
                    }`} {...register("price")} type="number" />
                <br />

                <Button color="success">Submit</Button>
            </form>

        </header>
    )
}
