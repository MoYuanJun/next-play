// middleware.js
import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = (request: NextRequest) => {
  console.log(
    '%c [ request ]-6',
    'font-size:13px; background:pink; color:#bf2c9f;',
    request,
  );

  return NextResponse.redirect('/');
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
};
