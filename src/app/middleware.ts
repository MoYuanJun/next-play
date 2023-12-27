// middleware.js
import { NextResponse, type NextRequest } from 'next/server';

// 中间件可以是 async 函数，如果使用了 await
export const middleware = (request: NextRequest) => {
  console.log(
    '%c [ 1 ]-7',
    'font-size:13px; background:pink; color:#bf2c9f;',
    1,
  );
  return NextResponse.redirect(new URL('/home', request.url));
};

// 设置匹配路径
export const config = {
  matcher: '/about/:path*',
};
