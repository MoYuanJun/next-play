import { NextResponse } from 'next/server';

const mockData = ['Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!'];

export async function GET() {
  return NextResponse.json(mockData);
}
