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
      'The value of this variable will be your Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your Discord Bot application.',
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
      'The value of this variable will be your MongoDB authentication URI. Like the token, this needs to be kept secret to prevent unauthorised access to and modification of your database.',
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
      'This tells Becca which Discord account is her owner. She will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.',
  },
  {
    name: 'PRODDEV',
    optional: 'OPTIONAL',
    description:
      'This tells Becca whether she is in a development state or production state - the webhook message includes this value.',
  },
  {
    name: 'WH_ID',
    optional: 'RECOMMENDED',
    description: 'This is the ID for the Discord webhook. Becca will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.',
  },
  {
    name: 'WH_TOKEN',
    optional: 'RECOMMENDED',
    description: 'This is the token for the Discord webhook. Becca will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.',
  },
  {
    name: 'BECCA_YES',
    optional: 'OPTIONAL',
    description: 'This is the ID or Unicode character for the emoji Becca will react with on successful command calls.'
  }, {
    name: 'BECCA_NO',
    optional: 'OPTIONAL',
    description: 'This is the ID or Unicode character for the emoji Becca will react with on failed/errored command calls.'
  }, {
    name: 'BECCA_LOVE',
    optional: 'OPTIONAL',
    description: 'This is the ID or Unicode character for the emoji Becca will use for the hearts listener.'
  },
  {
    name: 'BECCA_THINK',
    optional: 'OPTIONAL',
    description: 'This is the ID or Unicode character for the emoji Becca will react with when she is @mentioned.'
  }
];
