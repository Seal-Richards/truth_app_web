import Cookies from "js-cookie";
import { type LoggedInUser } from "@src/types/Auth/getLoggedInUser";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export function setAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
  Cookies.set(TOKEN_KEY, token);
}

export function setAuthUser(user: LoggedInUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getAuthToken(): string | null {
  return typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
}

export function getAuthUser(): LoggedInUser | null {
  const user = typeof window !== "undefined" ? localStorage.getItem(USER_KEY) : null;
  return user ? (JSON.parse(user) as LoggedInUser) : null;
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  Cookies.remove(TOKEN_KEY);
}
