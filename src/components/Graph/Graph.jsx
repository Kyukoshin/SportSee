import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class SessionChart extends PureComponent {

  render() {
    const { sessions } = this.props;
    const data = sessions && sessions.data && sessions.data.sessions ? sessions.data.sessions : [];

    
if (!data) {  
  console.error("Sessions data is undefined or missing.");
  return null;
}

console.log(data);

const renderLegend = () => {
	return <p className="sessionLegend">Durée moyenne des sessions</p>
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip-sessions">
				<p>{`${payload[0].value} min`}</p>
			</div>
		)
	}

	return null
}

const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={1500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="day" axisLine={false} tickLine={null} stroke="white" tickFormatter={(value, index) => dayNames[index]}/>
          
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} />
          <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SessionChart;
