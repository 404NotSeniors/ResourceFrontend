"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/modules/auth/api";

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

const USE_FAKE_LOGIN = true; // env: process.env.NEXT_PUBLIC_USE_FAKE_LOGIN === "true"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let user, data;
    if (USE_FAKE_LOGIN) {
      user = FAKE_USERS.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) return setError("Invalid email or password.");
      data = { role: user.role };
      localStorage.setItem("role", data.role);
      if (data.role === "company") {
        router.push("/dashboard/company");
      } else {
        router.push("/dashboard/candidate");
      }
    } else {
      login(email, password)
        .then((result) => {
          data = result;
          localStorage.setItem("role", data.role);
          if (data.role === "company") {
            router.push("/dashboard/company");
          } else {
            router.push("/dashboard/candidate");
          }
        })
        .catch((err: unknown) => {
          if (err instanceof Error) {
            setError(err.message || "Login failed");
          } else {
            setError("Login failed");
          }
        });
    }
  }

  return (
    <div>
      <h2>Welcome Back</h2>
      <p>Enter your credentials to access your account</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button id="login-btn" type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
      <div>
        <strong>Quick Login:</strong>
        <div>
          <button
            type="button"
            onClick={() => {
              setEmail("candidate@gmail.com");
              setPassword("candidate123");
              setTimeout(
                () => document.getElementById("login-btn")?.click(),
                0
              );
            }}
          >
            Login as Candidate
          </button>
          <button
            type="button"
            onClick={() => {
              setEmail("company@gmail.com");
              setPassword("company123");
              setTimeout(
                () => document.getElementById("login-btn")?.click(),
                0
              );
            }}
          >
            Login as Company
          </button>
        </div>
      </div>
    </div>
  );
}
