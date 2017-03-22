const SlackBot = require('slackbots');

module.exports = function(params) {
	this.bot = null;
	var self = this;

	self.connect=function() {
		
		self.bot = new SlackBot(params);
		self.bot.on('start', self.onStart);
		self.bot.on('message', self.onEvent);
	}
	self.onStart = function() {
		// Le bot est connecté
		var params = {
        	icon_emoji: ':dog:'
    	};
		self.bot.postMessageToUser('ludo_david', 'meow!, fichier bot', params); 
	}
	self.onEvent = function(event) {
		//reception d'un message
		console.log(event);
	}
	
}