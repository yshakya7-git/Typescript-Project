import ABOUT from "../../assets/cover.jpg";
import SideBar from "../lib/sharedRoutes/SideBar";

export const About = () => {
  <SideBar />
  return (

      <div className="relative w-[800px] h-[400px] border-[3px] ml-[20rem]">
        <img src={ABOUT} className="w-scr" />

        <div className="absolute top-[150px] right-2 w-[400px] h-[200px] border-[3px]">
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.........</p>
        </div>
      </div>
  
  )
}
