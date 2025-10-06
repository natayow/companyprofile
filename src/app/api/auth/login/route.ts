import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

interface BackendlessError extends Error {
  code?: number;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate input
    if (!data?.email || !data?.password) {
      return NextResponse.json({
        message: 'Email and password are required',
        success: false
      }, { status: 400 });
    }

    // Attempt to login with "stayLoggedIn" set to true for session persistence
    const response = await Backendless.UserService.login(
      data.email,
      data.password,
      true // Enable session persistence
    );

    if (!response) {
      return NextResponse.json({
        message: 'Login failed',
        success: false
      }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Successfully logged in',
      success: true,
      data: response
    });
  } catch (error: unknown) {
    // Type guard to ensure error is BackendlessError
    const backendlessError = error as BackendlessError;
    
    // Log the actual error for debugging
    console.error('Login error:', backendlessError);
    
    // Format error response
    const errorResponse = {
      success: false,
      message: backendlessError.message || 'Authentication failed',
      details: {
        code: backendlessError.code,
        message: backendlessError.message
      }
    };

    // Handle different error cases
    switch (backendlessError.code) {
      case 3003:
        return NextResponse.json({
          ...errorResponse,
          message: 'Invalid email or password'
        }, { status: 401 });
      
      case 3020:
      case 3033:
        return NextResponse.json({
          ...errorResponse,
          message: 'User not found'
        }, { status: 401 });
      
      default:
        return NextResponse.json({
          ...errorResponse,
          message: 'Login failed. Please try again.'
        }, { status: 500 });
    }
  }
}





/* 
  Media Pengiriman Data di HTTP Request:
  1. Body
  2. Headers
  3. Url:
     - Query
     - Params
*/