/* eslint-disable max-len */
import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const generalCommands: CommandInt[] = [
  {
    name: 'becca',
    description: `This command returns an embed containing information on Becca's character.`,
  },
  {
    name: 'caniuse',
    description:
      'This command returns an embed containing the `caniuse` data on the specific programming <feature>.',
    parameters: '[feature]',
  },
  {
    name: 'compliment',
    description:
      'Provides a little compliment to cheer you up. Compliments obtained from freeCodeCamp.',
  },
  {
    name: 'echo',
    description:
      'This command will look for the guild with the [guild] id and the channel in that guild with the [channel] id. If the guild and its channel are found, the command will send the [message] to that channel. This command is locked to the OWNER_ID account to prevent spam.',
    parameters: '[guild] [channel] [message]',
  },
  {
    name: 'github',
    description:
      'This command returns an embed containing profile information for the provided GitHub [user].',
    parameters: '[user]',
  },
  {
    name: 'http',
    description:
      'This command accesses the HTTP Cat API and returns a cat photo for the given [status].',
    parameters: '[status]',
  },
  {
    name: 'jobs',
    description:
      'This command generates a LinkedIn job search URL - the optional [location] parameter narrows down the search by the given location.',
    parameters: '[?jobs]',
  },
  {
    name: 'maths',
    description:
      'This command takes the [problem] and evaluates it, returning the calculated result. If the expression is invalid, Becca will return an error.',
    parameters: '[problem]',
  },
  {
    name: 'motivation',
    description:
      'This command returns a motivational quote to raise your spirits. Quotes are obtained from freeCodeCamp.',
  },
  {
    name: 'search',
    description:
      'This command returns a URL to the Google search results page for the given [query] word or words.',
    parameters: '[query]',
  },
  {
    name: 'space',
    description: `his command gets NASA's Space Photo of the day. Optionally pass a [date] to get the photo for that day instead.`,
    parameters: '[?date (YYYY-MM-DD)',
  },
  {
    name: 'star',
    description: `This command sends a message embed to channel. The embed contains the command author's name, the [reason] if provided, and a shiny gold star!`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'user',
    description: `This command returns a message embed about the message author. The embed contains their nickname, full username, account creation date, date they joined the server, roles they have, and their avatar. Optionally pass a user mention as [@username] to retrieve an embed containing that user's information instead.`,
    parameters: '[?@username]',
  },
  {
    name: 'username',
    description:
      'This command generates a DigitalOcean themed username, courtesy of MattIPv4. Optionally pass a number for [length] to limit the length of the username (the default value is 30).',
    parameters: '[?length]',
  },
];
