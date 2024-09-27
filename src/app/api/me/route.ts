import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Khunsuekthai Buachaiyo",
    studentId: "660610743",
  });
};
