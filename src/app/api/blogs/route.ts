import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";
import { getDefinedNamedExports } from "next/dist/build/utils";

export async function GET(req: NextRequest){
    try {
const queryBuilder = Backendless.DataQueryBuilder.create().setPageSize(100);
const blogsData = await Backendless.Data.of('Blogs').find(queryBuilder);
    
    return NextResponse.json(
        {
            data: blogsData,
            message: 'Get data products successfully'
        },
        {
            status: 200,
        }
    );
        
    } catch (error) {
        return  NextResponse.json(
            {
            
            message: 'Something went wrong'
        },
        {
            status: 500,
        }
        )
    }
};

export async function POST(req: NextRequest) {
    try {
        const data = await req.json(); //req.json digunakan untuk mengambil request data yg dikirimkan oleh frontend app

        await Backendless.Data.of('Blogs').save(data);

        return NextResponse.json(
            {
                message: 'Create blog successful'
            },
            {
                status: 201,
            }
        )
    } catch (error) {
        console.log(error)

        return  NextResponse.json(
            {
            
            message: 'Something went wrong'
        },
        {
            status: 500,
        }
        )
    }
}