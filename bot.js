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
		self.bot.getUser(self.bot.self.name).then(function(user) {
			this.user = user;
		});
		var icone = {icon_emoji: ':dog:'};
		console.log("Started");
		self.bot.postMessageToUser('ludo_david', 'meow!, ca marche', icone); 
		self.bot.postMessageToChannel('general', 'meow!', icone);
	}
	self.onEvent = function(event) {
		//reception d'un message
		console.log(event);
		if (event.type == "message") {
			self.onMessage(event);
			console.log("message recu");
		}
	}
	self.onMessage = function(message) {
		    self.bot.postMessage(message.channel, 'Je ne comprends pas', icone);
			console.log('réponse envoye');
	}
	
}
