// src/app/student/course/[instructorSlug]/[courseSlug]/lessons/[lessonSlug]/page.tsx

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  PlayCircle,
} from "lucide-react";

export default function LessonPage({
  params,
}: {
  params: {
    instructorSlug: string;
    courseSlug: string;
    lessonSlug: string;
  };
}) {
  const lessonTitle = params.lessonSlug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  const basePath = `/student/course/${params.instructorSlug}/${params.courseSlug}`;

  return (
    <section className="space-y-8">
      <Link
        href={`${basePath}/learn`}
        className="inline-flex items-center gap-2 text-sm font-black text-[#2563eb]"
      >
        <ArrowLeft size={18} />
        Back to Lessons
      </Link>

      <div className="overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-sm">
        <div className="aspect-video bg-black">
          <img
            src="/images/course/video-thumbnail.jpg"
            alt={lessonTitle}
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-[#2563eb]">
              <PlayCircle size={14} />
              Video Lesson
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-black text-gray-600">
              <Clock size={14} />
              42 min
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            {lessonTitle}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-gray-600">
            Learn this topic step by step with practical examples, notes,
            downloadable resources and project-based explanations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-black text-white">
              <CheckCircle2 size={18} />
              Mark as Completed
            </button>

            <Link
              href={`${basePath}/learn`}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-black text-gray-700"
            >
              Next Lesson
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm lg:col-span-2">
          <h2 className="text-3xl font-black text-gray-900">
            Lesson Notes
          </h2>

          <div className="mt-6 space-y-4">
            <Note text="Understand the core concept before moving to advanced implementation." />
            <Note text="Practice with small examples and repeat the flow manually." />
            <Note text="Complete the related assignment after watching the lesson." />
          </div>
        </div>

        <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900">
            Resources
          </h2>

          <div className="mt-6 space-y-4">
            <Resource title="Lesson PDF" type="PDF" />
            <Resource title="Starter Files" type="ZIP" />
            <Resource title="Code Notes" type="DOC" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Note({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-blue-50 p-5 text-sm font-semibold leading-7 text-gray-700">
      {text}
    </div>
  );
}

function Resource({
  title,
  type,
}: {
  title: string;
  type: string;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl bg-gray-50 p-4 text-left transition hover:bg-blue-50">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#2563eb]">
          <FileText size={18} />
        </div>

        <div>
          <h3 className="text-sm font-black text-gray-900">{title}</h3>
          <p className="text-xs font-bold text-gray-500">{type}</p>
        </div>
      </div>

      <Download size={18} className="text-gray-400" />
    </button>
  );
}