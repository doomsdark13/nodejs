//nodejs
let https = require("https")

const opt = {
	hostname : 'api.github.com',
	port : 443,
	path: '/users/yofri',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}

let request = https.request(opt,(result) => {
	console.log('Got response : ', result.statusCode)
})

request.end()

request.on('error', (e) => {
	console.error(e)
})