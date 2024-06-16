const typeDefs = `#graphql
    type Producto{
        Nombre: String!
        Descripcion: String!
        Costo: Int!
    }
    input NewProductoInput{
        Nombre: String!
        Descripcion: String!
        Costo: Int!
    }
    type Query{
        Productos: [Producto]
    }
    type Mutation{
        createProducto(input: NewProductoInput!): Producto
    }
`
export default typeDefs