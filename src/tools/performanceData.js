export default class performanceData {
	constructor(data) {
		this.data = data.data
	}

	getData() {
		return this.data
	}
}

export const getPerformanceDataValue = (data) => {
	let dataArray = []

	for (let i = 0; i < data.length; i++) {
		dataArray.push({
			kind: data[i].kind,
			A: data[i].value,
		})
	}

	let maxDataValue = Math.max(...dataArray.map((item) => item.A))
	for (let j = 0; j < dataArray.length; j++) {
		// Je crée une nouvelle propriété fullMark dans chaque objet de dataArray afin de pouvoir y stocker la valeur maximale de data.value
		dataArray[j].maxScore = maxDataValue
	}
	return dataArray
}