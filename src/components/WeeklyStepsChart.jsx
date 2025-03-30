import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: "Mon", steps: 7500 },
  { day: "Tue", steps: 8500 },
  { day: "Wed", steps: 9500 },
  { day: "Thu", steps: 8000 },
  { day: "Fri", steps: 7200 },
  { day: "Sat", steps: 6900 },
  { day: "Sun", steps: 8800 },
];

const WeeklyStepsChart = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-2xl mb-6">
      <h2 className="text-xl font-semibold mb-4">Weekly Steps Trends</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="steps" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyStepsChart;
