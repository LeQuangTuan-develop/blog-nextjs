import { type NextRequest, NextResponse } from 'next/server'
import { ACCES_TOKEN_NAME } from '../const';
import { TUser } from '../../../../common/interface';
import { ApiService, END_POINT_URL_LIST } from '@services/index';



async function getUserByValidSessionToken(token: string): Promise<TUser> {
  const res = await ApiService.getServer(END_POINT_URL_LIST.ME, {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  })

  return {
    username: res.base_user.username,
    email: res.base_user.email,
    id: res.base_user.id,
    avatar: res.avatar,
    is_active: true
  };
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<any>> {
  const token = request.cookies.get(ACCES_TOKEN_NAME)?.value || request.headers.get(`x-${ACCES_TOKEN_NAME}`)
  const user = !token
    ? undefined
    : await getUserByValidSessionToken(token);

  if (!user) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Unauthorized",
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.json(user);
}