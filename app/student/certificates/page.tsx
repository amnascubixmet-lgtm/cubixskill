// src/app/student/certificates/page.tsx

import Link from "next/link";
import {
  Award,
  Download,
  Eye,
  Calendar,
  CheckCircle,
  Share2,
} from "lucide-react";

const certificates = [
  {
    title: "Next.js Masterclass 2026",
    instructor: "Rahul Menon",
    date: "12 May 2026",
    credentialId: "CUBIX-NEXT-2026-001",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "UI/UX Design Bootcamp",
    instructor: "Aisha Fathima",
    date: "28 April 2026",
    credentialId: "CUBIX-UIUX-2026-014",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
  },
];

export default function CertificatesPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 p-8 text-white shadow-2xl shadow-orange-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Award size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          My Certificates
        </h1>

        <p className="mt-4 max-w-2xl text-orange-50">
          View, download, and share your earned CubixSkill certificates.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.credentialId}
            className="overflow-hidden rounded-[34px] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white">
                  <CheckCircle size={15} />
                  {certificate.status}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-black text-gray-900">
                {certificate.title}
              </h2>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                Instructor: {certificate.instructor}
              </p>

              <div className="mt-5 space-y-3 rounded-3xl bg-gray-50 p-5">
                <InfoRow
                  icon={<Calendar size={18} />}
                  label="Issued Date"
                  value={certificate.date}
                />

                <InfoRow
                  icon={<Award size={18} />}
                  label="Credential ID"
                  value={certificate.credentialId}
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-black text-white"
                >
                  <Eye size={18} />
                  View
                </Link>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Download size={18} />
                  Download
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <div className="flex items-center gap-2 font-bold text-gray-500">
        {icon}
        {label}
      </div>

      <span className="text-right font-black text-gray-900">
        {value}
      </span>
    </div>
  );
}