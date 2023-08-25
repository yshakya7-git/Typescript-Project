import * as Tabs from '@radix-ui/react-tabs';
import { inputField } from '../../variants/inputField';
import { Button } from '../buttons/Button';
import { ToastDemo } from '../toast/ToastDemo';

export const TabsDemo = () => {
    return (
        <header className="ml-[40rem] mt-[10rem] fixed">
            <ToastDemo />
            <Tabs.Root className='flex-col w-[300px] shadow-black'>
                <Tabs.List className='flex-shrink-0 flex' aria-label='Manage your accoun'>
                    <Tabs.Trigger className=' bg-inherit flex align-middle justify-center text-sm border' value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger className='flex align-middle justify-center text-sm border' value="tab2">Tab 2</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <p>Make changes to your account here. Click save when you're done.</p>
                    <fieldset className='mb-[15px] w-[100%] flex flex-col justify-start'>
                        <label htmlFor="name">Name</label>
                        <input className={`${inputField()}`} type="text" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input className={`${inputField()}`} type="text" />
                    </fieldset>
                    <div className='flex mt-2 pb-2 justify-center'>
                        <Button>Save changes</Button>
                    </div>
                </Tabs.Content>

                <Tabs.Content value="tab2">
                    <p>Change your password. Click save when you're done.</p>
                    <fieldset>
                        <label htmlFor="currentPassword">Current password</label>
                        <input className={`${inputField()}`} type="password" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="newPassword">New Password</label>
                        <input className={`${inputField()}`} type="password" />
                    </fieldset>
                    <div className='flex mt-2 pb-2 justify-center'>
                        <Button color='danger'>Change Password</Button>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </header>
    )
}
