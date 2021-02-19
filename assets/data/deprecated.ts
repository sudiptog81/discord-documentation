export interface DepCommandInt {
  name: string;
  version: string;
  reason: string;
}

export const depCommands: DepCommandInt[] = [
  {
    name: 'purge',
    version: '6.9.1',
    reason:
      'removed due to Discord API limitations on the age at which messages could no longer be bulk deleted.',
  },
  {
    name: 'inulove',
    version: '6.10.2',
    reason: 'removed as incomplete, not used enough to warrant completion.',
  },
  {
    name: 'inuquote',
    version: '6.10.2',
    reason: 'removed as incomplete, not used enough to warrant completion',
  },
  {
    name: 'optout',
    version: '7.0.8',
    reason: 'removed as unused, unneeded for GDPR compliance.',
  },
  {
    name: 'block',
    version: '7.1.0',
    reason: 'removed as blocking users became server-specific',
  },
  {
    name: 'profile',
    version: '9.0.3',
    reason: 'Type definition conflicts with mongoose, and lack of usage.',
  },
  {
    name: 'hpchar',
    version: '9.2.0',
    reason: 'API no longer available.',
  },
  {
    name: 'hpsort',
    version: '9.2.0',
    reason: 'API no longer available.',
  },
  {
    name: 'hpspell',
    version: '9.2.0',
    reason: 'API no longer available.',
  },
  {
    name: 'usage',
    version: '10.2.1',
    reason: 'Unused, and caused extraneous database calls.',
  },
];
