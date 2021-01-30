import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const emoteCommands: CommandInt[] = [
  {
    name: 'boop',
    description:
      'This command sends an embed that boops the mentioned [@user].',
    parameters: '[@user]',
  },
  {
    name: 'hug',
    description: 'This command sends an embed that hugs the menitoned [@user].',
    parameters: '[@user]',
  },
  {
    name: 'tickle',
    description:
      'This command sends an embed that tickles the mentioned [@user]',
    parameters: '[@user]',
  },
];
