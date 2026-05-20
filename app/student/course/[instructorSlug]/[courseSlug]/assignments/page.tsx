import Link from "next/link";
import {
  ClipboardList,
  CheckCircle,
  Clock,
  AlertCircle,
  Upload,
  Eye,
  ArrowRight,
  FileText,
} from "lucide-react";

const assignments = [
  {
    title: "Create Next.js App Router Structure",
    status: "Completed",
    grade: "A+",
    dueDate: "Submitted",
    type: "Practical",
  },
  {
    title: "Build Reusable UI Components",
    status: "Pending",
    grade: "Not Graded",
    dueDate: "24 May 2026",
    type: "Coding",
  },
  {
    title: "Write Course Layout Documentation",
    status: "Overdue",
    grade: "Not Graded",
    dueDate: "18 May 2026",
    type: "Theory",
  },
];

export default function AssignmentsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <ClipboardList size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Assignments
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Submit your assignments, check deadlines, and track your grades.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard icon={<ClipboardList />} title="Total" value="03" />
        <StatCard icon={<CheckCircle />} title="Completed" value="01" />
        <StatCard icon={<Clock />} title="Pending" value="02" />
      </div>

      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#2563eb]">
                    {assignment.type}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-black ${
                      assignment.status === "Completed"
                        ? "bg-green-50 text-green-600"
                        : assignment.status === "Overdue"
                        ? "bg-red-50 text-red-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black text-gray-900">
                  {assignment.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-gray-500">
                  Due Date: {assignment.dueDate}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Eye size={18} />
                  View
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Upload size={18} />
                  Upload
                </button>

                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20"
                >
                  Open
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniInfo label="Grade" value={assignment.grade} />
              <MiniInfo label="Status" value={assignment.status} />
              <MiniInfo label="Due Date" value={assignment.dueDate} />
            </div>
          </div>
        ))}
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

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-xs font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-black text-gray-900">{value}</p>
    </div>
  );
}