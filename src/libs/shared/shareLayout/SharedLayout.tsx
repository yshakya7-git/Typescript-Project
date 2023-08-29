import { Outlet } from "react-router-dom"
import SideBar from "../sharedRoutes/SideBar"
import { TopNavbar } from "../sharedRoutes/TopNavbar"

export const SharedLayout = () => {
  return (
    <div>
        <SideBar />
        <TopNavbar />
        <Outlet />
    </div>
  )
}
