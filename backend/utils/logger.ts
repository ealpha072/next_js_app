export {}

const info =  (...params: any[]):void => {
	console.log(...params)
}

const error = (...params: any[]): void => {
	console.log(...params);
}

const logger = { info, error }
export default logger