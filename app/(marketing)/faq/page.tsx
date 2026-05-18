import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is CubixSkill?",
    a: "CubixSkill is a modern LMS platform for students, instructors and academies.",
  },
  {
    q: "Can students get certificates?",
    a: "Yes, students can earn certificates after completing courses and projects.",
  },
  {
    q: "Can instructors sell courses?",
    a: "Yes, instructors can create, manage and sell their own courses.",
  },
  {
    q: "Does CubixSkill support custom themes?",
    a: "Yes, each instructor or academy can have custom branding and theme styles.",
  },
  {
    q: "Is there a student dashboard?",
    a: "Yes, students get a dashboard for courses, progress, certificates and messages.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            FAQ
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Frequently asked questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Find quick answers about courses, certificates, instructors and
            CubixSkill platform features.
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
                  <HelpCircle size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-900">
                    {item.q}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <MessageCircle size={44} />

              <h2 className="mt-6 text-4xl font-black">
                Still have questions?
              </h2>

              <p className="mt-4 max-w-xl text-blue-100">
                Contact our support team for course details, pricing or academy
                setup help.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}