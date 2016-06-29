var fakeObj = require('./fake_objects.js')

module.exports = function() { 

	this.routes = {
		"getListVinyls":fakeObj.generateFakeVinyls(),
		"users":[],
		"users/login":[],
		"payment":[]
	}

	return this;
}
