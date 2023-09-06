import ABOUT from "../../../assets/cover.jpg";

export const About = () => {
  return (
    <header className="ml-[15rem] fixed">
      <div className="relative w-screen">
        <img src={ABOUT} className="min-w-full overflow-hidden" />

        <div className="absolute top-[150px] right-[28rem] w-[400px] h-[200px] border-[3px]">
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.........</p>
        </div>
      </div>
    </header>

  )
}
