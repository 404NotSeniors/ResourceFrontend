import Link from "next/link";

export default function RegisterCompanyPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Company Registration</h2>
      <form>
        <label>
          Company Name:
          <input type="text" name="companyName" />
        </label>
        <br />
        <label>
          Company Email:
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
