const BaseCommand = require('../../utils/structures/BaseCommand');
const redditimage = require('reddit.images')
const discord = require('discord.js')
module.exports = class DogCommand extends BaseCommand {
  constructor() {
    super('dog', 'animals', []);
  }

  async run(client, message, args) {
    const msg = await message.channel.send("Please wait for a dog")
    const subreddits = ["dog"]
    const duck = await redditimage.fetch({
        type: "custom",
        total: 1,
        subreddit: [subreddits],
    })
    const helpEmbed = new discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle("Dog")
          .setImage(duck[0].image)
          .setFooter(`From r/dog`)
          await msg.edit("Heres a dog",helpEmbed)
      }
  };
  