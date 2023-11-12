export default class ProductModel {
    constructor(id,name,desc,price,image){
        this.id = id,
        this.name  = name,
        this.price = price,
        this.desc = desc
        this.image = image
    }
    static get(){
        return  product;
    }
    static add(productObj){
        let newProduct = new ProductModel(
            product.length+1,
            productObj.name,
            productObj.desc,
            productObj.price,
            productObj.image,

        )
        product.push(newProduct);

    }

    static getById(id){
        return product.find((p)=>p.id==id);
    }
    static update(productObj){
        const index = product.findIndex(p=>p.id==productObj.id)
        product[index] = productObj;
    }
    static delete(id){
        const index =product.findIndex((p)=>p.id = id);
        product.splice(index,1);
    }
}
var product = [
    new ProductModel(1,"Atomic Habits","A supremely practical and useful book.",300,"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg")
];