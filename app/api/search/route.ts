import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const apiKey = '4D-pz_Kz7UX_3scJ01mt7oiZ5wQYULf_cNZ5tqIWKyYIHpwnp1l2WWw7KVD9C1Up';
  const res = await fetch(`https://api.genius.com/search?q=${query}&access_token=${apiKey}`);

  // console.log(res);
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
  
  const data = await res.json();
  return NextResponse.json(data);
} 
