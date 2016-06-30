var fakeObj = require('./fake_objects.js')

module.exports = function() { 

	this.routes = {
		"v1/vinyls":fakeObj.generateFakeVinyls(),
		"v1/users":[{"email": "teste", "firstName": "teste", "lastName": "teste", "password": "teste", "phone": 64646767764646,"username":"teste","id": 1
		  }],
		"v1/users/login":[],
		"v1/payment":[]
	}

	return this;
}
