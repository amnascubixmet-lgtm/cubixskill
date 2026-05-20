// src/app/student/progress/page.tsx

import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  Target,
  Trophy,
  TrendingUp,
  PlayCircle,
} from "lucide-react";

const courseProgress = [
  {
    title: "Next.js Masterclass 2026",
    instructor: "Rahul Menon",
    progress: 82,
    completed: 39,
    total: 48,
    href: "/student/course/rahul-menon/nextjs-masterclass-2026",
  },
  {
    title: "UI/UX Design Bootcamp",
    instructor: "Aisha Fathima",
    progress: 64,
    completed: 21,
    total: 32,
    href: "/student/course/aisha-fathima/ui-ux-design-bootcamp",
  },
  {
    title: "Advanced React Development",
    instructor: "John Mathew",
    progress: 41,
    completed: 12,
    total: 28,
    href: "/student/course/john-mathew/advanced-react-development",
  },
];

export default function ProgressPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <BarChart3 size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Learning Progress
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Track your course completion, study time, goals, and learning performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={<BookOpen />} title="Courses" value="12" />
        <StatCard icon={<CheckCircle />} title="Completed Lessons" value="72" />
        <StatCard icon={<Clock />} title="Study Time" value="48h" />
        <StatCard icon={<Trophy />} title="Achievements" value="18" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-gray-900">
            Course Progress
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Your active course completion details
          </p>

          <div className="mt-8 space-y-5">
            {courseProgress.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="block rounded-[28px] border border-gray-100 bg-gray-50 p-5 transition hover:bg-blue-50"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-gray-500">
                      Instructor: {course.instructor}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white">
                    {course.progress}%
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between text-sm font-bold text-gray-500">
                    <span>
                      {course.completed}/{course.total} lessons completed
                    </span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
              <Target />
            </div>

            <h3 className="mt-5 text-2xl font-black text-gray-900">
              Monthly Goal
            </h3>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Complete 3 courses this month
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-blue-100">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600" />
            </div>

            <p className="mt-3 text-sm font-black text-[#2563eb]">
              68% goal completed
            </p>
          </div>

          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <TrendingUp />
            </div>

            <h3 className="mt-5 text-2xl font-black text-gray-900">
              Performance
            </h3>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Your learning speed improved by 24% this month.
            </p>
          </div>

          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <PlayCircle />
            </div>

            <h3 className="mt-5 text-2xl font-black text-gray-900">
              Next Lesson
            </h3>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Advanced Nested Layouts in Next.js
            </p>

            <Link
              href="/student/course/rahul-menon/nextjs-masterclass-2026/learn"
              className="mt-5 inline-flex rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white"
            >
              Continue Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <p className="mt-5 text-sm font-bold text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-black text-gray-900">
        {value}
      </h2>
    </div>
  );
}