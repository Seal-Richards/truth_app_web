import { Variant } from "@src/components/atoms/Badge";


export function getStatusMeta(status: unknown): {
  text: string;
  variant: Variant;
} {
  const normalized = typeof status === 'string' ? status.toLowerCase().trim() : '';

  const map: Record<string, { text: string; variant: Variant }> = {
    active: { text: 'Active', variant: 'success' },
    inactive: { text: 'Inactive', variant: 'warning' },
    expired: { text: 'Expired', variant: 'error' },
  };

  return map[normalized] ?? { text: 'Unknown', variant: 'default' };
}
