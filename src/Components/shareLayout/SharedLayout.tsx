import { Outlet } from "react-router-dom"
import SideBar from "../lib/sharedRoutes/SideBar"

export const SharedLayout = () => {
  return (
    <div className="flex">
        <SideBar />
        <Outlet />
    </div>
  )
}
