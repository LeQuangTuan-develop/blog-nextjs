import { type NextRequest, NextResponse } from 'next/server'

import { ACCES_TOKEN_NAME, REFRESH_TOKEN_NAME } from '../const';
import { ApiService, END_POINT_URL_LIST } from '@services/index';


export async function POST(request: NextRequest) {

  const body = await request.json()

  const res = await ApiService.postServer(END_POINT_URL_LIST.LOGIN, JSON.stringify(body))

  if (res.user?.is_active) {
    const response = NextResponse.json( res.user, { status: 200 });
    response.cookies.set({ name: "login", value: "true", httpOnly: true });
    response.cookies.set({
      name: ACCES_TOKEN_NAME,
      value: res?.access || '',
      httpOnly: true,
      maxAge: 60 * 60 * 15, // 15 minutes
    })
  
    response.cookies.set({
      name: REFRESH_TOKEN_NAME,
      value: res?.refresh || '',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return response;
  }

  return new NextResponse(null, {
    status: 400,
    statusText: "Unauthorized",
    headers: { "Content-Type": "text/plain" },
  });

}