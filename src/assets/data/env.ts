export interface envVariableInterface {
  name: String;
  optional: String;
  description: String;
}

export const envVariables: envVariableInterface[] = [
  {
    name: 'DISCORD_TOKEN',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your Bot Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your discord bot.',
  },
  {
    name: 'HABITICA_KEY',
    optional: 'OPTIONAL',
    description:
      'This is your API key for <a href="https://habitica.com" target="_blank" rel="noopener noreferrer" >Habitica</a>.',
  },
  {
    name: 'HP_KEY',
    optional: 'OPTIONAL',
    description:
      'This is the API key for the <a href="https://www.potterapi.com/" target="_blank" rel="noopener noreferrer" >Harry Potter API</a>',
  },
  {
    name: 'MONGODB',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your MongoDB authentication URI. Like the bot token, this needs to be kept secret to prevent unauthorised access to and modification of your database.',
  },
  {
    name: 'NASA_API',
    optional: 'OPTIONAL',
    description:
      'This is the API key for the <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" >NASA API</a>',
  },
  {
    name: 'OWNER_ID',
    optional: 'OPTIONAL',
    description:
      'This tells the bot which Discord account is the owner. The bot will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.',
  },
  {
    name: 'PRODDEV',
    optional: 'OPTIONAL',
    description:
      'This tells the bot whether it is in a development state or production state - the webhook message includes this value.',
  },
  {
    name: 'WH_ID',
    optional: 'RECOMMENDED',
    description: 'This is the ID for the Discord webhook. The bot will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.',
  },
  {
    name: 'WH_TOKEN',
    optional: 'RECOMMENDED',
    description: 'This is the token for the Discord webhook. The bot will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.',
  },
];
