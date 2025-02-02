"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "January",
    visit: 400,
    click: 240,
  },
  {
    name: "February",
    visit: 300,
    click: 139,
  },
  {
    name: "March",
    visit: 200,
    click: 380,
  },
  {
    name: "April",
    visit: 278,
    click: 390,
  },
  {
    name: "May",
    visit: 189,
    click: 480,
  },
  {
    name: "June",
    visit: 239,
    click: 380,
  },
  {
    name: "July",
    visit: 349,
    click: 430,
  },
  {
    name: "August",
    visit: 239,
    click: 130,
  },
  {
    name: "September",
    visit: 649,
    click: 830,
  },
  {
    name: "October",
    visit: 649,
    click: 530,
  },
  {
    name: "November",
    visit: 849,
    click: 630,
  },
  {
    name: "December",
    visit: 949,
    click: 630,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Yearly Summary</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#f5f6fa", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#0097e6" strokeDasharray="12 5" />
          <Line type="monotone" dataKey="click" stroke="#40739e" strokeDasharray="31 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart