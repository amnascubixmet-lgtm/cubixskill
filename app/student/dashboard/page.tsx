import Link from "next/link";
import {
  Award,
  BarChart3,
  BookOpen,
  Clock,
  PlayCircle,
  Star,
  Trophy,
  ArrowRight,
  Flame,
  Target,
} from "lucide-react";

const courses = [
  {
    title: "Next.js Masterclass 2026",
    instructor: "Rahul Menon",
    progress: 82,
    lessons: 48,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    href: "/student/course/rahul-menon/nextjs-masterclass-2026",
  },
  {
    title: "Complete UI/UX Design Bootcamp",
    instructor: "Aisha Fathima",
    progress: 64,
    lessons: 32,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    href: "/student/course/aisha-fathima/complete-ui-ux-design-bootcamp",
  },
  {
    title: "Advanced React Development",
    instructor: "John Mathew",
    progress: 41,
    lessons: 28,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    href: "/student/course/john-mathew/advanced-react-development",
  },
];

const activities = [
  {
    title: "Completed Lesson",
    desc: "Nested Layouts in Next.js",
  },
  {
    title: "New Certificate Earned",
    desc: "UI/UX Foundations",
  },
  {
    title: "Quiz Passed",
    desc: "React Hooks Advanced Quiz",
  },
];

export default function StudentDashboardPage() {
  return (
    <section className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20 md:p-12">
        {/* BG EFFECT */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-xl">
            <Flame size={16} />
            Premium Learning Platform
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Continue Your
            <span className="block text-cyan-200">
              Learning Journey
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium text-blue-100">
            Track your enrolled courses, learning progress, certificates,
            quizzes, and achievements from one premium dashboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/student/my-courses"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb] transition hover:scale-105"
            >
              My Courses
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/student/progress"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              View Progress
            </Link>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<BookOpen />}
          title="Enrolled Courses"
          value="12"
          color="bg-blue-100 text-[#2563eb]"
        />

        <StatCard
          icon={<Trophy />}
          title="Courses Completed"
          value="05"
          color="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          icon={<Award />}
          title="Certificates"
          value="08"
          color="bg-green-100 text-green-600"
        />

        <StatCard
          icon={<Star />}
          title="Reward Points"
          value="4250"
          color="bg-pink-100 text-pink-600"
        />
      </div>

      {/* CONTENT */}
      <div className="grid gap-8 xl:grid-cols-3">
        {/* COURSES */}
        <div className="xl:col-span-2">
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Active Courses
                </h2>

                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Continue learning from where you stopped
                </p>
              </div>

              <Link
                href="/student/my-courses"
                className="text-sm font-black text-[#2563eb]"
              >
                View All
              </Link>
            </div>

            <div className="mt-8 space-y-6">
              {courses.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group block overflow-hidden rounded-[30px] border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
                >
                  <div className="grid gap-6 md:grid-cols-[260px,1fr]">
                    {/* IMAGE */}
                    <div className="relative h-64 overflow-hidden md:h-full">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute bottom-5 left-5">
                        <div className="rounded-full bg-white/20 px-4 py-2 text-xs font-black text-white backdrop-blur-xl">
                          {course.lessons} Lessons
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#2563eb]">
                          Premium Course
                        </p>

                        <h3 className="mt-3 text-2xl font-black text-gray-900">
                          {course.title}
                        </h3>

                        <p className="mt-2 text-sm font-semibold text-gray-500">
                          Instructor: {course.instructor}
                        </p>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm font-bold text-gray-500">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>

                        <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600"
                            style={{
                              width: `${course.progress}%`,
                            }}
                          />
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white">
                            <PlayCircle size={18} />
                            Continue Learning
                          </div>

                          <ArrowRight
                            size={22}
                            className="text-[#2563eb]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* NEXT LESSON */}
          <SideCard
            icon={<PlayCircle />}
            title="Next Lesson"
            text="Advanced Nested Layouts"
          />

          {/* STUDY TIME */}
          <SideCard
            icon={<Clock />}
            title="Study Time"
            text="28h 12m this month"
          />

          {/* GOAL */}
          <SideCard
            icon={<Target />}
            title="Learning Goal"
            text="Complete 3 courses this month"
          />

          {/* PROGRESS */}
          <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
                <BarChart3 />
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900">
                  Overall Progress
                </h3>

                <p className="text-sm font-semibold text-gray-500">
                  Your total learning progress
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[16px] border-blue-100">
                <div className="absolute inset-0 rounded-full border-[16px] border-transparent border-t-[#2563eb] border-r-indigo-600 rotate-45" />

                <div className="text-center">
                  <h2 className="text-5xl font-black text-gray-900">
                    72%
                  </h2>

                  <p className="mt-2 text-sm font-bold text-gray-500">
                    Completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900">
              Recent Activity
            </h3>

            <div className="mt-6 space-y-5">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="rounded-2xl bg-gray-50 p-4"
                >
                  <h4 className="text-sm font-black text-gray-900">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-sm font-semibold text-gray-500">
                    {activity.desc}
                  </p>
                </div>
              ))}
            </div>
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
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-3xl ${color}`}
      >
        {icon}
      </div>

      <p className="mt-6 text-sm font-bold text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-5xl font-black text-gray-900">
        {value}
      </h2>
    </div>
  );
}

function SideCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-gray-500">
        {text}
      </p>
    </div>
  );
}