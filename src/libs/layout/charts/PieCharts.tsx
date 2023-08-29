import { ResponsiveContainer, PieChart, Pie } from "recharts";

import { pieData1, pieData2 } from "../randomData/pieData";
export const PieCharts = () => {
    return (
        <header>
            <h3>PieCharts</h3>
            <ResponsiveContainer width={730} height={250} >
                <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <Pie data={pieData1} dataKey="value" nameKey="name" cx="50%" outerRadius={50} fill="#8884d8"  label ></Pie>
                    <Pie data={pieData2} dataKey="value" nameKey="name" cx="50%" innerRadius={50} fill="#82ca9d" label></Pie>
                </PieChart>
            </ResponsiveContainer>
        </header>
    )
}
