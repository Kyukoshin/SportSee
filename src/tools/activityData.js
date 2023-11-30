export default class activityData {
	constructor(data) {
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getDates() {
		const dates = this.sessions.map((session) => session.day)
		return dates
	}
}

export const monthTickFormatter = (tick) => {
	const date = new Date(tick)

	return date.getDate()
}