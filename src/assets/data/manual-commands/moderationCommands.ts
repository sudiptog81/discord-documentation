import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const moderationCommands: CommandInt[] = [
  {
    name: 'ban',
    description:
      'This command requires that the user sending it has the "Ban Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command bans [@username] from the server. If the becca!config set logs_channel [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the ban, the name of the banned user, and the reason provided. If no reason was provided, the embed will state that. Because of the permanent nature of bans, she will require confirmation before taking action.',
    parameters: '[@username] [?reason]',
  },
  {
    name: 'close',
    description:
      'This command requires the user to have the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission to use this command. Otherwise, she deletes the channel this command is used in, and logs the deletion to the becca!config set channel logs [#channel] option.',
  },
  {
    name: 'kick',
    description:
      'This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command kicks [@username] from the server. If the becca!config set channel logs [#channel] option is set, she will send an embed to that channel. The embed will contain the name of the user performing the kick, the name of the kicked user, and the reason provided. If no reason was provided, the embed will state that.',
    parameters: '[@username] [?reason]',
  },
  {
    name: 'restrict',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will set the [@username]'s role provided in the becca!config set role restricted [@role] option, and remove all other roles. If the role option is not set, Becca will send a message to notify the user. If the becca!config set channel logs [#channel] option is not set, Becca will send a message to notify the user. Otherwise, she will send an embed to the log channel. The embed will contain the name of the user performing the command, the name of the restricted user, and the reason provided. If no reason was provided, the embed will state that. Becca will then create a channel under the Appeals category (if Appeals category does not exists, Becca will create one with the correct permissions), which only the channel moderators and the restricted user can access.`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'unrestrict',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will remove the [@username]'s role provided in the silence_role option. If the role option is not set, Becca will send a message to notify the user. If the becca!config set channel logs [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the command, the name of the unrestricted user, and the reason provided. If no reason was provided, the embed will state that.`,
    parameters: '[@username] [?reason]',
  },
  {
    name: 'warn',
    description: `This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will send a direct message to [@username] informing them that the command author has warned them, and providing the reason if given. If the becca!config set channel logs [#channel] option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the warning, the name of the warned user, and the reason provided. If no reason was provided, the embed will state that.`,
    parameters: '[@username] [?reason]',
  },
];
