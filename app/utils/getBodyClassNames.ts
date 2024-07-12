export function getBodyClassNames(themePreference?: string): string {
  return [
    `transition-colors duration-1000 ease-in-out min-h-screen bg-white text-black`,
  ]
    .join(" ")
    .trim();
}
