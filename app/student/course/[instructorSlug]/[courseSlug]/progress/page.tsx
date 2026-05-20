// src/app/student/course/[instructorSlug]/[courseSlug]/progress/page.tsx

import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  PlayCircle,
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";

const modules = [
  {
    title: "Getting Started",
    lessons: 8,
    completed: 8,
    progress: 100,
    status: "Completed",
  },
  {
    title: "Next.js App Router",
    lessons: 12,
    completed: 9,
    progress: 75,
    status: "In Progress",
  },
  {
    title: "Dynamic Course Layouts",
    lessons: 10,
    completed: 4,
    progress: 40,
    status: "Learning",
  },
  {
    title: "Final Project",
    lessons: 6,
    completed: 0,
    progress: 0,
    status: "Locked",
  },
];

export default function CourseProgressPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <BarChart3 size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Progress
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Track your lesson completion, module progress, study time, and course performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard icon={<BookOpen />} title="Total Lessons" value="36" />
        <StatCard icon={<CheckCircle />} title="Completed" value="21" />
        <StatCard icon={<Clock />} title="Study Time" value="18h" />
        <StatCard icon={<Trophy />} title="Course XP" value="2450" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-gray-900">
            Module Progress
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Your progress across all course modules
          </p>

          <div className="mt-8 space-y-5">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-[28px] border border-gray-100 bg-gray-50 p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">
                      {module.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-gray-500">
                      {module.completed}/{module.lessons} lessons completed
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-black ${
                      module.status === "Completed"
                        ? "bg-green-50 text-green-600"
                        : module.status === "Locked"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-blue-50 text-[#2563eb]"
                    }`}
                  >
                    {module.status}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between text-sm font-bold text-gray-500">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
              <Target />
            </div>

            <h3 className="mt-5 text-2xl font-black text-gray-900">
              Course Goal
            </h3>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Complete this course before 30 May 2026.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-blue-100">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600" />
            </div>

            <p className="mt-3 text-sm font-black text-[#2563eb]">
              72% completed
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
              You are learning faster than 86% of students in this course.
            </p>
          </div>

          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <PlayCircle />
            </div>

            <h3 className="mt-5 text-2xl font-black text-gray-900">
              Continue Lesson
            </h3>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Dynamic Instructor Slug Routing
            </p>

            <Link
              href="../learn"
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

      <p className="mt-5 text-sm font-bold text-gray-500">{title}</p>

      <h2 className="mt-2 text-4xl font-black text-gray-900">{value}</h2>
    </div>
  );
}