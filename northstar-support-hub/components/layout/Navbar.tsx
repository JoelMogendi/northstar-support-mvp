
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/order-status", label: "Order Status" },
  { href: "/returns", label: "Returns & Refunds" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-y-2 px-6 py-4">
        <span className="font-bold text-lg">Northstar Support Hub</span>
        <ul className="flex flex-wrap gap-4 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}