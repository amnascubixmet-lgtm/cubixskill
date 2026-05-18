import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Star,
  BadgeCheck,
  PlayCircle,
  GraduationCap,
  Trophy,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
              Modern Learning Platform
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
              Learn Skills.
              <br />
              Build Career.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              CubixSkill helps students learn from expert instructors with
              premium courses, projects, certificates and progress tracking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/auth/register"
                className="rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700"
              >
                Join Now
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <MiniStat value="186+" label="Courses" />
              <MiniStat value="8420+" label="Students" />
              <MiniStat value="4.9" label="Rating" />
            </div>
          </div>

          <div className="rounded-[40px] bg-white p-6 shadow-2xl shadow-blue-100">
            <div className="rounded-[32px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">CubixSkill</h2>
                  <p className="mt-2 text-blue-100">
                    Multi instructor learning dashboard.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/20 p-4">
                  <GraduationCap size={30} />
                </div>
              </div>

              <div className="mt-10 grid gap-4">
                <HeroCard icon={<BookOpen />} title="Premium Courses" value="186+" />
                <HeroCard icon={<Users />} title="Active Students" value="8420+" />
                <HeroCard icon={<Star />} title="Course Rating" value="4.9" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Everything for online learning
            </h2>

            <p className="mt-5 text-gray-500">
              Courses, projects, certificates, instructor dashboards and student
              progress in one platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<BookOpen />}
              title="Premium Courses"
              desc="High quality course pages with lessons, projects and reviews."
            />

            <FeatureCard
              icon={<PlayCircle />}
              title="Video Lessons"
              desc="Organized lesson structure with thumbnails, duration and materials."
            />

            <FeatureCard
              icon={<Trophy />}
              title="Certificates"
              desc="Students can earn certificates after completing courses and projects."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-600">
              Why CubixSkill?
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Built for students, instructors and academies
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-500">
              Manage courses, students, certificates, themes and learning
              progress with a clean modern LMS experience.
            </p>

            <div className="mt-8 grid gap-4">
              <Point icon={<BadgeCheck />} text="Multi instructor course system" />
              <Point icon={<Sparkles />} text="Dynamic instructor theme branding" />
              <Point icon={<ShieldCheck />} text="Secure student dashboard and progress" />
            </div>
          </div>

          <div className="rounded-[40px] bg-white p-8 shadow-xl shadow-gray-200/60">
            <div className="grid gap-5">
              <DashboardRow title="Course Progress" value="82%" />
              <DashboardRow title="Completed Lessons" value="46" />
              <DashboardRow title="Certificates Earned" value="12" />
              <DashboardRow title="Active Projects" value="08" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <BadgeCheck size={42} />

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Start learning with CubixSkill today
              </h2>

              <p className="mt-5 max-w-xl text-blue-100">
                Join expert-led courses, submit practical projects and track
                your learning progress.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/courses"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                Browse Courses
              </Link>

              <Link
                href="/auth/register"
                className="rounded-2xl border border-white/30 px-6 py-4 text-sm font-black text-white"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <h3 className="text-3xl font-black text-gray-900">{value}</h3>
      <p className="mt-1 text-sm font-semibold text-gray-500">{label}</p>
    </div>
  );
}

function HeroCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-white/15 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {icon}
        <p className="font-bold">{title}</p>
      </div>

      <h3 className="text-2xl font-black">{value}</h3>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-black text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-500">{desc}</p>
    </div>
  );
}

function Point({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <p className="font-bold text-gray-700">{text}</p>
    </div>
  );
}

function DashboardRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-gray-100 bg-gray-50 p-5">
      <p className="font-bold text-gray-600">{title}</p>
      <h3 className="text-2xl font-black text-[#2563eb]">{value}</h3>
    </div>
  );
}