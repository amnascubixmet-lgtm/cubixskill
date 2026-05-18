// src/app/(marketing)/blog/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Search,
  User2,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-online-learning",
    title: "The Future of Online Learning Platforms",
    description:
      "Discover how AI, interactive courses and multi instructor systems are changing modern education.",
    image: "/images/blog/online-learning.jpg",
    author: "CubixSkill Team",
    date: "May 18, 2026",
    readTime: "5 min read",
    category: "Education",
  },
  {
    id: 2,
    slug: "nextjs-lms-development",
    title: "Building a Modern LMS using Next.js",
    description:
      "Learn how to create scalable learning platforms using App Router, Tailwind CSS and TypeScript.",
    image: "/images/blog/nextjs-lms.jpg",
    author: "Rahul Menon",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Development",
  },
  {
    id: 3,
    slug: "student-productivity-guide",
    title: "Student Productivity Guide for Online Learning",
    description:
      "Simple techniques students can use to stay consistent and finish courses faster.",
    image: "/images/blog/student-productivity.jpg",
    author: "CubixSkill Team",
    date: "May 10, 2026",
    readTime: "4 min read",
    category: "Students",
  },
  {
    id: 4,
    slug: "design-systems-for-beginners",
    title: "Design Systems for Beginners",
    description:
      "Understand spacing, typography, components and scalable UI systems in Figma.",
    image: "/images/blog/design-system.jpg",
    author: "Aisha Fathima",
    date: "May 08, 2026",
    readTime: "6 min read",
    category: "UI/UX",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#2563eb]">
            CubixSkill Blog
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Articles, insights & learning tips
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Explore articles about development, online learning, UI/UX,
            productivity and digital education.
          </p>

          {/* SEARCH */}
          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-[28px] border border-gray-200 bg-white p-3 shadow-lg shadow-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
              <Search size={20} />
            </div>

            <input
              type="text"
              placeholder="Search blog articles..."
              className="h-12 flex-1 bg-transparent text-sm font-medium outline-none"
            />

            <button className="rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-black text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[#2563eb] shadow">
                  {post.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500">
                  <span className="flex items-center gap-2">
                    <User2 size={14} />
                    {post.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black leading-tight text-gray-900">
                  {post.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-500">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#2563eb]"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2563eb] to-indigo-600 p-10 text-white md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">
                Start learning with CubixSkill
              </h2>

              <p className="mt-5 max-w-xl text-blue-100">
                Access premium courses, projects and certificates from expert
                instructors around the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/courses"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#2563eb]"
              >
                Browse Courses
              </Link>

              <Link
                href="/auth/register"
                className="rounded-2xl border border-white/30 px-6 py-4 text-sm font-black text-white"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}