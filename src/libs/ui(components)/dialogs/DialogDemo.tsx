import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../buttons/Button";
import { Cross2Icon } from '@radix-ui/react-icons';
import { FormDemo } from "../react-hook-form/FormDemo";


export const DialogDemo = () => {
    return (
        <header className="ml-[20rem] mt-[2rem]">
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button color="danger">Add+</Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/50 fixed inset-0">
                        <Dialog.Content className="bg-white box-border border-none ml-[50rem] mt-[10rem] shadow-md fixed l-[50%] w-[20vw] h-[32rem] max-width-[25px] p-[25px]">
                            <Dialog.Title className="m-0 text-xm font-bold">Add Products</Dialog.Title>
                            <Dialog.Description className="m-0 text-xs">
                                Make changes to your profile here. Click save when you're done.
                            </Dialog.Description>
                            <FormDemo />
                            <Dialog.Close asChild>
                                <button aria-label="Close" className="inherit border-radius absolute top-[2rem] right-[1rem]">
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>

        </header>
    )
}
