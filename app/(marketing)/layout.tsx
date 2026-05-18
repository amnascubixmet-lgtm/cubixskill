// src/app/(marketing)/layout.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-indigo-600 text-xl font-black text-white">
              C
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                CubixSkill
              </h1>
              <p className="text-xs font-semibold text-gray-500">
                Multi Instructor LMS
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-blue-100 text-[#2563eb]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#2563eb]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="hidden rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#2563eb] hover:text-[#2563eb] sm:block"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="rounded-2xl bg-gradient-to-r from-[#2563eb] to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-gray-100 bg-[#0f172a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2563eb] to-indigo-600 text-2xl font-black text-white">
                  C
                </div>

                <div>
                  <h2 className="text-3xl font-black">CubixSkill</h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Modern Multi Instructor Learning Platform
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-md leading-8 text-gray-400">
                CubixSkill helps students learn modern skills from expert
                instructors through premium online courses, certificates,
                projects and interactive learning experiences.
              </p>
            </div>

            <FooterColumn
              title="Platform"
              links={[
                { href: "/courses", label: "All Courses" },
                { href: "/pricing", label: "Pricing" },
                { href: "/faq", label: "FAQ" },
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ]}
            />

            <FooterColumn
              title="Support"
              links={[
                { href: "/help-center", label: "Help Center" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/student-guide", label: "Student Guide" },
                { href: "/instructor-guide", label: "Instructor Guide" },
              ]}
            />
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
            <p>© 2026 CubixSkill. All rights reserved.</p>
            <p>Built with Next.js + Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-black">{title}</h3>

      <div className="mt-6 flex flex-col gap-4 text-sm text-gray-400">
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="transition hover:text-white">
      {label}
    </Link>
  );
}