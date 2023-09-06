import { useTodoStore } from "../../store/useTodoStore";
import { TodoDialog } from "../../ui(components)/dialogs/TodoDialog";

export const Todo = () => {

    const { title, description, categories } = useTodoStore();
    return (
        <header className="ml-[20rem] mt-[2rem]">
            <TodoDialog />
            <h2 className="my-2">Title : {title}</h2>
            <h2 className="my-2">Description : {description}</h2>
            <h2 className="my-2">Categories : {categories}</h2>
        </header>
    )
}
