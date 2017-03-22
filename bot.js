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
			if (message.bot_id && self.user.profile.bot_id != message.bot_id) {
				//self.bot.postMessage(message.channel, "Les bots racontent vraiment n'importe quoi", icone)
				///setTimeout(function(){}, 2000);
			}
			else {
		   // self.bot.postMessage(message.channel, 'Je ne comprends pas', icone);
			console.log('réponse envoye');
			}
	}
	
}
