// src/app/student/course/[instructorSlug]/[courseSlug]/layout.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ClipboardList,
  Download,
  FileQuestion,
  FileText,
  FolderKanban,
  MessageSquare,
  PlayCircle,
  Star,
  Trophy,
} from "lucide-react";

const courseLinks = [
  {
    name: "Overview",
    href: "",
    icon: BookOpen,
  },
  {
    name: "Learn",
    href: "learn",
    icon: PlayCircle,
  },
  {
    name: "Projects",
    href: "projects",
    icon: FolderKanban,
  },
  {
    name: "Assignments",
    href: "assignments",
    icon: ClipboardList,
  },
  {
    name: "Quiz",
    href: "quiz",
    icon: FileQuestion,
  },
  {
    name: "Reviews",
    href: "reviews",
    icon: Star,
  },
  {
    name: "Discussions",
    href: "discussions",
    icon: MessageSquare,
  },
  {
    name: "Notes",
    href: "notes",
    icon: FileText,
  },
  {
    name: "Downloads",
    href: "downloads",
    icon: Download,
  },
  {
    name: "Leaderboard",
    href: "leaderboard",
    icon: Trophy,
  },
  {
    name: "Progress",
    href: "progress",
    icon: BarChart3,
  },
  {
    name: "Certificate",
    href: "certificate",
    icon: Award,
  },
];

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    instructorSlug: string;
    courseSlug: string;
  };
}) {
  const pathname = usePathname();

  const basePath = `/student/course/${params.instructorSlug}/${params.courseSlug}`;

  const courseTitle = params.courseSlug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  const instructorName = params.instructorSlug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 hidden h-screen w-80 border-r border-gray-200 bg-white lg:block">
        {/* HEADER */}
        <div className="border-b border-gray-100 p-6">
          <Link
            href="/student/dashboard"
            className="inline-flex items-center gap-2 text-sm font-black text-[#2563eb]"
          >
            <ChevronLeft size={18} />
            Back to Dashboard
          </Link>

          <div className="mt-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2563eb] to-indigo-600 text-2xl font-black text-white">
              C
            </div>

            <h1 className="mt-5 text-2xl font-black leading-tight text-gray-900">
              {courseTitle}
            </h1>

            <p className="mt-2 text-sm font-bold text-gray-500">
              Instructor: {instructorName}
            </p>
          </div>

          {/* PROGRESS */}
          <div className="mt-6 rounded-3xl bg-blue-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">
                Course Progress
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
        <nav className="space-y-2 overflow-y-auto p-5">
          {courseLinks.map((link) => {
            const Icon = link.icon;

            const href = link.href
              ? `${basePath}/${link.href}`
              : basePath;

            const active =
              pathname === href ||
              (link.href !== "" && pathname.startsWith(href));

            return (
              <Link
                key={link.name}
                href={href}
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
      </aside>

      {/* MAIN */}
      <div className="lg:pl-80">
        {/* TOPBAR */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                {courseTitle}
              </h2>

              <p className="text-sm font-semibold text-gray-500">
                Learn with premium lessons and projects
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#2563eb] hover:text-[#2563eb]">
                Save Progress
              </button>

              <button className="rounded-2xl bg-gradient-to-r from-[#2563eb] to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-500/20">
                Continue Learning
              </button>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}