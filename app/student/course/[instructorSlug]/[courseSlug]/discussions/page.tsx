import {
  MessageSquare,
  Send,
  Search,
  ThumbsUp,
  MessageCircle,
  User,
  Pin,
} from "lucide-react";

const discussions = [
  {
    title: "How does nested layout work in Next.js?",
    author: "Amnas Ali",
    replies: 12,
    likes: 24,
    tag: "Question",
    pinned: true,
  },
  {
    title: "Best way to structure course routes?",
    author: "Fathima Noor",
    replies: 8,
    likes: 17,
    tag: "Discussion",
    pinned: false,
  },
  {
    title: "Can we use dynamic instructor slug?",
    author: "Rahul K",
    replies: 5,
    likes: 10,
    tag: "Help",
    pinned: false,
  },
];

export default function DiscussionsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <MessageSquare size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Discussions
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Ask questions, join discussions, and learn together with your course community.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Topics" value="48" />
        <StatCard title="Replies" value="320" />
        <StatCard title="Active Students" value="96" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="flex items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm">
            <Search className="text-gray-400" size={22} />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full bg-transparent text-sm font-semibold outline-none"
            />
          </div>

          {discussions.map((discussion) => (
            <div
              key={discussion.title}
              className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
                  <User />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    {discussion.pinned && (
                      <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-black text-yellow-600">
                        <Pin size={13} />
                        Pinned
                      </span>
                    )}

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-[#2563eb]">
                      {discussion.tag}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-gray-900">
                    {discussion.title}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-gray-500">
                    Started by {discussion.author}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-gray-500">
                    <span className="flex items-center gap-2">
                      <MessageCircle size={17} />
                      {discussion.replies} Replies
                    </span>

                    <span className="flex items-center gap-2">
                      <ThumbsUp size={17} />
                      {discussion.likes} Likes
                    </span>
                  </div>
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
            Start Discussion
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Ask your doubts or start a new topic.
          </p>

          <input
            type="text"
            placeholder="Discussion title"
            className="mt-6 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <textarea
            placeholder="Write your question..."
            className="mt-4 min-h-40 w-full rounded-3xl border border-gray-200 bg-gray-50 p-5 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-4 text-sm font-black text-white">
            <Send size={18} />
            Post Discussion
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