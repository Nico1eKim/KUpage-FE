export const PART_TYPE = [
  {
    id: 0,
    name: 'Web',
    value: 'Web',
  },
  {
    id: 1,
    name: 'Server',
    value: 'Server',
  },
  {
    id: 2,
    name: 'Android',
    value: 'Android',
  },
  {
    id: 3,
    name: 'Design',
    value: 'Design',
  },
] as const;

export type partTypeValue = (typeof PART_TYPE)[number]['value'];
