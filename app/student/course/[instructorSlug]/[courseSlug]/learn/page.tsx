// src/app/student/course/[instructorSlug]/[courseSlug]/learn/page.tsx

import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Lock,
  PlayCircle,
} from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Course Introduction",
    duration: "12 min",
    completed: true,
    locked: false,
  },
  {
    id: 2,
    title: "Project Setup",
    duration: "24 min",
    completed: true,
    locked: false,
  },
  {
    id: 3,
    title: "Understanding App Router",
    duration: "42 min",
    completed: false,
    locked: false,
  },
  {
    id: 4,
    title: "Dynamic Routing",
    duration: "35 min",
    completed: false,
    locked: true,
  },
];

export default function LearnPage({
  params,
}: {
  params: {
    instructorSlug: string;
    courseSlug: string;
  };
}) {
  const courseTitle = params.courseSlug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  return (
    <section className="grid gap-8 lg:grid-cols-[420px_1fr]">
      {/* LESSON SIDEBAR */}
      <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-500">
              Course Content
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-900">
              {courseTitle}
            </h2>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-[#2563eb]">
            12 Lessons
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={
                lesson.locked
                  ? "#"
                  : `/student/course/${params.instructorSlug}/${params.courseSlug}/lessons/${lesson.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
              }
              className={`flex items-center justify-between rounded-2xl border px-4 py-4 transition ${
                lesson.completed
                  ? "border-green-100 bg-green-50"
                  : "border-gray-100 bg-gray-50 hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    lesson.completed
                      ? "bg-green-100 text-green-600"
                      : lesson.locked
                      ? "bg-gray-200 text-gray-500"
                      : "bg-blue-100 text-[#2563eb]"
                  }`}
                >
                  {lesson.completed ? (
                    <CheckCircle2 size={20} />
                  ) : lesson.locked ? (
                    <Lock size={20} />
                  ) : (
                    <PlayCircle size={20} />
                  )}
                </div>

                <div>
                  <h3 className="font-black text-gray-900">
                    {lesson.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-xs font-bold text-gray-500">
                    <Clock size={14} />
                    {lesson.duration}
                  </p>
                </div>
              </div>

              {lesson.completed && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                  Done
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* VIDEO PLAYER */}
      <div className="space-y-8">
        <div className="overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-sm">
          <div className="aspect-video bg-black">
            <img
              src="/images/course/video-thumbnail.jpg"
              alt="Video Thumbnail"
              className="h-full w-full object-cover opacity-80"
            />
          </div>

          <div className="p-8">
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-[#2563eb]">
              Current Lesson
            </div>

            <h1 className="mt-5 text-4xl font-black text-gray-900">
              Understanding App Router
            </h1>

            <p className="mt-5 leading-8 text-gray-600">
              Learn how modern routing works in Next.js App Router,
              including layouts, nested routes and dynamic segments.
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-gray-900">
            Lesson Notes
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-blue-50 p-5 text-sm font-semibold leading-7 text-gray-700">
              App Router allows nested layouts and better route organization.
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-sm font-semibold leading-7 text-gray-700">
              Dynamic segments use square brackets like [slug].
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}