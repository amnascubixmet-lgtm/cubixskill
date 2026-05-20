// src/app/student/wishlist/page.tsx

import Link from "next/link";
import {
  Heart,
  Star,
  Clock,
  Users,
  ShoppingCart,
  ArrowRight,
  Trash2,
} from "lucide-react";

const wishlistCourses = [
  {
    title: "Next.js Full Stack Masterclass",
    instructor: "Rahul Menon",
    price: "₹1,499",
    oldPrice: "₹3,999",
    rating: "4.9",
    students: "12.5k",
    duration: "32h",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    href: "/student/course/rahul-menon/nextjs-full-stack-masterclass",
  },
  {
    title: "UI/UX Design Premium Bootcamp",
    instructor: "Aisha Fathima",
    price: "₹999",
    oldPrice: "₹2,499",
    rating: "4.8",
    students: "8.2k",
    duration: "24h",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    href: "/student/course/aisha-fathima/ui-ux-design-premium-bootcamp",
  },
  {
    title: "Advanced React Development",
    instructor: "John Mathew",
    price: "₹1,299",
    oldPrice: "₹3,499",
    rating: "4.7",
    students: "6.9k",
    duration: "28h",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    href: "/student/course/john-mathew/advanced-react-development",
  },
];

export default function WishlistPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 p-8 text-white shadow-2xl shadow-pink-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Heart size={32} fill="white" />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          My Wishlist
        </h1>

        <p className="mt-4 max-w-2xl text-pink-50">
          Save your favorite courses and purchase them later from your learning wishlist.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {wishlistCourses.map((course) => (
          <div
            key={course.title}
            className="group overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-500 shadow-lg">
                <Trash2 size={20} />
              </button>

              <div className="absolute bottom-4 left-4 rounded-full bg-white/20 px-4 py-2 text-xs font-black text-white backdrop-blur-xl">
                Saved Course
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  {course.rating}
                </span>

                <span className="flex items-center gap-1">
                  <Users size={16} />
                  {course.students}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {course.duration}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black text-gray-900">
                {course.title}
              </h2>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                Instructor: {course.instructor}
              </p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-3xl font-black text-gray-900">
                  {course.price}
                </span>

                <span className="pb-1 text-sm font-bold text-gray-400 line-through">
                  {course.oldPrice}
                </span>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <Link
                  href={course.href}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 text-[#2563eb] transition hover:bg-blue-50"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}