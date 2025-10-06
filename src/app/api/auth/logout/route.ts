import { NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

interface BackendlessError extends Error {
  code?: number;
  message: string;
}

export async function POST() {
  try {
    await Backendless.UserService.logout();
    
    return NextResponse.json({
      message: 'Successfully logged out',
      success: true
    });
  } catch (error: unknown) {
    const backendlessError = error as BackendlessError;
    console.error('Logout error:', backendlessError);
    return NextResponse.json({
      message: backendlessError.message || 'Error during logout',
      success: false
    }, { status: 500 });
  }
}