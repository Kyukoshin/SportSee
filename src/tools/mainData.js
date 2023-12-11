export default class mainData {
	constructor(data) {
		this.data = data
		this.userInfos = data.userInfos
		this.firstName = this.userInfos.firstName
		this.todayScore = data.todayScore ? data.todayScore : data.score //check quelle variable existe
		this.keyData = data.keyData
	}

	getFirstName() {
		return this.firstName
	}

	getTodayScore() {
		return this.todayScore;
	}

	getKeyData() {
		return this.keyData
	}
}