// src/app/student/cart/page.tsx

import Link from "next/link";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Tag,
  CreditCard,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const cartItems = [
  {
    title: "Next.js Full Stack Masterclass",
    instructor: "Rahul Menon",
    price: 1499,
    oldPrice: 3999,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    href: "/student/course/rahul-menon/nextjs-full-stack-masterclass",
  },
  {
    title: "UI/UX Design Premium Bootcamp",
    instructor: "Aisha Fathima",
    price: 999,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    href: "/student/course/aisha-fathima/ui-ux-design-premium-bootcamp",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = 500;
  const tax = 99;
  const total = subtotal - discount + tax;

  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <ShoppingCart size={32} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          My Cart
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Review your selected courses and complete your secure checkout.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.title}
              className="grid gap-6 rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm md:grid-cols-[220px,1fr]"
            >
              <div className="h-52 overflow-hidden rounded-[26px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <Link
                    href={item.href}
                    className="text-2xl font-black text-gray-900 hover:text-[#2563eb]"
                  >
                    {item.title}
                  </Link>

                  <p className="mt-2 text-sm font-semibold text-gray-500">
                    Instructor: {item.instructor}
                  </p>

                  <div className="mt-5 flex items-end gap-3">
                    <span className="text-3xl font-black text-gray-900">
                      ₹{item.price}
                    </span>

                    <span className="pb-1 text-sm font-bold text-gray-400 line-through">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 p-1">
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-700">
                      <Minus size={16} />
                    </button>

                    <span className="px-5 text-sm font-black text-gray-900">
                      1
                    </span>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-700">
                      <Plus size={16} />
                    </button>
                  </div>

                  <button className="flex items-center gap-2 rounded-2xl bg-red-50 px-5 py-3 text-sm font-black text-red-600">
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-gray-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            <SummaryRow label="Subtotal" value={`₹${subtotal}`} />
            <SummaryRow label="Discount" value={`- ₹${discount}`} />
            <SummaryRow label="Tax" value={`₹${tax}`} />
          </div>

          <div className="my-6 border-t border-gray-100" />

          <div className="flex items-center justify-between">
            <span className="text-lg font-black text-gray-900">
              Total
            </span>

            <span className="text-4xl font-black text-[#2563eb]">
              ₹{total}
            </span>
          </div>

          <div className="mt-6 rounded-3xl bg-blue-50 p-5">
            <div className="flex items-center gap-3">
              <Tag className="text-[#2563eb]" />
              <div>
                <p className="text-sm font-black text-gray-900">
                  Coupon Applied
                </p>
                <p className="text-xs font-semibold text-gray-500">
                  CUBIX500 discount added
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/student/checkout"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563eb] to-indigo-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20"
          >
            <CreditCard size={18} />
            Proceed to Checkout
            <ArrowRight size={18} />
          </Link>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-gray-500">
            <ShieldCheck size={18} className="text-green-600" />
            Secure payment protected
          </div>
        </aside>
      </div>
    </section>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm font-bold">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}