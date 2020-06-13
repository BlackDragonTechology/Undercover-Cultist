const Discord = require('discord.js');
module.exports = {
name: 'server',
description: 'shows server info',
execute(message, args, client){


  
  const embed = new Discord.MessageEmbed()
.setColor('#005E1F')
  .setTitle(`${message.guild.name}`) 	
  .setAuthor('', '') 	
  .setDescription('Here is the latest report') 
  .setThumbnail(message.guild.iconURL()) 
  .addField('Owner', message.guild.owner.user.tag) 	
  .addField('Region', message.guild.region)
  .addField('Created', message.guild.createdAt)	
  .addField('Members', message.guild.memberCount) 	
  .addField('Bots', message.guild.members.cache.filter(member => member.user.bot).size)
  .addField('Roles', message.guild.roles.cache.size)
  .addField('Channels', message.guild.channels.cache.size)
  .setTimestamp() 	
  .setFooter('We could benefit from having someone on the inside', client.user.avatarURL());
  message.channel.send(embed);
  
},
};