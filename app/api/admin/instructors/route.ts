// src/app/api/admin/instructors/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  instructors,
  courses,
} from "@/data/fake-data";

// ======================================================
// GET ALL INSTRUCTORS
// ======================================================

export async function GET() {
  try {
    const formattedInstructors =
      instructors.map((instructor) => {
        const instructorCourses =
          courses.filter(
            (course) =>
              course.instructorId ===
              instructor.id
          );

        return {
          ...instructor,

          courses:
            instructorCourses,

          totalPublishedCourses:
            instructorCourses.filter(
              (course) =>
                course.status ===
                "published"
            ).length,

          totalPendingCourses:
            instructorCourses.filter(
              (course) =>
                course.status ===
                "pending"
            ).length,
        };
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Instructors fetched successfully",

        count:
          formattedInstructors.length,

        data:
          formattedInstructors,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "GET INSTRUCTORS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch instructors",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// CREATE INSTRUCTOR
// ======================================================

export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      bio,
      expertise,
    } = body;

    // VALIDATION
    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name and email are required",
        },
        { status: 400 }
      );
    }

    // EMAIL EXISTS
    const existingInstructor =
      instructors.find(
        (instructor) =>
          instructor.email.toLowerCase() ===
          email.toLowerCase()
      );

    if (existingInstructor) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Instructor already exists",
        },
        { status: 409 }
      );
    }

    // CREATE NEW
    const newInstructor = {
      id: `ins_${Date.now()}`,

      name,

      email,

      phone:
        phone ||
        "+91 00000 00000",

      role: "instructor",

      avatar:
        "/images/default-avatar.png",

      bio:
        bio ||
        "New instructor profile",

      status: "pending",

      joinedAt:
        new Date().toISOString(),

      lastLogin:
        new Date().toISOString(),

      verified: false,

      rating: 0,

      totalCourses: 0,

      totalStudents: 0,

      totalRevenue: 0,

      walletBalance: 0,

      themeColor: "#2563eb",

      logo:
        "/images/default-logo.png",

      expertise:
        expertise || [],
    };

    instructors.push(
      newInstructor as any
    );

    return NextResponse.json(
      {
        success: true,

        message:
          "Instructor created successfully",

        data: newInstructor,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE INSTRUCTOR ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to create instructor",
      },
      { status: 500 }
    );
  }
}