var faker = require('faker')
var ip = require("ip");

module.exports = {
	generateFakeVinyls:function(){
		var data = {vinyl:[]}
	  
		for (var i = 0; i < 1000; i++) {
			data.vinyl.push({
				id:  i,
				albumName:  faker.name.findName(),
				artistName: faker.name.findName(),
				description: faker.name.jobDescriptor(), 
				value: faker.random.number().toString().substring(0, 3),
				//coverImgUrl: faker.image.imageUrl()
				coverImgUrl: this.getLocalImageCover()
			})
		}
	  	
		return data.vinyl;
	
	},
	getLocalImageCover:function(){
		var randomNum = Math.random() * (10 - 1) + 1;
		var coverImgLocatUrl = 'http://' + ip.address() + ':5000/capa' + parseInt(randomNum) + '.jpg';
		return coverImgLocatUrl; 

	}

}
