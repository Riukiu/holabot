const SlackBot = require('slackbots');

module.exports = function(params) {
	this.bot = null;
	var self = this;
	var icone = {icon_emoji: ':dog:'};

	self.connect=function() {
		
		self.bot = new SlackBot(params);
		self.bot.on('start', self.onStart);
		self.bot.on('message', self.onEvent);
	}
	self.onStart = function() {
		// Le bot est connecté
		self.bot.getUser(self.bot.self.name).then(function(user) {
			self.user = user;
		});
		console.log("Started");
		self.bot.postMessageToUser('ludo_david', 'meow!, ca marche', icone); 
		self.bot.postMessageToChannel('general', 'meow!', icone);
	}
	self.onEvent = function(event) {
		//reception d'un message
		console.log("Event recu");
		if (event.type == "message") {
			console.log("message recu");
			self.onMessage(event);
			
		}
	}
	self.onMessage = function(message) {
			if (message.bot_id) {
				if (self.user.profile.bot_id != message.bot_id) {
				setTimeout(function() {
					self.bot.postMessage(message.channel, ":rocket:'" ,icone);
				}, 2000);
				}
			}
			else {
				setTimeout(function() {
		   			self.bot.postMessage(message.channel, 'Je ne comprends pas', icone);
		   		}, 2000);
			console.log('réponse envoye');
			}
	}
	
}
