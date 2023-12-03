import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBar = (props) => {
  const { x, y, width, height } = props;
  return <Rectangle x={x} y={y} width={10} height={height} fill="grey" radius={[10, 10, 0, 0]} />;
};

const CustomBar2 = (props) => {
  const { x, y, width, height } = props;
  return <Rectangle x={x} y={y} width={10} height={height} fill="red" radius={[10, 10, 0, 0]} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-chart">

        <p>{`${payload[1].value} Kg`}</p>
        <p>{`${payload[0].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};

export default class Chart extends PureComponent {
  render() {
    const { data } = this.props;
    const sessions = data?.data?.sessions || [];

    console.log(sessions);


    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          barCategoryGap={100}
          barGap={1000}
          data={sessions}
          margin={{
            top: 25,
            right: 25,
            left: 25,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={null}
            tickFormatter={(value, index) => index + 1}
          />
          <YAxis axisLine={false} tickLine={null} orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" iconType="circle" stroke="white" />
          <Bar dataKey="calories" fill="red" name="Calories brûlées (kCal)" shape={<CustomBar2 />} activeBar={<Rectangle fill="red" stroke="red" />} />
          <Bar dataKey="kilogram" fill="grey" name="Poids (kg)" shape={<CustomBar />} activeBar={<Rectangle fill="grey" stroke="grey" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
