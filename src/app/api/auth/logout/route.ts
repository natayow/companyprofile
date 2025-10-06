import { NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST() {
  try {
    await Backendless.UserService.logout();
    
    return NextResponse.json({
      message: 'Successfully logged out',
      success: true
    });
  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json({
      message: error?.message || 'Error during logout',
      success: false
    }, { status: 500 });
  }
}