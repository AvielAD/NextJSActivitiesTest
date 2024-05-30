import { NextRequest, NextResponse } from "next/server";
import { productadddto, productodto } from "./producto.dto";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const productosprisma = await prisma.productos.findMany()
    return NextResponse.json(productosprisma)
}

export async function POST(req: NextRequest){
    const data:productadddto = await req.json()

    const responseProduct = await prisma.productos.create({
        data:{
            Nombre: data.Nombre,
            Descripcion: data.Descripcion,
            Costo: data.Costo
        }
    })
    
    return NextResponse.json({message: "Producto agregado correctamente", succedded: true})
}

export async function PUT(req: NextRequest){
    const data:productodto = await req.json()

    const responseUpdate = await prisma.productos.update({
        where: {
            Id: data.Id
        },
        data:{
            Nombre: data.Nombre,
            Descripcion: data.Descripcion,
            Costo: data.Costo
        }
    })

    return NextResponse.json({message: "Producto actualizado correctamente", succedded: true})

}

export async function DELETE(req: NextRequest){
    let searchParams = req.nextUrl.searchParams
    const id = parseInt( searchParams.get('id') ?? "0")

    const responseDelete = await prisma.productos.delete({
        where:{
            Id: id
        }
    })

    return NextResponse.json({message: "Producto eliminado correctamente", succedded: true})
}

