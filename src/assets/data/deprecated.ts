export interface depCommandInt {
  name: String;
  version: String;
  reason: String;
}

export const depCommands: depCommandInt[] = [
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
];
