"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FAKE_USERS = [
  {
    email: "candidate@gmail.com",
    password: "candidate123",
    role: "candidate",
  },
  {
    email: "company@gmail.com",
    password: "company123",
    role: "company",
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const user = FAKE_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", user.role);

      if (user.role === "company") {
        router.push("/dashboard/company");
      } else {
        router.push("/dashboard/candidate");
      }
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginTop: "1rem" }}>
        <strong>Quick Login:</strong>
        <br />
        <button
          type="button"
          style={{ margin: "0.25rem" }}
          onClick={() => {
            setEmail("candidate@gmail.com");
            setPassword("candidate123");
            setTimeout(() => document.getElementById("login-btn")?.click(), 0);
          }}
        >
          Login as Candidate
        </button>
        <button
          type="button"
          style={{ margin: "0.25rem" }}
          onClick={() => {
            setEmail("company@gmail.com");
            setPassword("company123");
            setTimeout(() => document.getElementById("login-btn")?.click(), 0);
          }}
        >
          Login as Company
        </button>
      </div>
    </main>
  );
}
