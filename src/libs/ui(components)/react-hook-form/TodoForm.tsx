import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TodoFormSchema } from "../../validations/TodoFormSchema";
import { Todos } from "../../interface/Todos";
import { inputField } from "../../variants/inputField";
import { Button } from "../buttons/Button";
import { useTodoStore } from "../../store/useTodoStore";
import { useNavigate } from "react-router-dom";


export const TodoForm = () => {
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: { errors } } = useForm<Todos>({
            resolver: yupResolver(TodoFormSchema),
        });

    const onSubmitHandler = handleSubmit((values) => {
        console.log(values)
        setTitle(values.title);
        setDescription(values.description);
        setCategories(values.categories)
        navigate("/todo");
      }
    );

    const { setTitle, setDescription, setCategories } = useTodoStore();
    return (
        <header>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="title" className={`block font-bold text-sm mb-2 ${errors.title?.message ? "text-red-500" : "text-purple-40"}`}>Task :</label>
                {errors.title ? (
                    <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.title?.message}</span>
                ) : null}
                <input className={`${inputField()} ${errors.title?.message
                    ? "text-red-500 border border-red-500"
                    : "text-black-200 ring-2 ring-blue-900"
                    }`} {...register("title")} type="text" onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="description" className={`block font-bold text-sm mb-2 ${errors.description?.message ? "text-red-500" : "text-purple-40"}`}>Description : </label>
                {errors.description ? (
                    <span style={{ color: "red" }} className="text-xs w-[100px] ">{errors.description?.message}</span>
                ) : null}
                <textarea className={`${inputField()} ${errors.description?.message
                    ? "text-red-500 border border-red-500"
                    : "text-black-200 ring-2 ring-blue-900"
                    }`} {...register("description")} rows={4} onChange={(e) => setDescription(e.target.value)} />

                <label htmlFor="categories" className={`block font-bold text-sm mb-2 `}>Categories : </label>
                <select {...register("categories")} onChange={(e) => setCategories(e.target.value)}>
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Not completed">Not Completed</option>
                </select>
                <div className='flex mt-2 pb-2 justify-center'>
                    <Button color="success">Submit</Button>
                </div>

            </form>
        </header>
    )
}
