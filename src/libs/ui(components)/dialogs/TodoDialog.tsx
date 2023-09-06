import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from "../../ui(components)/buttons/Button";
import { TodoForm } from "../../ui(components)/react-hook-form/TodoForm";

export const TodoDialog = () => {
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button color="danger">Add+</Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/50 fixed inset-0">
                        <Dialog.Content className="bg-white box-border border-none ml-[35rem] mt-[2rem] mb-[50rem] shadow-md fixed l-[50%] w-[20vw] h-[32rem] max-width-[25px] p-[25px]">
                            <Dialog.Title className="m-0 text-xm font-bold">Add Todo</Dialog.Title>
                            <Dialog.Description className="m-0 text-xs">
                                Make changes to your profile here. Click save when you're done.
                            </Dialog.Description>
                            <Dialog.Close asChild>
                                <TodoForm />
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <button aria-label="Close" className="inherit border-radius absolute top-[2rem] right-[1rem]">
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}
