export interface manCommandInt {
  name: String;
  description: String;
  parameters?: String;
}

export const manCommands: manCommandInt[] = [
  {
    name: 'about',
    description:
      "This command generates an embed message that provides a link to Becca's source code, the date she was created, the number of commands she can perform, and her favourite colour. The embed is sent to the channel the command message came from.",
  },
  {
    name: 'adventure',
    description:
      'This command will generate a text based adventure dungeon. To begin a new dungeon, pass start as the [action]. The dungeon take you room by room, with each room having a [room] id value and directions to move. Move to the next room by passing move as the [action], the [room] id provided, and the cardinal [direction] you want to move. Each room embed includes a prefilled move command to copy-paste.',
    parameters: '[action (start/move)] [?room] [?direction]',
  },
  {
    name: 'art',
    description:
      'This command returns an embed containing a Becca art! Many thanks to our wonderful artist contributors.',
  },
  {
    name: 'ban',
    description:
      'This command requires that the user sending it has the "Ban Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command bans [@username] from the server. If the becca!config set logs_channel [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the ban, the name of the banned user, and the reason provided. If no reason was provided, the embed will state that. Because of the permanent nature of bans, she will require confirmation before taking action.',
    parameters: '[@username] [?reason]',
  },
  {
    name: 'becca',
    description:
      "This command returns an embed containing information on Becca's character.",
  },
  {
    name: 'bugreport',
    description:
      'This command returns an embed containing a link to the GitHub issue selection page.',
  },
  {
    name: 'cat',
    description:
      'This command sends a random string of letters of a random length, to simulate a cat walking across your keyboard.',
  },
  {
    name: 'challenge',
    description:
      'This command walks the user through a series of programming based challenge questions. To begin a new challenge, pass start as the [action]. Becca will return a challenge embed, which includes the question and challenge id. To solve the challenge, pass solve as the [action], with the challenge [id] and the [answer]. She will respond with either correct or incorrect, and an explanation. If correct, she provides the [id] for the next challenge. To get that challenge, pass request as the [action] with the new [id].',
    parameters: '[action (start/request/solve)] [?id] [?answer]',
  },
  {
    name: 'close',
    description:
      'This command requires the user to have the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission to use this command. Otherwise, she deletes the channel this command is used in, and logs the deletion to the becca!config set channel logs [#channel] option.',
  },
  {
    name: 'compliment',
    description:
      'Provides a little compliment to cheer you up. Compliments obtained from freeCodeCamp.',
  },
  {
    name: 'config',
    description:
      'This command lists the current server configuration, for logging channels etc. For setting these values, please view the <a routerLink="/config">Configure Your Server</a> section. This command is locked to moderators with the Manage Server permission. The Discord user associated with the process.env.OWNER_ID can access this command regardless of permissions, but should only do so for the sake of development purposes.',
    parameters: '[?set] [?key] [?value]',
  },
  {
    name: 'contributors',
    description:
      "This command returns an embed with a list of recognised contributors to Becca's code. Thank you all for your efforts to make Becca Lyria great!",
  },
  {
    name: 'dnd',
    description:
      'This command generates an embed containing the currently available Dungeons and Dragons commands.',
  },
  {
    name: 'dndclass',
    description:
      ' This command generates an embed containing information about the Dungeons and Dragons [class].',
    parameters: '[class]',
  },
  {
    name: 'dndmon',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [monster].',
    parameters: '[monster]',
  },
  {
    name: 'dndrace',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [race].',
    parameters: '[race]',
  },
  {
    name: 'dndschool',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [school] of magic.',
    parameters: '[school]',
  },
  {
    name: 'dndspell',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [spell].',
    parameters: '[spell]',
  },
  {
    name: 'echo',
    description:
      'This command will look for the guild with the [guild] id and the channel in that guild with the [channel] id. If the guild and its channel are found, the command will send the [message] to that channel. This command is locked to the OWNER_ID account to prevent spam.',
    parameters: '[guild] [channel] [message]',
  },
  {
    name: 'fact',
    description: 'This command generates an embed containing a fun fact!',
  },
  {
    name: 'fortune',
    description:
      "This command will send a message to the channel the command came from. The message will contain a random fortune cookie quote from the list provided in Becca's code.",
  },
  {
    name: 'github',
    description:
      'This command returns an embed containing profile information for the provided GitHub [user].',
    parameters: '[user]',
  },
  {
    name: 'guess',
    description:
      'This command starts a game of Guess the Number. Becca will generate a number between 1 and 1000. Players have ten seconds to submit guesses, then she will announce the winner based on the closest guess.',
  },
  {
    name: 'habitica',
    description:
      'This command returns an embed containing profile information for the provided Habitica user. [id] is the userID, *not* the user name.',
    parameters: '[id]',
  },
  {
    name: 'help',
    description:
      'This command returns an embed containing a list of available commands. If the optional [command] parameter is passed, Becca will return the description for that command (or an error, if that command does not exist).',
    parameters: '[?command]',
  },
  {
    name: 'hpchar',
    description:
      'This command returns an embed containing information on the [name] Harry Potter character.',
    parameters: '[name]',
  },
  {
    name: 'hpsort',
    description:
      'This command randomly sorts you into a Hogwarts house and returns an embed containing information on that house.',
  },
  {
    name: 'hpspell',
    description:
      'This command returns an embed containing information on the [name] Harry Potter spell. Alternatively, pass "random" as the value for [name] to get a random spell.',
    parameters: '[name]',
  },
  {
    name: 'http',
    description:
      'This command accesses the HTTP Cat API and returns a cat photo for the given [status].',
    parameters: '[status]',
  },
  {
    name: 'invite',
    description:
      'This command returns an embed containing the link to invite Becca to a Discord server.',
  },
  {
    name: 'jobs',
    description:
      'This command generates a LinkedIn job search URL - the optional [location] parameter narrows down the search by the given location.',
    parameters: '[?jobs]',
  },
  {
    name: 'joke',
    description: 'This command tells you a silly joke!',
  },
  {
    name: 'kick',
    description:
      'This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command kicks [@username] from the server. If the becca!config set channel logs [#channel] option is set, she will send an embed to that channel. The embed will contain the name of the user performing the kick, the name of the kicked user, and the reason provided. If no reason was provided, the embed will state that.',
    parameters: '[@username] [?reason]',
  },
  {
    name: 'kirby',
    description:
      'This command sends a message to the channel the command came from. The message contains Kirby doing a little dance.',
  },
  {
    name: 'leave',
    description:
      'Pass a server ID value for server, and Becca will leave that server. This command is locked to the Discord user associated with the process.env.OWNER_ID value.',
    parameters: '[server]',
  },
  {
    name: 'level',
    description:
      "This command sends an embed containing the [user]'s experience points and current level. If no parameter is passed, it will return the message author's level.",
    parameters: '[?user]',
  },
  {
    name: 'list',
    description:
      'This command returns embed(s) containing a list of the servers Becca is in, and the owner information for each server.',
  },
  {
    name: 'listeners',
    description:
      'This command returns an embed containing information on the various listener type features Becca offers.',
  },
  {
    name: 'magic',
    description:
      'This command querys the Magic: The Gathering API for cards that match [cardname]. Becca will send a message to the channel the message contains to confirm the command was received and the search was started. For each card she finds, Becca sends an embed containing the card information. She sends a notification after 30 seconds, when the search is complete. NOTE: The API can be slow to respond so this command may take some time.',
    parameters: '[cardname]',
  },
  {
    name: 'maths',
    description:
      'This command takes the [problem] and evaluates it, returning the calculated result. If the expression is invalid, Becca will return an error.',
    parameters: '[problem]',
  },
  {
    name: 'maze',
    description:
      'This command walks the user through a series of programming based challenge questions. To get a maze, pass request as the [action]. Becca will return a maze embed, which includes information about the maze and its id. To solve the maze, pass solve as the [action], with the maze [id] and the [answer]. The [answer] should be a null-space string of cardinal directions ("NEEESSWN"). Becca will respond with either correct or incorrect, and an explanation.',
    parameters: '[action request/solve] [?id] [?direction]',
  },
  {
    name: 'motivation',
    description:
      'This command returns a motivational quote to raise your spirits. Quotes are obtained from freeCodeCamp.',
  },
  {
    name: 'piglatin',
    description:
      'This command takes a sentence as a space-delimited [string] and returns an embed containing the original sentence and the sentence translated into Pig Latin.',
    parameters: '[string]',
  },
  {
    name: 'ping',
    description:
      'This command will generate the latency for Becca. She will send a response back with the communication time in milliseconds.',
  },
  {
    name: 'pokename',
    description:
      "This command querys the Pokemon API. If Becca finds a Pokemon that matches the name provided, she will send an embed containing the Pokemon's name, number, and image. If she cannot find a Pokemon, she will send a message notice.",
    parameters: '[name]',
  },
  {
    name: 'pokenum',
    description:
      'This command querys the Pokemon API. If Becca finds a Pokemon that matches the number provided, she will send an embed containing the Pokemon\'s name, number, and image. If no Pokemon is found, she will send a message notice. As an alternative, sending "random" instead of a number will cause Becca to return a random Pokemon.',
    parameters: '[number]',
  },
  {
    name: 'privacy',
    description: "This command provides information on Becca's privacy policy.",
  },
  {
    name: 'profile',
    description: `This command uses the database to create and store social media profile cards for a user. Calling the command with no parameters will return your profile card. Calling the command with an [@username] mention will return that user's profile card. Calling the command with a [website] and [url] will add that link to your profile card under that website name. Calling the command with [website] "remove" will remove the [website] value from your profile card.`,
    parameters: '[?website] [?url] [?@username]',
  },
  {
    name: 'restrict',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will set the [@username]'s role provided in the becca!config set role restricted [@role] option, and remove all other roles. If the role option is not set, Becca will send a message to notify the user. If the becca!config set channel logs [#channel] option is not set, Becca will send a message to notify the user. Otherwise, she will send an embed to the log channel. The embed will contain the name of the user performing the command, the name of the restricted user, and the reason provided. If no reason was provided, the embed will state that. Becca will then create a channel under the Appeals category (if Appeals category does not exists, Becca will create one with the correct permissions), which only the channel moderators and the restricted user can access.`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'riddle',
    description:
      'This command walks the user through a series of programming based challenge questions. To begin a new challenge, pass start as the [action]. Becca will return a riddle embed, which includes the question and riddle id. To solve the riddle, pass solve as the [action], with the riddle [id] and the [answer]. Becca will respond with either correct or incorrect, and an explanation. If correct, she provides the [id] for the next riddle. To get that challenge, pass request as the [action] with the new [id].',
    parameters: '[action (start/request/solve)] [?id] [?answer]',
  },
  {
    name: 'role',
    description:
      'This command accepts the name of a role as [role]. If that role exists and is in the server self_role list, Becca will add or remove the role from the user. Optionally pass "listall" instead and receive a list of self-assignable roles for that server.',
    parameters: '[role]',
  },
  {
    name: 'roll',
    description:
      'This command returns a random number between 1 and [number], as if it was a dice roll.',
    parameters: 'd[number]',
  },
  {
    name: 'search',
    description:
      'This command returns a URL to the Google search results page for the given [query] word or words.',
    parameters: '[query]',
  },
  {
    name: 'server',
    description:
      "This command returns a message embed containing information about the current server. The information includes the server name, creation date, the user's join date, the server owner, member information, channel information, and role information.",
  },
  {
    name: 'space',
    description:
      "his command gets NASA's Space Photo of the day. Optionally pass a [date] to get the photo for that day instead.",
    parameters: '[?date (YYYY-MM-DD)',
  },
  {
    name: 'sponsor',
    description:
      'This command returns an embed with the development sponsorship/donation links.',
  },
  {
    name: 'star',
    description:
      "This command sends a message embed to the [@username]'s direct messages. The embed contains the command author's name, the [reason] if provided, and a shiny gold star!",
    parameters: '[@username] [?reason]',
  },
  {
    name: 'support',
    description:
      'This command will return an embed with a link to the Discord server and documentation page.',
  },
  {
    name: 'sus',
    description:
      'This command sends a message embed to the channel the user called the command in. The command will say that a certain color looks sus just like in Among Us Emergency Meetings.',
  },
  {
    name: 'title',
    description:
      'This command will generate a random and often funny title for the user who calls it.',
  },
  {
    name: 'trivia',
    description:
      'This command fetches a trivia question and returns an embed. The question is multiple choice, and Becca will listen for answers to the question. After 30 seconds, she will display the correct answer and announce any winners.',
  },
  {
    name: 'unrestrict',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will remove the [@username]'s role provided in the silence_role option. If the role option is not set, Becca will send a message to notify the user. If the becca!config set channel logs [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the command, the name of the unrestricted user, and the reason provided. If no reason was provided, the embed will state that.`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'uptime',
    description:
      'This command returns the amount of time Becca has currently been awake.',
  },
  {
    name: 'usage',
    description:
      'This command returns a message embed for the [command]. The embed will contain the number of times the command is called globally and for the server this command is called in.',
    parameters: '[command]',
  },
  {
    name: 'user',
    description:
      "This command returns a message embed about the message author. The embed contains their nickname, full username, account creation date, date they joined the server, roles they have, and their avatar. Optionally pass a user mention as [@username] to retrieve an embed containing that user's information instead.",
    parameters: '[?@username]',
  },
  {
    name: 'username',
    description:
      'This command generates a DigitalOcean themed username, courtesy of MattIPv4. Optionally pass a number for [length] to limit the length of the username (the default value is 30).',
    parameters: '[?length]',
  },
  {
    name: 'warn',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will send a direct message to [@username] informing them that the command author has warned them, and providing the reason if given. If the becca!config set channel logs [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the warning, the name of the warned user, and the reason provided. If no reason was provided, the embed will state that.`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'wiki',
    description:
      'This command returns a link to the wikipedia article for [query]. If the article is not found, it returns the search page instead.',
    parameters: '[query]',
  },
  {
    name: 'xkcd',
    description:
      "This command returns an embed containing today's XKCD comic. Optionally pass a comic [number] to get that specific comic instead.",
    parameters: '[?number]',
  },
];
