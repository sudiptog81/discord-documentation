/* eslint-disable max-len */
import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const serverCommands: CommandInt[] = [
  {
    name: 'config',
    description:
      'This command lists the current server configuration, for logging channels etc. This command is locked to moderators with the Manage Server permission. The Discord user associated with the process.env.OWNER_ID can access this command regardless of permissions, but should only do so for the sake of development purposes.',
    parameters: '[?set] [?key] [?value]',
  },
  {
    name: 'leave',
    description:
      'Pass a server ID value for server, and Becca will leave that server. This command is locked to the Discord user associated with the process.env.OWNER_ID value.',
    parameters: '[server]',
  },
  {
    name: 'level',
    description: `This command sends an embed containing the [user]'s experience points and current level. If no parameter is passed, it will return the message author's level.`,
    parameters: '[?user]',
  },
  {
    name: 'list',
    description:
      'This command returns embed(s) containing a list of the servers Becca is in, and the owner information for each server.',
  },
  {
    name: 'ping',
    description:
      'This command will generate the latency for Becca. She will send a response back with the communication time in milliseconds.',
  },
  {
    name: 'role',
    description:
      'This command accepts the name of a role as [role]. If that role exists and is in the server self_role list, Becca will add or remove the role from the user. Optionally pass `listall` instead and receive a list of self-assignable roles for that server.',
    parameters: '[role]',
  },
  {
    name: 'server',
    description: `This command returns a message embed containing information about the current server. The information includes the server name, creation date, the user's join date, the server owner, member information, channel information, and role information.`,
  },
  {
    name: 'usage',
    description:
      'This command returns a message embed for the [command]. The embed will contain the number of times the command is called globally and for the server this command is called in.',
    parameters: '[command]',
  },
];
