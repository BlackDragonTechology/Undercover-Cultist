module.exports = { 	
  name: 'cardback', 	
  description: 'cardback [nothing]', 
  action: "Sends cardback texture",
  note: "",
  legend: "nothing",
  execute(message, args) { 		
	
	message.channel.send("Cardback",{
		files:["http://underhand.clanweb.eu/res/Cardback.png"]
	});
	}, };