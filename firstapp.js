//nodejs

//connect to github
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

let request = https.request(opt,(response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		let profile = JSON.parse(body)
		console.log(profile.avatar_url)
	})
})

request.end()

request.on('error', (e) => {
	console.error(e)
})

//get the data
