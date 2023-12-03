import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import Graph from "../../components/Graph/Graph";
import Chart from "../../components/Chart/Chart";
import Spider from "../../components/Spider/Spider";
import Gauge from "../../components/Gauge/Gauge";
import Consumed from "../../components/Consumed/Consumed";

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMainData, getActivityData, getSessionData, getPerformanceData } from '../../tools/api.js'

const Home = () => {

  const { userId } = useParams()

  const [data, setData] = useState({
    main: null,
    activity: null,
    sessions: null,
    performance: null
  });

  useEffect(() => {
    const fetchData = async () => {
      const [mainResponse, activity, sessions, performance] = await Promise.all([
        getMainData(userId),
        getActivityData(userId),
        getSessionData(userId),
        getPerformanceData(userId),
      ])

      setData({
        main: mainResponse.data,
        activity,
        sessions,
        performance,
      })
    }
    fetchData()

  }, [])

  //console.log(data)

  const firstName = data.main ? data.main.getFirstName() : ''
  const userNutritionData = data.main ? data.main.getKeyData() : []
  const todayScore = data.main ? data.main.getTodayScore() : 0
  const userActivity = data.activity ? data.activity : []
  const sessionLength = data.sessions ? data.sessions : []
  const performanceData = data.performance ? data.performance : []

  // console.log("User Nutrition Data:", userNutritionData);
  // console.log("Today's Score:", todayScore);
  // console.log("User Activity:", userActivity);
  // console.log("Session Length:", sessionLength);
  // console.log("Performance Data All:", performanceData.data);

  return (
    <div className="home">
      <Sidebar />
      <div className="info_wrap">
        <Title name={firstName} />
        <div className="info_wrap_block">
          <div className="info_wrap_block_left">
            <div className="info_wrap_block_left_graph">
              <div className="info_wrap_block_left_graph_head">
                Activité quotidienne
              </div>

              <div className="info_wrap_block_left_graph_body">
                <Chart  data={userActivity}/>
              </div>
            </div>

            <div className="info_wrap_block_left_stats">
              <div style={{ background: '#FF0000' }}>
                <Graph sessions={sessionLength}/>
              </div>
              <div style={{ background: '#282D30' }}>
                <Spider data={performanceData.data}/>
              </div>

              <div>
                <Gauge score={todayScore}/>
              </div>
            </div>
          </div>

          <div className="info_wrap_block_right">

            <Consumed />

            <Consumed />

            <Consumed />

            <Consumed />

          </div>
        </div>
      </div>
    </div>
  );
}
export default Home
