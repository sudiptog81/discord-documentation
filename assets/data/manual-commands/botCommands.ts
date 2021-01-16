import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const botCommands: CommandInt[] = [
  {
    name: 'about',
    description:
      "This command generates an embed message that provides a link to Becca's source code, the date she was created, the number of commands she can perform, and her favourite colour. The embed is sent to the channel the command message came from.",
  },
  {
    name: 'art',
    description:
      'This command returns an embed containing a Becca art! Many thanks to our wonderful artist contributors.',
  },
  {
    name: 'bugreport',
    description:
      'This command returns an embed containing a link to the GitHub issue selection page.',
  },
  {
    name: 'contributors',
    description:
      "This command returns an embed with a list of recognised contributors to Becca's code. Thank you all for your efforts to make Becca Lyria great!",
  },
  {
    name: 'help',
    description:
      'This command returns an embed containing a list of available commands. If the optional [command] parameter is passed, Becca will return the description for that command (or an error, if that command does not exist).',
    parameters: '[?command]',
  },
  {
    name: 'invite',
    description:
      'This command returns an embed containing the link to invite Becca to a Discord server.',
  },
  {
    name: 'listeners',
    description:
      'This command returns an embed containing information on the various listener type features Becca offers.',
  },
  {
    name: 'privacy',
    description: "This command provides information on Becca's privacy policy.",
  },
  {
    name: 'sponsor',
    description:
      'This command returns an embed with the development sponsorship/donation links.',
  },
  {
    name: 'support',
    description:
      'This command will return an embed with a link to the Discord server and documentation page.',
  },
  {
    name: 'uptime',
    description:
      'This command returns the amount of time Becca has currently been awake.',
  },
];
