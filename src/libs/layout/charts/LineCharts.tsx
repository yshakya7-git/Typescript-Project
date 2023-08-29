import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { lineData } from "../randomData/lineData";

export const LineCharts = () => {
    return (
        <div>
            <h3>Line Chart</h3>
            <ResponsiveContainer width={500} height={300}>
                <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
