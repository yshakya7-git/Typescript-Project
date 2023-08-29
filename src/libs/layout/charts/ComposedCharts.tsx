import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { lineData } from "../randomData/lineData"

export const ComposedCharts = () => {
    return (
        <header>
            <h3>ComposedCharts</h3>
            <ResponsiveContainer width={730} height={250}>
                <ComposedChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="amount" fill="#868686" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>

        </header>
    )
}
