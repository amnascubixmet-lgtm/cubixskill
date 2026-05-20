"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Heart,
  ShoppingCart,
  Award,
  BarChart3,
  Bell,
  MessageCircle,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const studentLinks = [
  {
    name: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Courses",
    href: "/student/my-courses",
    icon: BookOpen,
  },
  {
    name: "Wishlist",
    href: "/student/wishlist",
    icon: Heart,
  },
  {
    name: "Cart",
    href: "/student/cart",
    icon: ShoppingCart,
  },
  {
    name: "Certificates",
    href: "/student/certificates",
    icon: Award,
  },
  {
    name: "Progress",
    href: "/student/progress",
    icon: BarChart3,
  },
  {
    name: "Notifications",
    href: "/student/notifications",
    icon: Bell,
  },
  {
    name: "Messages",
    href: "/student/messages",
    icon: MessageCircle,
  },
  {
    name: "Profile",
    href: "/student/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/student/settings",
    icon: Settings,
  },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-gray-200 bg-white lg:block">
        {/* LOGO */}
        <div className="border-b border-gray-100 p-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2563eb] to-indigo-600 text-2xl font-black text-white">
              C
            </div>

            <div>
              <h1 className="text-2xl font-black text-gray-900">
                CubixSkill
              </h1>

              <p className="text-xs font-bold text-gray-500">
                Student Panel
              </p>
            </div>
          </Link>
        </div>

        {/* PROFILE */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-2xl font-black text-[#2563eb]">
              A
            </div>

            <div>
              <h2 className="text-lg font-black text-gray-900">
                Amnas Ali
              </h2>

              <p className="text-sm font-semibold text-gray-500">
                Premium Student
              </p>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-6 rounded-3xl bg-blue-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">
                Learning Progress
              </p>

              <span className="text-sm font-black text-[#2563eb]">
                72%
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600" />
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2 p-5">
          {studentLinks.map((link) => {
            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-200 ${
                  active
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-600 hover:bg-blue-50 hover:text-[#2563eb]"
                }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="absolute bottom-5 left-5 right-5">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-sm font-black text-gray-700 transition hover:bg-red-50 hover:text-red-600">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="lg:pl-72">
        {/* TOPBAR */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Student Dashboard
              </h2>

              <p className="text-sm font-semibold text-gray-500">
                Welcome back to CubixSkill
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#2563eb] hover:text-[#2563eb]">
                Notifications
              </button>

              <Link
                href="/student/profile"
                className="rounded-2xl bg-gradient-to-r from-[#2563eb] to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/20"
              >
                My Profile
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}