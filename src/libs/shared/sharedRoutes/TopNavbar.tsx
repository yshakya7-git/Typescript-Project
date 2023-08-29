import { NavLink } from "react-router-dom"
import { TopbarItems } from "./TopbarItems"

export const TopNavbar = () => {
    return (
        <nav className=" flex m-0">
            <header className="mx-auto max-w-screen px-2 sm:px-6 lg:px-[40rem] w-screen bg-blue-900">
                <div className="relative flex h-[4rem] items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-5 p-2">
                            {TopbarItems.map((topbarItems, index) => (
                                <>
                                    <NavLink to={`${topbarItems.to}`} key={index} className={({ isActive }) => (
                                        isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium')}>
                                            <NavLink to={`${topbarItems.to}`}>{topbarItems.title}</NavLink>
                                    </NavLink>
                                </>
                            ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute inset-y-0 right-0 flex space-x-10 items-center pr-2 sm:static sm:inset-auto sm:ml-[] sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </header>
            {/* for mobile  */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>

    )
}
