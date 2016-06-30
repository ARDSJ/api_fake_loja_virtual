var fakeObj = require('./fake_objects.js')

module.exports = function() { 

	this.routes = {
		"products":fakeObj.generateFakeVinyls(),
		"users":[{"email": "teste", "firstName": "teste", "lastName": "teste", "password": "teste", "phone": 64646767764646,"username":"teste","id": 1
		  }],
		"users/login":[],
		"payment":[]
	}

	return this;
}
