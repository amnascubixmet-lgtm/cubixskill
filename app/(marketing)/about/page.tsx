import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
              About CubixSkill
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
              A modern platform
              <br />
              for online learning
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">
              CubixSkill is a premium multi instructor learning platform built
              for students, instructors and academies to create powerful online
              learning experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <StatCard value="186+" label="Courses" />
          <StatCard value="8420+" label="Students" />
          <StatCard value="120+" label="Instructors" />
          <StatCard value="4.9" label="Platform Rating" />
        </div>
      </section>

      {/* STORY */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-600">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Designed for the future of education
            </h2>

            <p className="mt-6 leading-8 text-gray-500">
              We created CubixSkill to help instructors build premium online
              academies and help students learn practical skills through modern
              learning experiences.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              From video lessons and projects to certificates and analytics,
              everything is built to make online education modern, scalable and
              engaging.
            </p>
          </div>

          <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-8 text-white shadow-2xl shadow-blue-500/20">
            <div className="grid gap-5">
              <FeatureRow
                icon={<GraduationCap />}
                title="Premium Learning Experience"
              />

              <FeatureRow
                icon={<Users />}
                title="Multi Instructor Platform"
              />

              <FeatureRow
                icon={<Trophy />}
                title="Projects & Certificates"
              />

              <FeatureRow
                icon={<Sparkles />}
                title="Modern UI & Dynamic Themes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Why students love CubixSkill
            </h2>

            <p className="mt-5 text-gray-500">
              Everything needed to learn, grow and build career-ready skills.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={<BookOpen />}
              title="Structured Courses"
              desc="Modern courses with lessons, projects, quizzes and progress tracking."
            />

            <InfoCard
              icon={<BadgeCheck />}
              title="Verified Certificates"
              desc="Earn professional certificates after completing courses and projects."
            />

            <InfoCard
              icon={<ShieldCheck />}
              title="Secure Platform"
              desc="Reliable infrastructure with protected student and instructor data."
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
              Our Mission
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Empowering modern digital education
            </h2>

            <p className="mt-6 leading-8 text-gray-500">
              Our goal is to help instructors launch their own branded learning
              platforms while helping students access high quality practical
              education from anywhere.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <MissionCard
              title="Innovation"
              desc="Modern technologies and premium user experiences."
            />

            <MissionCard
              title="Accessibility"
              desc="Learning experiences designed for everyone."
            />

            <MissionCard
              title="Growth"
              desc="Helping students build real-world career skills."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">
                Ready to start learning?
              </h2>

              <p className="mt-5 max-w-xl text-blue-100">
                Join thousands of students learning modern skills from expert
                instructors on CubixSkill.
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

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-8 text-center shadow-sm">
      <h3 className="text-5xl font-black text-[#2563eb]">{value}</h3>

      <p className="mt-3 text-sm font-bold text-gray-500">{label}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
        {icon}
      </div>

      <h3 className="text-lg font-black">{title}</h3>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-black text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">{desc}</p>
    </div>
  );
}

function MissionCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-black text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">{desc}</p>
    </div>
  );
}