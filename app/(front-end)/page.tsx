import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Homepage</p>
      Go to{" "}
      <Link href="/register" className="underline">
        Register
      </Link>
    </div>
  );
}
