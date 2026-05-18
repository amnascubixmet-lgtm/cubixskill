import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            Contact Us
          </span>

          <h1 className="mt-8 max-w-3xl text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Let’s build your learning journey
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Have questions about courses, instructors, pricing or academy setup?
            Contact the CubixSkill team.
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <ContactCard
              icon={<Mail />}
              title="Email"
              text="support@cubixskill.com"
            />

            <ContactCard
              icon={<Phone />}
              title="Phone"
              text="+91 98765 43210"
            />

            <ContactCard
              icon={<MapPin />}
              title="Location"
              text="Kerala, India"
            />

            <ContactCard
              icon={<Clock />}
              title="Working Hours"
              text="Mon - Sat, 9:00 AM - 6:00 PM"
            />
          </div>

          <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60 lg:col-span-2">
            <h2 className="text-3xl font-black text-gray-900">
              Send us a message
            </h2>

            <p className="mt-3 text-gray-500">
              Fill out the form and our team will contact you soon.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Full Name" placeholder="Enter your name" />
                <Input label="Email Address" placeholder="Enter your email" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Phone Number" placeholder="Enter your phone" />
                <Input label="Subject" placeholder="Course inquiry" />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-3xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb] focus:bg-white"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <MessageCircle size={44} />

              <h2 className="mt-6 text-4xl font-black">
                Need quick support?
              </h2>

              <p className="mt-4 max-w-xl text-blue-100">
                Chat with our team directly for course details, pricing and
                academy setup support.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="https://wa.me/919876543210"
                className="inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black text-gray-900">{title}</h3>

      <p className="mt-2 text-sm font-semibold text-gray-500">{text}</p>
    </div>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-sm font-bold text-gray-700">{label}</label>

      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-3xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb] focus:bg-white"
      />
    </div>
  );
}