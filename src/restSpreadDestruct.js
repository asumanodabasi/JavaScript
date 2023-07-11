function add(bisey,...numbers) { //rest  =toparlar yani istediğin kadar sayı gir
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
    console.log(bisey) 
}

add(20,30)  // bisey=20  numbers=30 olur

let maximum=[10,2,600,8,33]
console.log(Math.max(...maximum))  //spread =ayrıstırır

//destructing:parcalamak =gelen veileri değişkenlere atıyoz
let [icAnadolu,Marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",popilation:"20M" },
    {name:"Marmara",popilation:"20M"},
    {name:"Karadeniz",popilation:"20M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.popilation)
console.log(icAnadoluSehirleri)

//destruct obje ornegi

let newProductName,newUnitPrice,newQuantitiy
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantitiy}
    ={productName:"ELma",unitPrice:12,quantity:5}
)

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantitiy)