import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import Legend from "../../components/Legend/Legend";
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
      // Je récupère les données principales de l'utilisateur en utilisant Promise.all() pour exécuter plusieurs requêtes en parallèle
      const [mainResponse, activity, sessions, performance] = await Promise.all([
        getMainData(userId),
        getActivityData(userId),
        getSessionData(userId),
        getPerformanceData(userId),
      ])

      // Je mets à jour le state data avec les données récupérées
      setData({
        main: mainResponse.data,
        activity,
        sessions,
        performance,
      })
    }
    fetchData()

  }, [])

  console.log(data)



  return (
    <div className="home">
      <Sidebar />
      <div className="info_wrap">
        <Title />
        <div className="info_wrap_block">
          <div className="info_wrap_block_left">
            <div className="info_wrap_block_left_graph">
              <div className="info_wrap_block_left_graph_head">
                Activité quotidienne
                <div>
                  <Legend />
                  <Legend />
                </div>
              </div>

              <div className="info_wrap_block_left_graph_body">
                <Chart />
              </div>
            </div>

            <div className="info_wrap_block_left_stats">
              <div>
                <Graph />
              </div>
              <div>
                <Spider />
              </div>
              <div>
                <Gauge />
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
