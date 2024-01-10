import { cookies } from "next/headers";
import { ACCES_TOKEN_NAME, REFRESH_TOKEN_NAME } from "../const";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete("login");
  cookieStore.delete(ACCES_TOKEN_NAME);
  cookieStore.delete(REFRESH_TOKEN_NAME);
  return new NextResponse(null, { status: 200 });
}
