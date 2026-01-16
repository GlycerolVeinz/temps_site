import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiBase = process.env.API_BASE;
  if (!apiBase) {
    return NextResponse.json(
      { success: false, error: 'API not configured' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${apiBase}/shows`, { cache: 'no-store' });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Upstream API failed:', err);
    return NextResponse.json(
      { success: false, error: 'Upstream failed' },
      { status: 502 }
    );
  }
}
