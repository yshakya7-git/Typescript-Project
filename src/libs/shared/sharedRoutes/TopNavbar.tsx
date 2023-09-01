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
