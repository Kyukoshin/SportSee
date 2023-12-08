import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const RadarChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const kindLabels = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };

  const radarData = data.data.map(item => ({
    kind: kindLabels[item.kind],
    value: item.value,
  }));

  // Reverse the order of radarData
  const reversedRadarData = [...radarData].reverse();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={reversedRadarData} margin={{
            top: 25,
            right: 25,
            bottom: 25,
            left: 25,
          }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 12 }} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#FF0101B2" 
          fill="#FF0101B2"
          fillOpacity={0.7}
          
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
