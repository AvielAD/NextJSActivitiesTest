import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req: NextRequest, {params}: {params: {slug: string}}) {
    const id = parseInt(params.slug)

    const responsebyid = await prisma.productos.findFirstOrThrow({
        where:{
            Id: id
        }
    }) 

    return NextResponse.json(responsebyid)
}

