function addToCart(productName="Yumurta",quantity) {
    console.log("Sepete eklendi:"+productName+ "   adet: "+quantity)
}

addToCart() //burda default olarak yumurta gosterilir adet undefined olur
addToCart(undefined,10) //yumurta 10 olur
addToCart("Elma")

let sayHello=()=>{
    console.log("Hello World")
}

let sayHello2=function(){
    console.log("Hello World2")
}
sayHello2()

let product1={productName:"Elma",unitPrice:15,quantity:5}

function addToCart2(product) {
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.unitPrice)
    console.log("Fiyat: "+product.quantity)
}

addToCart2(product1) //product1=product olmuş oldu

let product2={productName:"Anannas",unitPrice:12,quantity:2}
let product3={productName:"Anannas",unitPrice:12,quantity:2}

product2=product3
product2.productName="KArpuz"
console.log(product3.productName) //referans tip old. icin consola KArpuz yazar 