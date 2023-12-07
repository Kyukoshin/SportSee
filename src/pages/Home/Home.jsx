import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import Graph from "../../components/Graph/Graph";
import Chart from "../../components/Chart/Chart";
import Spider from "../../components/Spider/Spider";
import Gauge from "../../components/Gauge/Gauge";
import Consumed from "../../components/Consumed/Consumed";

import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getMainData, getActivityData, getSessionData, getPerformanceData } from '../../tools/api.js'

const Home = () => {

  const { userId } = useParams()

  if (userId !== '12' && userId !== '18') {
    return <Navigate to="/*" />;
  }


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
                <div>
                  <p><span className="greyDot"></span>Poids (kg)</p>
                  <p><span className="redDot"></span>Calories brûlées (kCal)</p>
                </div>
              </div>
              

              <div className="info_wrap_block_left_graph_body">
                <Chart data={userActivity} />
              </div>
            </div>

            <div className="info_wrap_block_left_stats">
              <div className="graph_wrap">
                <p className="graph_legend">Durée moyenne des sessions</p>
                <Graph sessions={sessionLength} />
              </div>

              <div className="spider_wrap">
                <Spider data={performanceData.data} />
              </div>

              <div className="gauge_wrap">
                <p className="gauge_legend_1">Score</p>
                <p className="gauge_legend_2">{todayScore * 100}%</p>
                <p className="gauge_legend_3">de votre objectif</p>
                <Gauge data={todayScore} />
              </div>
            </div>
          </div>

          <div className="info_wrap_block_right">

            <Consumed index={0} data={userNutritionData.calorieCount} />

            <Consumed index={1} data={userNutritionData.proteinCount} />

            <Consumed index={2} data={userNutritionData.carbohydrateCount} />

            <Consumed index={3} data={userNutritionData.lipidCount} />

          </div>
        </div>
      </div>
    </div>
  );
}
export default Home
