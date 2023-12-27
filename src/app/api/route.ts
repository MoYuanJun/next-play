import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  console.log(
    '%c [ request ]-4',
    'font-size:13px; background:pink; color:#bf2c9f;',
    headers(),
  );

  return new Response('墨渊君', {
    status: 200,
    headers: {
      'Set-Cookie': `token=${123}`,
    },
  });
};

export const POST = async (request: NextRequest) => {
  const res = await request.json();
  console.log(
    '%c [ res ]-24',
    'font-size:13px; background:pink; color:#bf2c9f;',
    res,
  );

  return NextResponse.json({ name: '墨渊君', res });
};
