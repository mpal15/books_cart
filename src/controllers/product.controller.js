import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController{

    getProducts(req,res){
        let products = ProductModel.get();
        console.log(products)
        return res.render("product",{product:products})
        // return res.sendFile(
        //     path.join(path.resolve(),'src','views','product.html'),
        //     )

    }
    AddNewForm(req,res){
        return res.render("add_product",{
           errorMessage:null, 
        });
    }
  AddNewProduct(req,res){
   
    ProductModel.add(req.body);
    let products = ProductModel.get();
    console.log(req.body)
    return res.render("product",{product:products})
  }

  getUpdateproductView(req,res){
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if(productFound){
        res.render('update_product',{
            products:productFound,
            errorMessage:null,
        });
    }
    else{
        res.status(401).send('product is not found');
    }

  }

  postUpdateProduct(req,res){
  ProductModel.update(req.body);
   var products = ProductModel.get();
   return res.render('product', {product:products} );

  }
  deleteProduct(req,res){
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if(!productFound){
        res.status(401).send('product is not found');
    
    }
     ProductModel.delete(id);
     var products = ProductModel.get();
     return res.render('product', {product:products} );

  }
}