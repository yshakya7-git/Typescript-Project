import { NavLink } from "react-router-dom"
import { TopbarItems } from "./TopbarItems"

export const TopNavbar = () => {
    return (
        <nav className="flex">
            <header className="w-screen bg-blue-900">
                <div className="flex h-[3rem] items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            {TopbarItems.map((topbarItems, index) => (
                                <NavLink to={`${topbarItems.to}`} key={index} className={({ isActive }) => (
                                    isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium')}>
                                    <NavLink to={`${topbarItems.to}`}>{topbarItems.title}</NavLink>
                                </NavLink>
                            ))}
                            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}
                        </div>
                    </div>
                </div>
            </header>
        </nav>

    )
}
