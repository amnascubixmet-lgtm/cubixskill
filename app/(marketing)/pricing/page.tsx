import Link from "next/link";
import { BadgeCheck, Check, Crown, Rocket, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    desc: "Best for beginners starting online learning.",
    icon: <Sparkles />,
    features: [
      "Access to free courses",
      "Basic student dashboard",
      "Course progress tracking",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    desc: "Perfect for serious learners and skill builders.",
    icon: <Rocket />,
    features: [
      "Access to premium courses",
      "Projects and assignments",
      "Downloadable resources",
      "Certificates included",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Academy",
    price: "₹2499",
    desc: "For instructors and academies selling courses.",
    icon: <Crown />,
    features: [
      "Instructor dashboard",
      "Course management",
      "Student management",
      "Custom branding theme",
      "Analytics and earnings",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            Pricing Plans
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Simple pricing for every learner
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Choose the right CubixSkill plan for students, professionals,
            instructors and academies.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[36px] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-[#2563eb] bg-gradient-to-br from-[#2563eb] to-indigo-600 text-white shadow-blue-500/20"
                  : "border-gray-100 bg-white text-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-black text-[#2563eb]">
                  Most Popular
                </div>
              )}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-3xl ${
                  plan.popular
                    ? "bg-white/20 text-white"
                    : "bg-blue-100 text-[#2563eb]"
                }`}
              >
                {plan.icon}
              </div>

              <h2 className="mt-8 text-3xl font-black">{plan.name}</h2>

              <p
                className={`mt-3 leading-7 ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <h3 className="text-5xl font-black">{plan.price}</h3>
                <span
                  className={`pb-2 text-sm font-bold ${
                    plan.popular ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  / month
                </span>
              </div>

              <Link
                href="/auth/register"
                className={`mt-8 flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-black ${
                  plan.popular
                    ? "bg-white text-[#2563eb]"
                    : "bg-[#2563eb] text-white"
                }`}
              >
                Get Started
              </Link>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-white/20 text-white"
                          : "bg-blue-100 text-[#2563eb]"
                      }`}
                    >
                      <Check size={16} />
                    </div>

                    <p
                      className={`text-sm font-semibold ${
                        plan.popular ? "text-blue-50" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Every plan includes
            </h2>

            <p className="mt-5 text-gray-500">
              CubixSkill is built with modern learning tools for students and
              instructors.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <BenefitCard title="Progress Tracking" />
            <BenefitCard title="Modern Dashboard" />
            <BenefitCard title="Course Certificates" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <BadgeCheck size={44} />

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Start learning with the right plan
              </h2>

              <p className="mt-5 max-w-xl text-blue-100">
                Upgrade anytime and unlock more premium courses, certificates
                and instructor tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/courses"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                View Courses
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/30 px-6 py-4 text-sm font-black text-white"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ title }: { title: string }) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
        <Check size={28} />
      </div>

      <h3 className="mt-6 text-xl font-black text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-500">
        Designed to support a clean, premium and scalable learning experience.
      </p>
    </div>
  );
}