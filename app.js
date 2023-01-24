const express =  require("express");

const app = express();

let productos = ['pantalon 1', 'pantalon 2'];

app.use(express.json());

app.get('/', (req, res) => {
   res.json({
      productos
  }) 
});

app.post('/', (req, res) => {
   const producto = req.body.producto;
   productos.push(producto);
   res.status(200).json({
       msg: 'se creo exitosamente el producto',
       productos
   })
});

app.put('/:index', (req, res) => {
   const index = req.params.index;
   const producto = req.body.producto;

   productos[index] = producto;
   res.json({
      msg:`producto (${index}) fue actualizado con exito `,
      productos
   })
});

app.delete('/:index', (req, res) => {
   const index = req.params.index;
   const productosFiltered = productos.filter((producto, i) => i != index);

   productos = productosFiltered;

   res.json({
      msg:'se elimino correctamente los productos',
      productos
   })
})

app.listen(3005, () => {
    console.log("servidor activo")
 })