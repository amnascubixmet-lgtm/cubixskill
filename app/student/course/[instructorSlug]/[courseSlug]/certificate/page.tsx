// src/app/student/course/[instructorSlug]/[courseSlug]/certificate/page.tsx

import Link from "next/link";
import {
  Award,
  CheckCircle,
  Download,
  Share2,
  Eye,
  ShieldCheck,
  Calendar,
  Trophy,
} from "lucide-react";

export default function CourseCertificatePage() {
  return (
    <section className="space-y-8">
      {/* HERO */}
      <div className="rounded-[40px] bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-8 text-white shadow-2xl shadow-orange-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Award size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Certificate
        </h1>

        <p className="mt-4 max-w-2xl text-orange-50">
          Congratulations! You successfully completed the course and earned your certificate.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          icon={<CheckCircle />}
          title="Course Status"
          value="Completed"
        />

        <StatCard
          icon={<Trophy />}
          title="Final Score"
          value="92%"
        />

        <StatCard
          icon={<Calendar />}
          title="Issued Date"
          value="20 May"
        />

        <StatCard
          icon={<ShieldCheck />}
          title="Verified"
          value="Yes"
        />
      </div>

      {/* CERTIFICATE */}
      <div className="overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-xl">
        <div className="bg-gradient-to-r from-[#2563eb] to-indigo-600 p-6 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.4em]">
            CubixSkill
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Certificate of Completion
          </h2>
        </div>

        <div className="p-8 md:p-16">
          <div className="rounded-[32px] border-[12px] border-blue-50 bg-gradient-to-br from-white to-blue-50 p-8 text-center md:p-14">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-xl">
              <Award size={52} />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[#2563eb]">
              Proudly Presented To
            </p>

            <h1 className="mt-5 text-5xl font-black text-gray-900 md:text-6xl">
              Amnas Ali
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg font-semibold leading-9 text-gray-600">
              For successfully completing the premium course
              <span className="mx-2 font-black text-[#2563eb]">
                “Next.js Masterclass 2026”
              </span>
              and demonstrating outstanding performance in projects,
              assignments, and quizzes.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <InfoCard
                label="Instructor"
                value="Rahul Menon"
              />

              <InfoCard
                label="Completion Date"
                value="20 May 2026"
              />

              <InfoCard
                label="Credential ID"
                value="CUBIX-2026-0921"
              />
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">
              <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                <Download size={18} />
                Download PDF
              </button>

              <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                <Eye size={18} />
                Preview
              </button>

              <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VERIFY */}
      <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Verify Certificate
            </h2>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              This certificate can be verified using the credential ID below.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 px-6 py-4 text-lg font-black text-[#2563eb]">
            CUBIX-2026-0921
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
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-orange-500">
        {icon}
      </div>

      <p className="mt-5 text-sm font-bold text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-black text-gray-900">
        {value}
      </h2>
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <h3 className="mt-3 text-lg font-black text-gray-900">
        {value}
      </h3>
    </div>
  );
}