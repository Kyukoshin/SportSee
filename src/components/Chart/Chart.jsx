import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-chart">
<p>{`${payload[0].value} Kg`}</p>
        <p>{`${payload[1].value} Kcal`}</p>
        
      </div>
    );
  }

  return null;
};

export default class Chart extends PureComponent {
  render() {
    const { data } = this.props;
    const sessions = data?.data?.sessions || [];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          barCategoryGap='35%'
          barGap='10'
         
          data={sessions}
          margin={{
            top: 25,
            right: 0,
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
          <YAxis axisLine={false}  tickLine={null} orientation="right"/>
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend verticalAlign="top" align="right" iconType="circle" formatter={(value, entry) => <span style={{ color: 'grey' }}>{value}</span>} wrapperStyle={{position: 'relative', marginTop: '-371px'}}/> */}
          <Bar Bar radius={[20, 20, 0, 0]} maxBarSize={8} dataKey="kilogram" fill="#282D30" name="Poids (kg)" activeBar={<Rectangle fill="#282D30" stroke="#282D30" />} />
          <Bar Bar radius={[20, 20, 0, 0]} maxBarSize={8} dataKey="calories" fill="red" name="Calories brûlées (kCal)"  activeBar={<Rectangle fill="red" stroke="red" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
