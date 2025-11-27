export const PART_TYPE = [
  {
    id: 0,
    name: 'Web',
    value: 'WEB',
  },
  {
    id: 1,
    name: 'Server',
    value: 'SERVER',
  },
  {
    id: 2,
    name: 'Android',
    value: 'ANDROID',
  },
] as const;

export type partTypeValue = (typeof PART_TYPE)[number]['value'];
