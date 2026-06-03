/** Format a date as "27 July 2023" (replaces date-fns `dd LLLL yyyy`). */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/** ISO date string (yyyy-MM-dd) for <time datetime> attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
