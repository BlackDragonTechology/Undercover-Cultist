module.exports = {
  name: "addmaster",
  syntax: "addmaster [mention]/[id]",
  description: "Adds user among the bot masters, allowing him to execute administration commands",
  note: "Administration command",
  permissions: "",
  master: true,
  aliases: [],
  legend: "mention, id",
  category: "administrative",
  async execute(message, args, client, Config, Masters, Bans, Notes, sequelize) {
    try {

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;

      let id
      let member;
      if (!isNaN(args[0])) {
        id = args[0];
        member = await message.guild.members.fetch(id);
        if (member == undefined) {
          message.reply("This ID does not seem to belong to any member");
        }
      } else {
        if (!message.content.includes("<@")) {
          message.reply("I can't identify the user from this, sorry");
        }
        member = message.mentions.members.first();
        id = member.id;
      }
      await sequelize.query(`INSERT INTO Masters (user, promoted_by, date) VALUES ('${id}', '${message.author.id}', '${today}');`);
      message.reply(`<@${id}> is now a bot Master.`);
      return;

    } catch (e) {
      console.log(e);
      if (e.name === "SequelizeUniqueConstraintError") {
        message.reply("That user already is a bot Master.");
        return;
      }
      return e;
    }
  },
};