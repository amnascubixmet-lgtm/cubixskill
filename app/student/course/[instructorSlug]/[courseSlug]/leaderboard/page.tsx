// src/app/student/course/[instructorSlug]/[courseSlug]/leaderboard/page.tsx

import {
  Trophy,
  Medal,
  Crown,
  Star,
  Flame,
  TrendingUp,
} from "lucide-react";

const leaderboard = [
  {
    rank: 1,
    name: "Amnas Ali",
    points: 5420,
    lessons: 48,
    streak: 28,
    badge: "Champion",
  },
  {
    rank: 2,
    name: "Fathima Noor",
    points: 4980,
    lessons: 44,
    streak: 22,
    badge: "Elite",
  },
  {
    rank: 3,
    name: "Rahul K",
    points: 4650,
    lessons: 40,
    streak: 18,
    badge: "Pro",
  },
  {
    rank: 4,
    name: "Aisha M",
    points: 4210,
    lessons: 38,
    streak: 14,
    badge: "Advanced",
  },
  {
    rank: 5,
    name: "John Mathew",
    points: 3980,
    lessons: 35,
    streak: 12,
    badge: "Rising",
  },
];

export default function LeaderboardPage() {
  return (
    <section className="space-y-8">
      {/* HERO */}
      <div className="rounded-[40px] bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-8 text-white shadow-2xl shadow-orange-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Trophy size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Leaderboard
        </h1>

        <p className="mt-4 max-w-2xl text-orange-50">
          Compete with students, earn points, maintain streaks, and climb the rankings.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          icon={<Trophy />}
          title="Top Rank"
          value="#01"
        />

        <StatCard
          icon={<Star />}
          title="Your Points"
          value="5420"
        />

        <StatCard
          icon={<Flame />}
          title="Current Streak"
          value="28 Days"
        />

        <StatCard
          icon={<TrendingUp />}
          title="Course XP"
          value="92%"
        />
      </div>

      {/* TOP 3 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {leaderboard.slice(0, 3).map((student) => (
          <div
            key={student.rank}
            className={`rounded-[32px] p-8 text-center shadow-xl ${
              student.rank === 1
                ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
                : student.rank === 2
                ? "bg-gradient-to-br from-slate-300 to-slate-500 text-white"
                : "bg-gradient-to-br from-amber-700 to-orange-800 text-white"
            }`}
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-4xl font-black backdrop-blur-xl">
              {student.rank === 1 ? (
                <Crown size={42} />
              ) : (
                <Medal size={42} />
              )}
            </div>

            <h2 className="mt-6 text-3xl font-black">
              {student.name}
            </h2>

            <p className="mt-2 text-sm font-bold uppercase tracking-wider">
              {student.badge}
            </p>

            <div className="mt-6">
              <h3 className="text-5xl font-black">
                {student.points}
              </h3>

              <p className="mt-2 text-sm font-bold">
                Total Points
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <MiniCard
                label="Lessons"
                value={`${student.lessons}`}
              />

              <MiniCard
                label="Streak"
                value={`${student.streak}d`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-6">
          <h2 className="text-3xl font-black text-gray-900">
            Full Rankings
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Live student leaderboard rankings
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Rank
                </th>

                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Student
                </th>

                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Badge
                </th>

                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Points
                </th>

                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Lessons
                </th>

                <th className="px-6 py-5 text-left text-sm font-black text-gray-500">
                  Streak
                </th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((student) => (
                <tr
                  key={student.rank}
                  className="border-t border-gray-100 transition hover:bg-blue-50"
                >
                  <td className="px-6 py-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-black text-[#2563eb]">
                      #{student.rank}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <h3 className="text-lg font-black text-gray-900">
                      {student.name}
                    </h3>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#2563eb]">
                      {student.badge}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm font-black text-gray-900">
                    {student.points}
                  </td>

                  <td className="px-6 py-5 text-sm font-black text-gray-900">
                    {student.lessons}
                  </td>

                  <td className="px-6 py-5 text-sm font-black text-orange-600">
                    🔥 {student.streak} Days
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      <h2 className="mt-2 text-4xl font-black text-gray-900">
        {value}
      </h2>
    </div>
  );
}

function MiniCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
      <p className="text-xs font-black uppercase tracking-wider">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-black">
        {value}
      </h3>
    </div>
  );
}