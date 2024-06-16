import mongoose from "mongoose";
import { productadddto } from "../producto.dto";

const ProductoSchema = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true
        },
        Descripcion: {
            type: String,
            required: true
        },
        Costo: {
            type: Number,
            required: true
        }
    }
)

export default mongoose.model('Producto', ProductoSchema)