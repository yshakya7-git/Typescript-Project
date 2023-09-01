import * as Tabs from '@radix-ui/react-tabs';
import { inputField } from '../../variants/inputField';
import { Button } from '../buttons/Button';
import { FormDemo } from '../react-hook-form/FormDemo';

export const TabsDemo = () => {
    return (
        <header className="ml-[17rem] mt-[1rem] fixed">
            <Tabs.Root className='flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4' defaultValue='tab1'>
                <Tabs.List className='shrink-0 flex border-b border-mauve6' aria-label='Manage your account'>
                    <Tabs.Trigger className='bg-white flex-1 px-2 h-[30px] flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default' value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger className=' bg-white flex-1 px-2 h-[30px] flex items-center justify-center text-[15px]leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default' value="tab2">Tab 2</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1" className='"grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"'>
                    <p className='text-slate-600 hover:text-blue-600 font-sans font-medium'>Add changes to yours here. <br />
                        Click submit when you're done.</p>
                    <FormDemo />
                </Tabs.Content>

                <Tabs.Content value="tab2" className='"grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"'>
                    <></>
                    <p className='text-slate-600 hover:text-blue-600 font-sans font-medium'>Change your password. Click save when you're done.</p>
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
