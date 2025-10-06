import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";
import { BlogData } from "@/types/blog";

interface BackendlessError extends Error {
  code?: number;
  message: string;
}

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    console.log('Fetching blog with ID:', context.params.id);
    
    if (!context.params.id) {
      console.error('No ID provided');
      return NextResponse.json(
        { error: "No blog ID provided" },
        { status: 400 }
      );
    }

    const queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause(`objectId = '${context.params.id}'`);
    const blogs = await Backendless.Data.of('Blogs').find(queryBuilder);
    const blog = blogs[0];
    console.log('Blog data:', blog);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: blog }, { status: 200 });
  } catch (error: unknown) {
    const backendlessError = error as BackendlessError;
    console.error('Error fetching blog:', backendlessError);
    return NextResponse.json(
      { error: "Error fetching blog", details: backendlessError.message },
      { status: 500 }
    );
  }
}