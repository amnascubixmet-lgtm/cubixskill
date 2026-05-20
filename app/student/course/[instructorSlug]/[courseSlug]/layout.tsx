import type { ReactNode } from "react";

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{
    instructorSlug: string;
    courseSlug: string;
  }>;
};

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  await params;

  return <>{children}</>;
}