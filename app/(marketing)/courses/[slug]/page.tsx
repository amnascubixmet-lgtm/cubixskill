import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  Share2,
  User2,
} from "lucide-react";

const blogPosts = [
  {
    slug: "future-of-online-learning",
    title: "The Future of Online Learning Platforms",
    description:
      "Discover how AI, interactive courses and multi instructor systems are changing modern education.",
    image: "/images/blog/online-learning.jpg",
    author: "CubixSkill Team",
    date: "May 18, 2026",
    readTime: "5 min read",
    category: "Education",
    content: `
Online learning is evolving rapidly with AI-powered systems,
interactive dashboards and personalized learning experiences.

Modern LMS platforms are no longer simple video platforms.
Students now expect projects, certificates, analytics,
progress tracking and real-world learning systems.

Multi instructor platforms are also becoming more popular
because they allow academies and educators to build
their own branded learning environments.

Technologies like Next.js, Tailwind CSS and TypeScript
make it possible to build scalable and modern LMS systems
with premium UI experiences.

The future of learning focuses on flexibility,
practical skills and interactive communities.
    `,
  },
  {
    slug: "nextjs-lms-development",
    title: "Building a Modern LMS using Next.js",
    description:
      "Learn how to create scalable learning platforms using App Router, Tailwind CSS and TypeScript.",
    image: "/images/blog/nextjs-lms.jpg",
    author: "Rahul Menon",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Development",
    content: `
Next.js App Router makes it easier to create
large scale applications with layouts, nested routes
and server components.

For LMS systems, route groups help organize
student, instructor and admin dashboards cleanly.

Tailwind CSS allows rapid UI development while
maintaining a premium design system.

Combining TypeScript with reusable components
helps maintain scalable code architecture for
future LMS expansion.
    `,
  },
];

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-5xl font-black text-gray-900">
            Article Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The blog article you are looking for does not exist.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-black text-white"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-black text-[#2563eb]"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="mt-8 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            {post.category}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500">
            <span className="flex items-center gap-2">
              <User2 size={16} />
              {post.author}
            </span>

            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_320px]">
          <article className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-p:text-gray-600 prose-p:leading-8">
              {post.content.split("\n").map((paragraph, index) => {
                if (!paragraph.trim()) return null;

                return (
                  <p key={index}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900">
                Share Article
              </h3>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-4 text-sm font-black text-white">
                <Share2 size={18} />
                Share Post
              </button>
            </div>

            <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900">
                Related Topics
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                <Tag text="Next.js" />
                <Tag text="LMS" />
                <Tag text="Education" />
                <Tag text="UI/UX" />
                <Tag text="Students" />
                <Tag text="Technology" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-6 text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-3xl font-black">
                Start learning today
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Join CubixSkill and access premium online courses from expert
                instructors.
              </p>

              <Link
                href="/courses"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#2563eb]"
              >
                Browse Courses
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-[#2563eb]">
      {text}
    </span>
  );
}