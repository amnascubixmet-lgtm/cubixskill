
import Link from "next/link";
import {
  FileQuestion,
  CheckCircle,
  Clock,
  AlertTriangle,
  Trophy,
  PlayCircle,
  Eye,
  ArrowRight,
} from "lucide-react";

const quizzes = [
  {
    title: "Next.js Routing Fundamentals",
    questions: 20,
    duration: "25 Minutes",
    score: "92%",
    status: "Completed",
    difficulty: "Beginner",
  },
  {
    title: "Advanced Layout System Quiz",
    questions: 15,
    duration: "20 Minutes",
    score: "Pending",
    status: "Available",
    difficulty: "Intermediate",
  },
  {
    title: "Dynamic Course Architecture",
    questions: 30,
    duration: "40 Minutes",
    score: "Locked",
    status: "Locked",
    difficulty: "Advanced",
  },
];

export default function QuizPage() {
  return (
    <section className="space-y-8">
      {/* HERO */}
      <div className="rounded-[40px] bg-gradient-to-br from-violet-600 via-indigo-600 to-[#2563eb] p-8 text-white shadow-2xl shadow-indigo-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <FileQuestion size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Quizzes
        </h1>

        <p className="mt-4 max-w-2xl text-indigo-100">
          Test your knowledge, improve your understanding, and track your quiz performance.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          icon={<FileQuestion />}
          title="Total Quizzes"
          value="03"
        />

        <StatCard
          icon={<CheckCircle />}
          title="Completed"
          value="01"
        />

        <StatCard
          icon={<Clock />}
          title="Pending"
          value="01"
        />

        <StatCard
          icon={<Trophy />}
          title="Best Score"
          value="92%"
        />
      </div>

      {/* QUIZ LIST */}
      <div className="space-y-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.title}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#2563eb]">
                    {quiz.difficulty}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-black ${
                      quiz.status === "Completed"
                        ? "bg-green-50 text-green-600"
                        : quiz.status === "Available"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {quiz.status}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black text-gray-900">
                  {quiz.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-5 text-sm font-semibold text-gray-500">
                  <span>{quiz.questions} Questions</span>
                  <span>{quiz.duration}</span>
                  <span>Score: {quiz.score}</span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="grid gap-3 sm:grid-cols-3">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 transition hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Eye size={18} />
                  Preview
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 transition hover:border-[#2563eb] hover:text-[#2563eb]">
                  <AlertTriangle size={18} />
                  Rules
                </button>

                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563eb] to-indigo-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20"
                >
                  <PlayCircle size={18} />
                  Start Quiz
                </Link>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniInfo
                label="Questions"
                value={`${quiz.questions}`}
              />

              <MiniInfo
                label="Duration"
                value={quiz.duration}
              />

              <MiniInfo
                label="Current Score"
                value={quiz.score}
              />
            </div>
          </div>
        ))}
      </div>

      {/* PERFORMANCE */}
      <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
            <Trophy size={30} />
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Quiz Performance
            </h2>

            <p className="mt-1 text-sm font-semibold text-gray-500">
              Your overall quiz analytics and improvement tracking
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <PerformanceCard
            title="Average Score"
            value="88%"
          />

          <PerformanceCard
            title="Quizzes Completed"
            value="12"
          />

          <PerformanceCard
            title="Rank Position"
            value="#08"
          />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm font-bold text-gray-500">
            <span>Overall Performance</span>
            <span>88%</span>
          </div>

          <div className="mt-3 h-4 overflow-hidden rounded-full bg-blue-100">
            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#2563eb] to-indigo-600" />
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

      <p className="mt-5 text-sm font-bold text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-black text-gray-900">
        {value}
      </h2>
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

      <p className="mt-2 text-sm font-black text-gray-900">
        {value}
      </p>
    </div>
  );
}

function PerformanceCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[28px] bg-gray-50 p-6">
      <p className="text-sm font-bold text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-black text-gray-900">
        {value}
      </h3>
    </div>
  );
}