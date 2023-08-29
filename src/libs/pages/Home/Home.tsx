import { ComposedCharts } from "../../layout/charts/ComposedCharts"
import { LineCharts } from "../../layout/charts/LineCharts"
import { PieCharts } from "../../layout/charts/PieCharts"


export const Home = () => {
  return (
    <header className="ml-[20rem] mt-[2rem]">
      <LineCharts />
      <PieCharts />
      <ComposedCharts />
    </header>
  )
}
