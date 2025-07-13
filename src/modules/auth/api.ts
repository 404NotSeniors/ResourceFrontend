//auth-related backend API calls (login, register, etc.)
import { fetcher } from "@/lib/fetcher";
import { API_URL } from "@/lib/constants";

export async function login(email: string, password: string) {
  return fetcher<{ role: string }>(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

// export async function register(user: { email: string, password: string, ... }) {
//   return fetcher(`${API_URL}/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   });
// }
