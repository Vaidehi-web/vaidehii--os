import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur border-b border-pink-100">

      <Link href="/" className="text-2xl font-bold text-pink-600">
        🌸 VAIDEHI OS
      </Link>

      <div className="flex gap-5 text-gray-600">
        <Link href="/semester">Study</Link>
        <Link href="/cyber">Cyber</Link>
        <Link href="/career">Career</Link>
        <Link href="/nptel">NPTEL</Link>
      </div>

    </nav>
  );
}