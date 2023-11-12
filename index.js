import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import EjsLayouts from "express-ejs-layouts";
import path from "path";
import validatemiddleware from "./src/middleware/validateRequest.middleware.js";
const server = express();

server.use(express.static('public'));

server.set("view engine" ,"ejs")
server.set("views",path.join(path.resolve(),"src","views"))
server.use(EjsLayouts);
server.use(express.urlencoded({extended:true}));
const productController = new ProductController();
server.get('/', productController.getProducts)
server.get('/new',productController.AddNewForm);
server.post('/',validatemiddleware,productController.AddNewProduct);
server.get('/update_product/:id',productController.getUpdateproductView);
server.post('/update_product',productController.postUpdateProduct);
server.post('/delete_product/:id',productController.deleteProduct);
// server.get('/',(req,res)=>{
//     return res.send('welcome to inventory App')

// });

server.listen(8000,()=>console.log("server is running"));
