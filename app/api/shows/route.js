import { NextResponse } from 'next/server';
import { fetchShows } from '@/lib/api/shows';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await fetchShows();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Upstream API failed:', err);
    return NextResponse.json(
      { success: false, error: 'Upstream failed' },
      { status: 502 }
    );
  }
}
