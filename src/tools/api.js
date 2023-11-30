import axios from 'axios'

import mainData from './mainData'
import activityData from './activityData'
import sessionData from './sessionData'
import performanceData from './performanceData'

export const getMainData = async (user) => {
    const mainDataUrl = `http://localhost:3000/user/${user}`;
    const mainDataUrlMocked = '/userMainData.json';
    let errorCode;

    try {
        const userMain = mock ? await axios.get(mainDataUrlMocked) : await axios.get(mainDataUrl);

        const userMainData = new mainData(mock ? userMain.data.find(({ id }) => id === parseInt(user)) : userMain.data.data);

        return { data: userMainData };
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            errorCode = error.code;
            console.log('Network issue, code:', errorCode);
        } else {
            console.error('Unexpected error:', error);
        }

        return { data: null, errorCode };
    }
};

export const getActivityData = async (user) => {
    const activityDataUrl = `http://localhost:3000/user/${user}/activity`;
    const activityDataUrlMocked = '/userActivityData.json';
    let errorCode;

    try {
        const userMain = mock ? await axios.get(activityDataUrlMocked) : await axios.get(activityDataUrl);

        const userMainData = new activityData(mock ? userMain.data.find(({ id }) => id === parseInt(user)) : userMain.data.data);

        return { data: userMainData };
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            errorCode = error.code;
            console.log('Network issue, code:', errorCode);
        } else {
            console.error('Unexpected error:', error);
        }

        return { data: null, errorCode };
    }
};

export const getSessionData = async (user) => {
    const sessionDataUrl = `http://localhost:3000/user/${user}/average-sessions`;
    const sessionDataUrlMocked = '/userAverageSessionData.json';
    let errorCode;

    try {
        const userMain = mock ? await axios.get(sessionDataUrlMocked) : await axios.get(sessionDataUrl);

        const userMainData = new sessionData(mock ? userMain.data.find(({ id }) => id === parseInt(user)) : userMain.data.data);

        return { data: userMainData };
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            errorCode = error.code;
            console.log('Network issue, code:', errorCode);
        } else {
            console.error('Unexpected error:', error);
        }

        return { data: null, errorCode };
    }
};

export const getPerformanceData = async (user) => {
    const performanceDataUrl = `http://localhost:3000/user/${user}/performance`;
    const performanceDataUrlMocked = '/userPerformanceData.json';
    let errorCode;

    try {
        const userMain = mock ? await axios.get(performanceDataUrlMocked) : await axios.get(performanceDataUrl);

        const userMainData = new performanceData(mock ? userMain.data.find(({ id }) => id === parseInt(user)) : userMain.data.data);

        return { data: userMainData };
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            errorCode = error.code;
            console.log('Network issue, code:', errorCode);
        } else {
            console.error('Unexpected error:', error);
        }

        return { data: null, errorCode };
    }
};

