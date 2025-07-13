import Link from "next/link";

export default function RegisterCandidatePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Candidate Registration</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <hr />
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
