// src/middleware.ts
import { jwtDecode } from 'jwt-decode';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCES_TOKEN_NAME, REFRESH_TOKEN_NAME } from './app/api-v2/const';
import { END_POINT_URL_LIST } from '@services/urls';

const refreshToken = async (rtk: string) => {
  const res = await fetch(
    `https://www.fxeater.com/api/${END_POINT_URL_LIST.REFRESH}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: rtk,
      }),
    },
  );

  const data = await res.json();

  return data?.access;
};

const validateToken = ({ atk, rtk }: { atk: string; rtk: string }) => {
  const expiresIn = atk ? (jwtDecode(atk).exp || 0) * 1000 - Date.now() : 0;
  if (expiresIn < 60 * 5 * 1000 || (rtk && !atk)) {
    return {
      isNeedRefresh: true,
    };
  }

  return {
    isNeedRefresh: false,
  };
};

const middleware = async (request: NextRequest) => {
  const atk = request.cookies.get(ACCES_TOKEN_NAME)?.value || '';
  const rtk = request.cookies.get(REFRESH_TOKEN_NAME)?.value || '';

  const { isNeedRefresh } = validateToken({ atk, rtk });
  if (isNeedRefresh) {
    const newAtk = await refreshToken(rtk);
    if (newAtk) {
      const requestHeaders = new Headers(request.headers);
      const response = NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      });

      // update response
      response.cookies.set({ name: 'login', value: 'true', httpOnly: true });
      response.cookies.set({
        name: ACCES_TOKEN_NAME,
        value: newAtk,
        httpOnly: true,
        maxAge: 60 * (60 - 5), // 55 minutes
      });

      // update request
      response.headers.set('x-atk', newAtk);

      return response;
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/api-v2/:path*'],
};

export { middleware };
