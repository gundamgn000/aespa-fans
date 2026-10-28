export const editions = {
  a: { name: 'SIGNAL ERROR', theme: 'theme-signal', color: '#121411' },
  b: { name: 'CHROME EDITION', theme: '', color: '#101112' },
  c: { name: 'HYPER BLOOM', theme: 'theme-bloom', color: '#eef2f6' },
  d: { name: 'NEW DIMENSION', theme: 'theme-dimension', color: '#0c0c18' },
} as const;

export type Edition = keyof typeof editions;
export function resolveEdition(value: string | null): Edition {
  return value && Object.hasOwn(editions, value) ? value as Edition : 'b';
}
