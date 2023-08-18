import ABOUT from "../../../assets/bg.avif";

export const AboutImage = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <img src={ABOUT} className="w-screen" />

        <div className="absolute top-[150px] right-2 w-[400px] h-[200px] border-[3px]">
          <h3 className="text-white font-medium text-xl text-center">Explore the world with us.</h3>
        </div>
      </div>
    </>
  )
}