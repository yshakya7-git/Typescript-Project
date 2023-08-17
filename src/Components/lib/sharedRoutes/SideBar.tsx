import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineUser, AiOutlineContacts, AiOutlineArrowDown } from 'react-icons/ai';
import { SideBarItems } from './SideBarItems';
import BANNER from '../../../assets/bg.avif';
import { Link } from 'react-router-dom';
const SideBar = () => {

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubMenuOpen] = useState(true);
    return (
        <div className="flex space-x-6 items-center">
            <div className={`${open ? 'w-60' : 'w-20'} duration-300 h-screen bg-blue-900 p-0 relative`}>
                <div className={`absolute bg-white cursor-pointer rounded-full -right-4 top-14 h-10 w-9 shadow-lg flex justify-center items-center  ${!open && "rotate-180"}`}>
                    <AiOutlineArrowLeft
                        fontSize={20}
                        onClick={() => setOpen(!open)} />
                </div>
                <div className='text-white text-sm flex items-center space-x-4 cursor-pointer p-3'>
                    <div className='flex space-x-4 w-96 p-[12px]'>
                        <AiOutlineUser size={24} />
                        <h1 className={`text-white font-medium text-xl justify-center ${!open && "scale-0"} `}>Admin</h1>
                    </div>
                </div>

                <ul className='p-[12px] justify-center'>
                    {SideBarItems.map((sidebar, index) => (
                        <>
                            <li key={index} className={`text-white text-sm flex items-center space-x-4 cursor-pointer p-3 `}>
                                <span
                                    className='text-2xl block float-left'>
                                    {sidebar.icons ? sidebar.icons : <AiOutlineContacts />}
                                </span>
                                <span
                                    className={`text-base font-medium flex-0.5 ${!open && "scale-0"}`}>
                                    <Link to={sidebar.to}>{sidebar.title}</Link>
                                </span>
                                {sidebar.submenu && open && (
                                    <AiOutlineArrowDown className={`${submenuOpen && "rotate-180"} space-x-reverse`} onClick={() => setSubMenuOpen(!submenuOpen)} />
                                )}
                            </li>

                            {sidebar.submenu && submenuOpen && open && (
                                <ul>
                                    {sidebar.submenuItems.map((subMenuItem, index) => (
                                        <li key={index}
                                            className={`text-white text-xs flex items-center space-x-4 cursor-pointer p-[0.5rem] px-[3.5rem]`}>
                                            <span className={`${!submenuOpen && "scale-0"}`}>
                                                <Link to={subMenuItem.to}>{subMenuItem.title}</Link>
                                            </span>

                                        </li>
                                    ))}

                                </ul>

                            )}
                        </>
                    ))}
                </ul>
            </div>
            <div className='p-0 flex'>
                <img src={BANNER} alt="" />
            </div>
        </div >
    )
}

export default SideBar
