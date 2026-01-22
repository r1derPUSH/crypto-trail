export function formatPrice(value: number): string {
  if (!value || value === 0) return "0";

  if (value < 0.00000001) return "< 0.00000001";

  if (value < 0.0001) return value.toFixed(8);
  if (value < 0.01) return value.toFixed(6);
  if (value < 1) return value.toFixed(4);

  return value.toFixed(2);
}
