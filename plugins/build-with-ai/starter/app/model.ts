// Calculations live here, free of interface code, so tests/ can check them with known answers.
export function total(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
