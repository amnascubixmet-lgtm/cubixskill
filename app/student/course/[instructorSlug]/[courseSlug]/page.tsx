import Link from "next/link";
import {
  Award,
  BarChart3,
  Clock,
  Globe,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

export default function CoursePage({
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

  const instructorName = params.instructorSlug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  return (
    <section>
      {/* HERO */}
      <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 text-white shadow-2xl shadow-blue-500/20">
        <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-black backdrop-blur-sm">
              Premium Course
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              {courseTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Master modern development skills with practical lessons,
              projects and real-world learning experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-blue-100">
              <span className="flex items-center gap-2">
                <Users size={18} />
                12,450 Students
              </span>

              <span className="flex items-center gap-2">
                <Star size={18} />
                4.9 Rating
              </span>

              <span className="flex items-center gap-2">
                <Clock size={18} />
                48 Hours
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/student/course/${params.instructorSlug}/${params.courseSlug}/learn`}
                className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                Start Learning
              </Link>

              <button className="rounded-2xl border border-white/20 px-6 py-4 text-sm font-black text-white backdrop-blur-sm">
                Add Wishlist
              </button>
            </div>
          </div>

          {/* COURSE CARD */}
          <div className="rounded-[36px] bg-white/10 p-8 backdrop-blur-xl">
            <div className="aspect-video overflow-hidden rounded-[28px] bg-white/10">
              <img
                src="/images/course/course-banner.jpg"
                alt={courseTitle}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold text-blue-100">
                Instructor
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {instructorName}
              </h2>

              <div className="mt-8 space-y-4">
                <CourseInfo
                  icon={<PlayCircle size={18} />}
                  title="128 Video Lessons"
                />

                <CourseInfo
                  icon={<Award size={18} />}
                  title="Certificate Included"
                />

                <CourseInfo
                  icon={<BarChart3 size={18} />}
                  title="Beginner to Advanced"
                />

                <CourseInfo
                  icon={<Globe size={18} />}
                  title="Lifetime Access"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* LEFT */}
        <div className="space-y-8 lg:col-span-2">
          {/* ABOUT */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-gray-900">
              About This Course
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              This course is designed to help students build practical
              industry-level skills through structured lessons, projects,
              assignments and quizzes.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              You will learn modern workflows, development architecture,
              deployment strategies and real-world implementation techniques.
            </p>
          </div>

          {/* WHAT YOU LEARN */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-gray-900">
              What You’ll Learn
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <LearnItem text="Modern App Architecture" />
              <LearnItem text="Next.js App Router" />
              <LearnItem text="Tailwind CSS UI Design" />
              <LearnItem text="API Integration" />
              <LearnItem text="Authentication Systems" />
              <LearnItem text="Production Deployment" />
            </div>
          </div>

          {/* COURSE CONTENT */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-gray-900">
                Course Content
              </h2>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-[#2563eb]">
                12 Modules
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <LessonItem
                title="Introduction to Course"
                duration="12 min"
              />

              <LessonItem
                title="Setting Up Development Environment"
                duration="28 min"
              />

              <LessonItem
                title="Understanding App Router"
                duration="42 min"
              />

              <LessonItem
                title="Building Reusable Components"
                duration="56 min"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* PROGRESS */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900">
              Your Progress
            </h2>

            <div className="mt-6">
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>Completed</span>
                <span>72%</span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600" />
              </div>
            </div>

            <Link
              href={`/student/course/${params.instructorSlug}/${params.courseSlug}/learn`}
              className="mt-8 block rounded-2xl bg-[#2563eb] px-5 py-4 text-center text-sm font-black text-white"
            >
              Continue Learning
            </Link>
          </div>

          {/* INSTRUCTOR */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-2xl font-black text-[#2563eb]">
                {instructorName.charAt(0)}
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900">
                  {instructorName}
                </h3>

                <p className="text-sm font-semibold text-gray-500">
                  Senior Instructor
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              Experienced mentor helping students build practical modern
              development skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseInfo({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
      {icon}
      <span className="font-bold">{title}</span>
    </div>
  );
}

function LearnItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-4 text-sm font-bold text-gray-700">
      <div className="h-3 w-3 rounded-full bg-[#2563eb]" />
      {text}
    </div>
  );
}

function LessonItem({
  title,
  duration,
}: {
  title: string;
  duration: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
          <PlayCircle size={20} />
        </div>

        <div>
          <h3 className="font-black text-gray-900">{title}</h3>
          <p className="text-sm font-semibold text-gray-500">
            Video Lesson
          </p>
        </div>
      </div>

      <span className="text-sm font-black text-[#2563eb]">
        {duration}
      </span>
    </div>
  );
}