const IS_SERVER = typeof window === "undefined";

export function getLocalStorage(key: string, defaultValue: any) {
  if (IS_SERVER) return;
  const stickyValue = localStorage.getItem(key);
  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key: string, value: any) {
  if (IS_SERVER) return;
  localStorage.setItem(key, JSON.stringify(value));
}
