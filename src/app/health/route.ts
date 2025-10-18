import { NextResponse } from 'next/server';

export async function GET() {
  const res = NextResponse.json({ status: 'ok' });
  // 禁止浏览器、CDN缓存
  res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  return res;
}
