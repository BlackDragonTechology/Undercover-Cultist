module.exports = { 	
  name: 'kick', 	
  description: 'kick [mention]/[id]', 	
  action: "Kicks the member from the server",
  note: "You need the `KICK_MEMBERS` permission for this command",
  legend: "mention, id",
  async execute(message, args) { 		
     //try{
    if(!message.member.hasPermission("KICK_MEMBERS")){
       message.reply(`SecurityException: \`Missing permission\``);
      return;
    }
       if(args[0] == null){
         message.channel.send(`NullPointerException: \`You must provide an argument\``);
        return;
      }
    let member;
      
      let id
if(!isNaN(args[0])){
  id = args[0];
	member = await message.guild.members.fetch(id);
  if(member == undefined){
    message.reply("This ID does not seem to belong to any member");
  }
}else{
  if(!message.content.includes("<@")){
    message.reply("I can't identify the user from this, sorry");
  }
  member = message.mentions.members.first();
  id = member.id;
} 	
      if(!member.kickable){
         message.reply("This member is above my might, I can't ban him");
       return;
      }
      args.shift();
       member.kick(args.join(" "));
    message.reply(`The fake cultist <@${id}> was banished from this sacred place.`);
    /*}catch(err){
      console.log(err);
      message.reply("WTF gimme me permissions bruh");
    }	*/}, };
