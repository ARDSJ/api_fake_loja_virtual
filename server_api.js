var sleep = require('sleep')
var jsonServer = require('json-server')
var myDb = require('./db.js')()
var server = jsonServer.create()
var middlewares = jsonServer.defaults()
server.use(middlewares)

var router = jsonServer.router(myDb.routes)

server.use(jsonServer.rewriter({
  '/users/login': '/users'
}))

server.use(function (req, res, next) {
	sleep.sleep(1)
	next()
})

server.use(router)
server.listen(4000, function () {
  console.log('Rodando Json Server!!');
})


