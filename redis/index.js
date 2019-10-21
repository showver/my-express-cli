// import redis from 'redis'
var redis = require('redis');

var client = redis.createClient(6379, '127.0.0.1')
// client.auth('redis')
client.on('connect', () => {
  console.log( 'redis连接成功:' + new Date())
})
client.on('reconnecting', () => {
  console.log('redis重新连接:' + new Date())
})
client.on('error', function (err) {
  console.log('Error ' + err)
})

module.exports = client;
// export default client