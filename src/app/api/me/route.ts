import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "ขุนศึกไท บัวไชโย",
    studentId: "660610743",
  });
};
