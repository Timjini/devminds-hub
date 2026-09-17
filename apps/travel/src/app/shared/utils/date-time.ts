export function formatDate(currentDate: Date): string {
  return new Date(currentDate).toLocaleDateString();
}
