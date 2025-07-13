import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to NonSeniors</h1>
      <p>
		<Link href="/login">Login</Link> |{" "}
        <Link href="/register/candidate">Register as Candidate</Link> |{" "}
        <Link href="/register/company">Register as Company</Link>
      </p>
    </main>
  );
}
