// lib/encryption.ts

export function encodeId(id: string | number): string {
  return Buffer.from(id.toString()).toString('base64');
}

export function decodeId(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}
