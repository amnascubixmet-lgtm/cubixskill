// src/app/student/course/[instructorSlug]/[courseSlug]/reviews/page.tsx

import {
  Star,
  MessageSquare,
  ThumbsUp,
  User,
  Send,
} from "lucide-react";

const reviews = [
  {
    name: "Amnas Ali",
    rating: 5,
    date: "12 May 2026",
    comment:
      "Excellent course structure. Lessons are simple, practical, and easy to follow.",
  },
  {
    name: "Fathima Noor",
    rating: 4,
    date: "08 May 2026",
    comment:
      "Good teaching style and clear examples. Projects helped me understand better.",
  },
  {
    name: "Rahul K",
    rating: 5,
    date: "02 May 2026",
    comment:
      "Very useful for beginners and intermediate students. Premium learning experience.",
  },
];

export default function CourseReviewsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-8 text-white shadow-2xl shadow-orange-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Star size={34} fill="white" />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Reviews
        </h1>

        <p className="mt-4 max-w-2xl text-orange-50">
          Read student feedback and share your learning experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Average Rating" value="4.8" />
        <StatCard title="Total Reviews" value="248" />
        <StatCard title="5 Star Reviews" value="196" />
        <StatCard title="Satisfaction" value="96%" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
                  <User />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-black text-gray-900">
                        {review.name}
                      </h2>

                      <p className="text-sm font-semibold text-gray-500">
                        {review.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-semibold leading-7 text-gray-600">
                    {review.comment}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-sm font-black text-[#2563eb]">
                    <ThumbsUp size={18} />
                    Helpful
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
            <MessageSquare />
          </div>

          <h2 className="mt-5 text-2xl font-black text-gray-900">
            Write a Review
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Share your feedback about this course.
          </p>

          <div className="mt-6 flex gap-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={26} fill="currentColor" />
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            className="mt-6 min-h-40 w-full rounded-3xl border border-gray-200 bg-gray-50 p-5 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-4 text-sm font-black text-white">
            <Send size={18} />
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-gray-500">{title}</p>
      <h2 className="mt-3 text-4xl font-black text-gray-900">{value}</h2>
    </div>
  );
}