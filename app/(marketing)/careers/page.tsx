import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Kerala, India",
  },
  {
    title: "Course Content Creator",
    type: "Part Time",
    location: "Remote",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            Careers
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Join our mission to build modern learning
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Work with CubixSkill and help students, instructors and academies
            create better online education experiences.
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <ValueCard icon={<Sparkles />} title="Innovation" />
          <ValueCard icon={<Users />} title="Team Culture" />
          <ValueCard icon={<Briefcase />} title="Career Growth" />
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-600">
              Open Positions
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Current job openings
            </h2>

            <p className="mt-5 text-gray-500">
              Explore available roles and become part of the CubixSkill team.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-6 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    {job.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-gray-500">
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {job.type}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-black text-white"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Don’t see your role?
          </h2>

          <p className="mt-5 max-w-2xl text-blue-100">
            Send your profile to our team. We are always looking for talented
            people who love building education products.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-black text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-500">
        Build meaningful products with a modern, creative and growth-focused
        team.
      </p>
    </div>
  );
}