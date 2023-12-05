import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class SingleDataRadialBarChart extends PureComponent {
  render() {
    const { data } = this.props;
    const formattedData = [
      {
        name: 'Single Data',
        uv: data*-100,
        pv: 100,
        fill: 'red',
      },
    ];

    const startAngle = 90-(formattedData[0].uv)*3.6 // je prends le start du diag, et je soustris le pourcentage des données converti en degrés

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="70%"
          barSize={10}
          data={formattedData}
          startAngle={startAngle}
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}            
            background={false}
            clockWise={false}
            dataKey="uv"
            cornerRadius={5}
          />
           <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
         
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
