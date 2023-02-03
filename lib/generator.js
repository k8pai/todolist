export function listIdGenerator() {
	return (Math.floor(Math.random()*100)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*1000));
}

export function todoIdGenerator() {
	return (Math.floor(Math.random()*1000)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*100))
}