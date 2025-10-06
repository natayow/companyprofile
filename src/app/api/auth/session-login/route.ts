import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function GET() {
  try {
    // Check if there's a current user session and ensure it's valid
    const currentUser = await Backendless.UserService.getCurrentUser();
    
    if (currentUser) {
      try {
        // Verify that the session is still valid
        const isValidUser = await Backendless.UserService.isValidLogin();
        
        if (isValidUser) {
          return NextResponse.json({
            message: 'User is logged in',
            isLoggedIn: true,
            user: currentUser,
          });
        }
      } catch (validationError) {
        console.error('Session validation error:', validationError);
      }
    }

    // If we reach here, either no session exists or it's invalid
    return NextResponse.json({
      message: 'No active session',
      isLoggedIn: false,
      user: null,
    });
  } catch (error: any) {
    console.error('Session check error:', error);
    return NextResponse.json({
      message: error?.message || 'Failed to check session',
      isLoggedIn: false,
      user: null,
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data?.objectId) {
      return NextResponse.json({
        message: 'User ID is required',
        isLoggedIn: false,
      }, { status: 400 });
    }

    // First try to restore the user session
    try {
      const currentUser = await Backendless.UserService.getCurrentUser();
      if (currentUser) {
        return NextResponse.json({
          message: 'Session restored',
          isLoggedIn: true,
          user: currentUser,
        });
      }
    } catch (sessionError) {
      console.error('Failed to restore session:', sessionError);
    }

    // If no active session, try to find the user and create a new session
    const user = await Backendless.Data.of('Users').findById(data.objectId);
    
    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        isLoggedIn: false,
      }, { status: 404 });
    }

    // Return the found user without trying to recreate session
    // as we don't have access to the password
    return NextResponse.json({
      message: 'Successfully retrieved user data',
      isLoggedIn: true,
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error?.message || 'Failed to login',
      isLoggedIn: false,
    }, { status: 500 });
  }
}