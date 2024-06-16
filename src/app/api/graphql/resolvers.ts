import Producto from "../producto/Schemas/Producto"

const resolvers = {
    Query:{
        productos: async ()=>{
            return await Producto.find()
        }
    },
    Mutation:{
        createProducto: (root: any, args: any)=>{
            const newProducto = new Producto({...args.input})
            return Producto.create
        }
    }
}