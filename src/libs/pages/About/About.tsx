import ABOUT from "../../../assets/cover.jpg";
import SideBar from "../../shared/sharedRoutes/SideBar";

export const About = () => {
  <SideBar />
  return (
    <div className="ml-[40rem] mt-[10rem] fixed">
      <div className="relative">
        <img src={ABOUT} className="w-scr" />

        <div className="absolute top-[150px] right-2 w-[400px] h-[200px] border-[3px]">
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.........</p>
        </div>
      </div>
    </div>

  )
}
