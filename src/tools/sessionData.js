export default class sessionData {
	constructor(data) {
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}
}

export const getWeekDays = (sessions) => {
	const formatedSessions = []

	const daysValue = sessions.map((session) => session.day)

	const weekDays = daysValue.map(element => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][element - 1] || element);

	sessions.forEach((session, index) => {
		formatedSessions.push({
			...session,
			day: weekDays[index],
		})
	})

	formatedSessions.unshift({ day: '', sessionLength: 30 })
	formatedSessions.push({ day: '', sessionLength: 30 })
	return formatedSessions
}